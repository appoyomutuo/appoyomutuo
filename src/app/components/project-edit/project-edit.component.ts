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
  imagenes: string[] = []
  tag: string = "";
  tags: string[] =[];

  categoria = ""
  participacion = ""

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((query: any) => {
      this.id = query.project
    })

    console.log("hola", this.id)

    this.subscription = this.proyectoService.getItemByID(this.id).subscribe(proyecto =>{
      console.log("proyecto recibido", proyecto)
      this.project = proyecto!
      // if(this.project.imagenes.length > 2){
      //   this.hasGallery = true
      // }

      this.tags = this.project.tags
      this.latLong = this.project.ubication
      this.participacion = this.project.participationType
      console.log("partipacion", this.project.participationType)

      this.subscription.unsubscribe()
    })
  }

  editProject(){

  }

  onFileSelected(event:any){
    const files = event.target.files;
    this.imagenes = files
  }

  setPeriod(event:any, value:string){
    this.project.period = value;
  }

  addTag(){
    if(this.tag != ""){
      this.tags.push(this.tag)
      console.log("tags", this.tags)
    }
  }

  deleteItem(event: any, item: Proyecto){
    this.proyectoService.deleteItem(item);
  }

  editItem(event: any, item: Proyecto){
    this.editState = true;
    this.proyectoToEdit = item;
  }

  updateItem(item: Proyecto){
    this.proyectoService.updateItem(item);
  }

  handleComunidadChange(e:any){
    this.project.comunidad = e.target.value
  }

  handleParticipationChange(e:any){
    console.log("valuie", e.target.value)
    this.participacion = e.target.value
    this.project.participationType = e.target.value
  }

  handleCategoriaChange(e:any){
    this.categoria = e.target.value
    this.project.categoria = e.target.value
  }

  setCoordinates(event:any){
    this.project.ubication = event.coordinates.lat + "," + event.coordinates.lng
  }
}
