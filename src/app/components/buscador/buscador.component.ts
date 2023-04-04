import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  categoria: string =  ""
  categoriaTransform: string = ""
  hasCategoria = false

  totalProjects = 0

  loading = false

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    if(sessionStorage.getItem("categoria") == null){
      this.activatedRoute.queryParams.subscribe((query: any) => {
        this.categoria = query.categoria
        this.selectCategoria(this.categoria)
        this.busquedaInicial(this.categoria)
      })
    }else{
      this.categoria = sessionStorage.getItem("categoria")
      this.selectCategoria(this.categoria)
      this.busquedaInicial(this.categoria)
    }
    
  }

  selectCategoria(categoria:any){
    this.hasCategoria = true
    this.categoria = categoria
    if(categoria == "agricultura_alimentacion"){
      this.categoriaTransform = "Agricultura y Alimentación"
      sessionStorage.setItem("categoria", this.categoria)
    }
    if(categoria == "autoempleo_educacion"){
      this.categoriaTransform = "Autoempleo y Educación"
      sessionStorage.setItem("categoria", this.categoria)
    }
    if(categoria == "salud_cuidados"){
      this.categoriaTransform = "Salud y Cuidados"
      sessionStorage.setItem("categoria", this.categoria)
    }
    if(categoria == "creacionartistica"){
      this.categoriaTransform = "Creación Artística"
      sessionStorage.setItem("categoria", this.categoria)
    }
    if(categoria == "espacios_vivienda"){
      this.categoriaTransform = "Espacios y Vivienda"
      sessionStorage.setItem("categoria", this.categoria)
    }
    if(categoria == "tecnologia_energia"){
      this.categoriaTransform = "Tecnología y Energía"
      sessionStorage.setItem("categoria", this.categoria)
    }
    if(categoria == "ocio_viajes"){
      this.categoriaTransform = "Ocio y Viajes"
      sessionStorage.setItem("categoria", this.categoria)
    }
    if(categoria == "acciones_asambleas"){
      this.categoriaTransform = "Acciones y Asambleas"
      sessionStorage.setItem("categoria", this.categoria)
    }
    
    if(categoria == "all"){
      this.showAll()
    }else{
      this.busquedaInicial(this.categoria)
    }

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
    console.log("entro aqui", categoria)
    this.loading = true
    this.proyectoService.getItemsByCategoria(categoria).subscribe(proyectos =>{
      // console.log("::::> datos de Proyectos: " + JSON.stringify(proyectos));
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
      this.proyectos = proyects.proyects
      this.currentData =  this.proyectos
      this.totalProjects = this.proyectos.length
      this.loading = false
    }
  }

  changeCategory(category:any){
    this.selectCategoria(category.category)
    sessionStorage.setItem("categoria", category.category)
  }

  showPopUpFilters(){
    this.showPopUp_Filters = !this.showPopUp_Filters
  }

  closePopUpFilters(){
    this.showPopUp_Filters = false
  }

}
