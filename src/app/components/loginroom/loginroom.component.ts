import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginroom',
  templateUrl: './loginroom.component.html',
  styleUrls: ['./loginroom.component.css']
})
export class LoginroomComponent implements OnInit {

  public logueado : boolean;
  public usuario : any;
  constructor(private _service : AuthService, private _router : Router) {
    this.logueado = false;
  }

  ngOnInit(): void {
    this.usuarioLogueado();
  }

  usuarioLogueado(){
    this._service.getInfoUsuarioLoggeado().subscribe(res=>{
      if(res != null){
        this.logueado = true;
        this.usuario = res;
        sessionStorage.setItem("usermail", this.usuario.email)
        sessionStorage.setItem("isLogued", "true")
      }
      else{
        this.logueado = false;
      }
     
    });
  }

  logOut():void{
    this._service.logOut().then(res => {
      this.logueado = false;
      this._router.navigate(["/"]);
    });
  }


}
