import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProyectoService } from 'src/app/services/proyecto.service';
import { Foro } from 'src/app/models/foro';
import { Subscription } from 'rxjs';

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

  noMensajes = false

  subscription2: Subscription
  subscription3: Subscription

  loading = true
  
  ngOnInit(): void {
    this.getMensajes()
  }

  getMensajes(){
    this.activatedRoute.queryParams.subscribe((query: any) => {
      this.id = query.project
    });

    if(this.id){
      this.subscription2 = this.proyectoService.getItemByID(this.id).subscribe(proyecto =>{
        this.project = proyecto!
        // GET FORO
        if(this.project != null){
          this.subscription3 = this.proyectoService.getForoByIdProject(this.id).subscribe(foro =>{
            this.foroMensajes = foro
            if(this.foroMensajes.length == 0){
              this.noMensajes = true
            }else{
              this.foroMensajes.forEach(foromensajeItems => {
                foromensajeItems.mensajes.forEach(items => {
                  var date = new Date(items.fecha)
                  items.fecha = date
                  console.log("fecha", date)
                  this.mensajes.push(items)
                  this.mensajes.sort(function(a,b){
                    return b.fecha - a.fecha;
                  });
                });
              });
            }
            this.subscription2.unsubscribe()
            this.subscription3.unsubscribe()
            this.loading = false
          })
        }
      })
    }
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
    this.getMensajes()
  }
}
