import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

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

  subscription: Subscription

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    console.log("isLogued", sessionStorage.getItem("isLogued"))
    if(sessionStorage.getItem("isLogued") == "true"){
      this.isLogued = "true"
      // this.getPeticiones()
    }
    else{
      this.isLogued = "false"
    }
  }

  menuClick(){
    console.log("click")
    this.showMenu = !this.showMenu
    if(sessionStorage.getItem("isLogued") == "true"){
      this.isLogued = "true"
      this.getPeticiones()
    }else{
      this.isLogued = "false"
    }
    // this.isLogued = sessionStorage.getItem("isLogued") == "true"? "true":"false"
  }

  getPeticiones(){
    this.subscription = this.proyectoService.getPeticionesByMail(sessionStorage.getItem("usermail")).subscribe(peticiones =>{
      peticiones.forEach(element => {
        if(element.borrada == false){
          this.nuevasPeticionesCount++
        }
      });
      this.subscription.unsubscribe()
    })
  }
}
