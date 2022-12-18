import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProyectoService } from 'src/app/services/proyecto.service';

import { Peticion } from 'src/app/models/peticion';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
  ) { }

  project: any;
  id: any;
  hasGallery: any = false

  showPopUp_newPeticion: Boolean = false

  newPeticion:Peticion = {
    idPeticion: "",
    idProyecto: "",
    nombreProyecto:"",
    mailOwner:"",
    mailPeticion:"",
    nombre: "",
    mensaje: "",
    estado:false,
    leida:false
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((query: any) => {
      this.id = query.project
    })

    this.proyectoService.getItemByID(this.id).subscribe(proyecto =>{
      console.log("proyecto recibido", proyecto)
      this.project = proyecto!
      if(this.project.imagenes.length > 2){
        this.hasGallery = true
      }
    })
  }

  showPopupNewPeticion(){
    this.showPopUp_newPeticion = !this.showPopUp_newPeticion
  }

  closePopUpFilters(){
    this.showPopUp_newPeticion = false
  }

  createNewPeticion(peticion:any){
    this.newPeticion = peticion.newPeticion
    this.newPeticion.idProyecto = this.id
    this.newPeticion.mailOwner = this.project.owner
    this.newPeticion.nombreProyecto = this.project.name
    this.newPeticion.mailPeticion = sessionStorage.getItem("usermail")
    console.log("peticion creada", this.newPeticion)
    this.proyectoService.addPeticion(this.newPeticion)
    this.showPopUp_newPeticion = false
  }

}
