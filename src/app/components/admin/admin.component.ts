import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  usuario: string;
  password: string;

  constructor(private router: Router) { }

  onSubmit(form: NgForm) {
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log('Usuario:', this.usuario);
    console.log('Contraseña:', this.password);
    // Puedes agregar tu lógica de autenticación aquí
    if(this.usuario === 'admin' && this.password === '123admin'){
      this.router.navigate(['/adminDashBoard']);
    }else{
      console.log("error")
    }
  }
}
