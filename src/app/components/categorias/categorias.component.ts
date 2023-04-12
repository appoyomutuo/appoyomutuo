import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  constructor(
    private router:Router
  ) { }

  selectCategoria(categoria:any){
    console.log("categoria", categoria)
    this.router.navigate(['/buscador'], { queryParams: { categoria: categoria } });
    // if(categoria == "agricultura_alimentacion"){
    //   this.categoriaTransform = "Agricultura y Alimentación"
    // }
    // if(categoria == "autoempleo_educacion"){
    //   this.categoriaTransform = "Autoempleo y Educación"
    // }
    // if(categoria == "salud_cuidados"){
    //   this.categoriaTransform = "Salud y Cuidados"
    // }
    // if(categoria == "creacionartistica"){
    //   this.categoriaTransform = "Creación Artística"
    // }
    // if(categoria == "espacios_vivienda"){
    //   this.categoriaTransform = "Espacios y Vivienda"
    // }
    // if(categoria == "tecnologia_energia"){
    //   this.categoriaTransform = "Tecnología y Energía"
    // }
    // if(categoria == "ocio_viajes"){
    //   this.categoriaTransform = "Ocio y Viajes"
    // }
    // if(categoria == "acciones_asambleas"){
    //   this.categoriaTransform = "Acciones y Asambleas"
    // }

    // this.busquedaInicial(this.categoria)

  }
}
