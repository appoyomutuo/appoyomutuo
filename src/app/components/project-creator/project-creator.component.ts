import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-project-creator',
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.css']
})
export class ProjectCreatorComponent implements OnInit {
  newProject: Proyecto ={
    id: "0",
    name: "",
    colectivo: "",
    description: "",
    categoria: "",
    tags:[],
    ubication: "",
    direction:"",
    comunidad: "",
    initialPeople: 0,
    necessaryPeople: 0,
    requiredTime:0,
    participationType:"",
    period:"semana",
    imagenes: [],
    offer:"",
    needs:"",
    contact:"",

    owner:"",
    fechaCreacion:"",

    tareas:[],
    foroID:[]
  }

  proyectos: any[] = [] as Proyecto[];
  editState: boolean = false;
  proyectoToEdit!: Proyecto;
  imagenes: string[] = []
  tag: string = "";
  tags: string[] =[];

  showPopUp_Filters = false
  showPopUp_Mapa = false

  categoria = ""
  participacion = ""


  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(){
    this.proyectoService.getItems().subscribe(proyectos =>{
      console.log("::::> datos de Proyectos: " + JSON.stringify(proyectos));
      this.proyectos = proyectos;
    })
  }

  async createProject(){
    if(sessionStorage.getItem("isLogued") === "true"){
      this.newProject.id = (this.proyectos.length +1).toString();
      this.newProject.owner = sessionStorage.getItem("usermail")!;
      this.newProject.tags = this.tags;
      var date = new Date()
      this.newProject.fechaCreacion = date.getDay().toString() + "/" + date.getMonth().toString() + "/" + date.getFullYear().toString()
      console.log("date", this.newProject.fechaCreacion)
      this.proyectoService.addItem2(this.newProject, this.imagenes)
      console.log("poyecto creado", this.newProject)
    }else{
      this.showPopUp_Filters = true
      console.log("poyecto creado", this.newProject)
    }
  }

  onFileSelected(event:any){
    const files = event.target.files;
    this.imagenes = files
  }

  setPeriod(event:any, value:string){
    this.newProject.period = value;
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

  closePopUpFilters(){
    this.showPopUp_Filters = false
  }

  showPopupMapa(){
    this.showPopUp_Mapa = true
  }

  closePopUpMapa(){
    this.showPopUp_Mapa = false
  }

  handleComunidadChange(e:any){
    this.newProject.comunidad = e.target.value
  }

  handleParticipationChange(e:any){
    console.log("valuie", e.target.value)
    this.participacion = e.target.value
    this.newProject.participationType = e.target.value
  }

  handleCategoriaChange(e:any){
    this.categoria = e.target.value
    this.newProject.categoria = e.target.value
  }

  setCoordinates(event:any){
    this.newProject.ubication = event.coordinates.lat + "," + event.coordinates.lng
  }
}
