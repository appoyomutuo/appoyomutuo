import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import { ProyectoService } from 'src/app/services/proyecto.service';
import { Usuario } from 'src/app/models/usuario';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public logueado : boolean;
  public usuario : any;
  constructor(private _service : AuthService,
    private proyectoService: ProyectoService,
    private router:Router) {
    this.logueado = false
  }

  displayName = ""
  userMail = ""
  noPhoto = false
  showPopUp = false

  newUser: any = {
    idUsuario: "",
    nombre: "",
    mail: "",
    ubicacion: "",
    descripcion: "",
    short: "",
    foto: "",
    fotoName:""
  }

  usertoEdit: any = {}

  subscription: Subscription
  subscription2: Subscription

  loading = true

  done = false

  ngOnInit(): void {
    console.log("entro")
    this.getUsuarioFromDB()
  }

  usuarioLogueado(){
    this._service.getInfoUsuarioLoggeado().subscribe(res=>{
      if(res != null){
        this.logueado = true;
        this.usuario = res;
        this.displayName = sessionStorage.getItem("displayName")
        this.userMail = sessionStorage.getItem("usermail")
        this.noPhoto = true
      }
      else{
        this.logueado = false;
        this.noPhoto = false
      }
    });
  }

  getUsuarioFromDB(){
    console.log("getUsuarioFromDB")
    if(!this.done){
      this.subscription = this.proyectoService.getUsuarioByMail(sessionStorage.getItem("usermail")).subscribe(usuario =>{
        if(usuario.length === 0){
          this.usuarioLogueado();
          console.log("no se encuentra usuario")
        }else{
          console.log("se encuentra usuario", usuario)
          let dbUser:any = usuario[0]
          this.newUser = dbUser
          this.displayName = this.newUser.nombre
          this.userMail = sessionStorage.getItem("usermail")
          this.usertoEdit = this.newUser
        }
        this.loading = false
        this.subscription.unsubscribe()
        this.done = true
      })
    }
  }

  showPopup(){
    this.showPopUp = true
  }

  closePopUp(){
    this.showPopUp = false
  }

  updateUser(user:any){
    this.loading = true
    this.newUser = user.user
    this.newUser.mail = sessionStorage.getItem("usermail")

    this.subscription2 = this.proyectoService.getUsuarioByMail(this.newUser.mail).subscribe(async usuario =>{
      if(usuario.length === 0){
        this.proyectoService.addUsuarioAndImage(this.newUser, this.newUser.foto)
      }else{
        if(this.newUser.fotoName === usuario[0].fotoName){
          // this.proyectoService.addUsuarioAndImage(user.user,  user.user.foto)
          this.proyectoService.updateUsuario(user.user)
        }else{
          this.proyectoService.addUsuarioAndImage(user.user, this.newUser.foto)
          this.proyectoService.deleteUsuario(usuario[0].idUsuario)
        }
      }
      this.resolveAfter2Seconds(30).then(value => {
        // this.getUsuarioFromDB()
        this.loading = false
        window.location.reload(); 
      });
      
      this.subscription2.unsubscribe()
    })
  }

  resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 3000);
    });
  }

}
