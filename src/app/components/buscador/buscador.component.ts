import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from '../../models/proyecto';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  showPopUp_Filters:Boolean = false

  // newProject: Proyecto ={
  //   id: "",
  //   name: "",
  //   description: "",
  //   ubication: "",
  //   initialPeople: 0,
  //   necessaryPeople: 0,
  //   requiredTime:0,
  //   period:"",
  //   imagePrincipal: "",
  //   offer:"",
  //   needs:"",
  //   contact:"",
  // }

  currentData:any= []

  proyectos: any[] = [] as Proyecto[];
  constructor(private proyectoService: ProyectoService) { }


  ngOnInit(): void {
    this.proyectoService.getItems().subscribe(proyectos =>{
      // console.log("::::> datos de Proyectos: " + JSON.stringify(proyectos));
      this.proyectos = proyectos;
      this.currentData =  this.proyectos
    })
  }

  showPopUpFilters(){
    this.showPopUp_Filters = !this.showPopUp_Filters
  }

  closePopUpFilters(){
    this.showPopUp_Filters = false
  }

}
