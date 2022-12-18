import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'circularmenu',
  templateUrl: './circularmenu.component.html',
  styleUrls: ['./circularmenu.component.css']
})
export class CircularmenuComponent implements OnInit {

  currentMenu: String = "0"
  breadcrumb:String = "Inicio"

  currentInfoImage:String = ""

  constructor() { }

  ngOnInit(): void {
  }

  goTo(value:String){
    console.log("goTo", value)
    this.currentMenu = value
    this.breadcrumb = value === "0"? "Inicio":"< Volver"
    this.currentInfoImage = ""
  }

  goToBuscador(value:String){
    console.log("goToBuscador", value)
  }

  showInfo(imagen:String){
    var imageID = "../../../assets/img/imagenes/info" +  imagen + ".png"
    this.currentInfoImage = imageID;
  }
}
