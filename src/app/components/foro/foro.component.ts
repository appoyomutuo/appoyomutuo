import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProyectoService } from 'src/app/services/proyecto.service';
import { Foro } from 'src/app/models/foro';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent {
  
  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute
  ){}

  foro = {
    idForo: "",
    idProyecto: "",
    nombreProyecto: "",
    mensajes: [
    ]
  }

  foroMensajes=[]
  mensajes=[]

  newMensaje={
    mailAutor: "",
    mensaje: "",
    fecha: "",
  }

  project: any;
  id: any;

  countOnInit = 0
  
  ngOnInit(): void {
    if(this.countOnInit == 0){
      this.activatedRoute.queryParams.subscribe((query: any) => {
        this.id = query.project
      });
  
      if(this.id){
        this.proyectoService.getItemByID(this.id).subscribe(proyecto =>{
          this.project = proyecto!
          // console.log("proyecto recibido", this.project)
          // GET FORO
          if(this.project != null){
            this.proyectoService.getForoByIdProject(this.id).subscribe(foro =>{
              this.foroMensajes = foro
              this.foroMensajes.forEach(foromensajeItems => {
                foromensajeItems.mensajes.forEach(items => {
                  this.mensajes.push(items)
                });
              });
            })
          }
        })
      }
    }
    this.countOnInit++
  }

  addMensaje(){
    this.newMensaje.mailAutor = sessionStorage.getItem("usermail")
    var timeElapsed = Date.now();
    var today = new Date(timeElapsed);
    var date = today.toUTCString()
    this.newMensaje.fecha = date.slice(0, -7)
    this.foro.mensajes.push(this.newMensaje)
    if(this.foro.idProyecto == ""){
      this.foro.idProyecto = this.id
      this.foro.nombreProyecto = this.project.name
      console.log("foro", this.foro)
    }
    this.proyectoService.createForoAddFirstMensaje(this.foro)
  }
}
