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

  currentData:any= []

  proyectos: any[] = [] as Proyecto[];

  categoria: ""
  categoriaTransform: string = ""
  hasCategoria = false

  totalProjects = 0

  loading = false

  constructor(private proyectoService: ProyectoService) { }


  ngOnInit(): void {
    // this.proyectoService.getItems().subscribe(proyectos =>{
    //   // console.log("::::> datos de Proyectos: " + JSON.stringify(proyectos));
    //   this.proyectos = proyectos;
    //   this.currentData =  this.proyectos
    // })
    // this.busquedaInicial(this.categoria)
  }

  selectCategoria(categoria:any){
    this.hasCategoria = true
    this.categoria = categoria
    if(categoria == "agricultura_alimentacion"){
      this.categoriaTransform = "Agricultura y Alimentación"
    }
    if(categoria == "autoempleo_educacion"){
      this.categoriaTransform = "Autoempleo y Educación"
    }
    if(categoria == "salud_cuidados"){
      this.categoriaTransform = "Salud y Cuidados"
    }
    if(categoria == "creacionartistica"){
      this.categoriaTransform = "Creación Artística"
    }
    if(categoria == "espacios_vivienda"){
      this.categoriaTransform = "Espacios y Vivienda"
    }
    if(categoria == "tecnologia_energia"){
      this.categoriaTransform = "Tecnología y Energía"
    }
    if(categoria == "ocio_viajes"){
      this.categoriaTransform = "Ocio y Viajes"
    }
    if(categoria == "acciones_asambleas"){
      this.categoriaTransform = "Acciones y Asambleas"
    }

    this.busquedaInicial(this.categoria)
  }

  showAll(){
    this.proyectos = [];
    this.currentData =  [];
    this.loading = true;
    this.proyectoService.getItems().subscribe(proyectos =>{
      // console.log("::::> datos de Proyectos: " + JSON.stringify(proyectos));
      this.proyectos = proyectos;
      this.currentData =  this.proyectos
      this.totalProjects = this.proyectos.length
      this.categoriaTransform = "Todos los Proyectos"
      this.loading = false
    })

  }
  
  busquedaInicial(categoria:string){
    this.loading = true
    this.proyectoService.getItemsByCategoria(categoria).subscribe(proyectos =>{
      console.log("::::> datos de Proyectos: " + JSON.stringify(proyectos));
      this.proyectos = proyectos
      this.currentData =  this.proyectos
      this.totalProjects = this.proyectos.length
      this.loading = false
    })
  }

  showSearched(proyects:any){
    this.loading = true
    this.proyectos = []
    this.currentData =  []
    if(this.proyectos.length == 0){
      console.log("proyectos length", this.proyectos.length)
      this.proyectos = proyects.proyects
      this.currentData =  this.proyectos
      this.totalProjects = this.proyectos.length
      this.loading = false
    }
  }

  changeCategory(category:any){
    console.log("salto", category.category)
    this.selectCategoria(category.category)
  }

  showPopUpFilters(){
    this.showPopUp_Filters = !this.showPopUp_Filters
  }

  closePopUpFilters(){
    this.showPopUp_Filters = false
  }

}
