import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent {

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
  ) { }

  project: any = null;
  id: any;

  latLong = ""

  subscription: Subscription

  editState: boolean = false;
  proyectoToEdit!: Proyecto;
  newImages: string[] = []
  tag: string = "";
  tags: string[] =[];

  categoria = ""
  participacion = ""

  firstCordinates = ""

  loading = true

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((query: any) => {
      this.id = query.project
    })

    this.subscription = this.proyectoService.getItemByID(this.id).subscribe(proyecto =>{
      console.log("proyecto recibido", proyecto)
      this.project = proyecto!
      // if(this.project.imagenes.length > 2){
      //   this.hasGallery = true
      // }
      this.project.id = this.id

      this.tags = this.project.tags
      this.latLong = this.project.ubication
      this.participacion = this.project.participationType
      console.log("partipacion", this.project.participationType)

      this.firstCordinates = this.project.ubication

      this.loading = false
      this.subscription.unsubscribe()
    })
  }

  onFileSelected(event:any){
    const files = event.target.files;
    this.newImages = files
    console.log("new Images", this.newImages)
  }

  setPeriod_Time(event:any, value:string){
    this.project.periodTime = value;
  }

  setPeriod_Money(event:any, value:string){
    this.project.periodMoney = value;
  }

  addTag(){
    if(this.tag != ""){
      this.project.tags.push(this.tag)
      console.log("tags", this.tags)
    }

    this.tag = ""
  }

  deleteTag(tag:any){
    var index = this.tags.indexOf(tag);
    if (tag !== -1) {
      this.project.tags.splice(index, 1);
    }
  }

  updateItem(){
    this.loading = true
    console.log("update item", this.project)
    if(this.newImages.length > 0){
      this.proyectoService.addNewImages(this.project,this.newImages)
    }else{
      this.proyectoService.updateItem(this.project);
    }
    this.resolveAfter2Seconds(30).then(value => {
      // this.getUsuarioFromDB()
      // this.loading = false
      window.location.reload(); 
    });
  }

  deleteItem(event: any, item: Proyecto){
    this.proyectoService.deleteItem(item);
  }

  deleteImage(imageIndex:any){
    console.log("borrar")
    this.project.imagenes.splice(imageIndex, 1)
  }

  handleComunidadChange(e:any){
    this.project.comunidad = e.target.value
  }

  handleParticipationChange(e:any){
    console.log("valuie", e.target.value)
    this.participacion = e.target.value

    if(this.participacion === "tiempo"){
      this.project.participationType_time = e.target.value
    }

    if(this.participacion === "dinero"){
      this.project.participationType_money = e.target.value
    }

    if(this.participacion === "ambas"){
      this.project.participationType_time = "tiempo"
      this.project.participationType_money = "dinero"
    }
  }

  handleCategoriaChange(e:any){
    this.categoria = e.target.value
    this.project.categoria = e.target.value
  }

  setCoordinates(event:any){
    this.project.ubication = event.coordinates.lat + "," + event.coordinates.lng
  }

  deleteProject(){

  }

  resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 5000);
    });
  }
}
