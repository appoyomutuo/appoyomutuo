import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("cajamail") cajamail! : ElementRef;
  @ViewChild("cajapassword") cajapassword! : ElementRef;

  public logueado : boolean;
  public usuario : any;

  constructor(private _auth : AuthService, private _router: Router) {
    this.logueado = false
   }

  ngOnInit(): void {
    this.usuarioLogueado()
  }

  logIn():void{
    var mail = this.cajamail.nativeElement.value;
    var contra = this.cajapassword.nativeElement.value;
    this._auth.login(mail, contra).then(res=> {
      console.log(res);
      // sessionStorage.setItem("usermail", mail)
      this._router.navigate(['perfil']);
    });
  }

  logInGoogle():void{
    var mail = this.cajamail.nativeElement.value;
    var contra = this.cajapassword.nativeElement.value;
    this._auth.loginGoogle(mail, contra).then(res=>{
      console.log(res);
      // sessionStorage.setItem("usermail", mail)
      // console.log(sessionStorage.getItem("usermail"))
      this._router.navigate(['myprojects']);
    });
  }

  usuarioLogueado(){
    this._auth.getInfoUsuarioLoggeado().subscribe(res=>{
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

}
