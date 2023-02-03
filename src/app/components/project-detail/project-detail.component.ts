import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProyectoService } from 'src/app/services/proyecto.service';

import { Peticion } from 'src/app/models/peticion';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  project: any;
  id: any;
  hasGallery: any = false

  showPopUp_newPeticion: Boolean = false

  ownerMail = ""
  isOwner = false

  latLong = ""

  subscription: Subscription

  newPeticion:Peticion = {
    idPeticion: "",
    idProyecto: "",
    nombreProyecto:"",
    mailOwner:"",
    mailPeticion:"",
    nombre: "",
    mensaje: "",
    estado:false,
    leida:false,
    borrada:false
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((query: any) => {
      this.id = query.project
    })

    this.subscription = this.proyectoService.getItemByID(this.id).subscribe(proyecto =>{
      console.log("proyecto recibido", proyecto)
      this.project = proyecto!
      this.ownerMail = this.project.owner
      if(this.project.imagenes.length > 2){
        this.hasGallery = true
      }
      console.log("owner mail: ", this.ownerMail)
      if(sessionStorage.getItem("usermail") === this.ownerMail){
        this.isOwner = true
      }else{
        this.isOwner = false
      }

      this.latLong = this.project.ubication


      this.subscription.unsubscribe()
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

  editProject(){
    this.router.navigate(['/edit-project'], { queryParams: { project: this.id } });
  }

}
