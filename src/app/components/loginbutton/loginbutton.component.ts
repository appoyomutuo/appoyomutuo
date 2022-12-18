import { Component, OnInit } from '@angular/core';

import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-loginbutton',
  templateUrl: './loginbutton.component.html',
  styleUrls: ['./loginbutton.component.css']
})
export class LoginbuttonComponent implements OnInit {

  showMenu = false
  isLogued = "false"

  nuevasPeticionesCount = 0

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    console.log("isLogued", sessionStorage.getItem("isLogued"))
    if(sessionStorage.getItem("isLogued")){
      this.isLogued = "true"
      this.getPeticiones()
    }
  }

  menuClick(){
    console.log("click")
    this.showMenu = !this.showMenu
    // this.isLogued = sessionStorage.getItem("isLogued") == "true"? "true":"false"
  }

  getPeticiones(){
    this.proyectoService.getPeticionesByMail(sessionStorage.getItem("usermail")).subscribe(peticiones =>{
      peticiones.forEach(element => {
        if(element.leida == false){
          this.nuevasPeticionesCount++
        }
      });
    })
  }
}
