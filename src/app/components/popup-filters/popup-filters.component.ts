import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'popup-filters',
  templateUrl: './popup-filters.component.html',
  styleUrls: ['./popup-filters.component.css']
})
export class PopupFiltersComponent implements OnInit {
  @Output() closePopUp = new EventEmitter<{ closePopUP: Boolean }>();
  @Output() showSearched = new EventEmitter<{ proyects: any }>();
  @Output() changeCategory = new EventEmitter<{ category: string }>();
  closePopUP: Boolean = false

  selectedCategoria = ""
  selectedComunidad = ""

  subscription: Subscription
  subscription2: Subscription

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
  }

  handleCategoriaChange(e:any){
    this.selectedCategoria = e.target.value
  }

  handleComunidadChange(e:any){
    this.selectedComunidad = e.target.value
  }

  buscar(e:any){
    var proyectosEncontrados = []
    var proyectosByCategoria = []
    var proyectosByComunidad = []

    
    // CATEGORIA
    if(this.selectedCategoria != ""){
      this.subscription = this.proyectoService.getItemsByCategoria(this.selectedCategoria).subscribe(proyectos =>{
        proyectosByCategoria = proyectos
        console.log("categoria", this.selectedCategoria)
        proyectosByCategoria.forEach(element => {
          if(!proyectosEncontrados.includes(element)){
            proyectosEncontrados.push(element)
          }
        });
        this.subscription.unsubscribe()
        this.showSearched.emit({ proyects: proyectosEncontrados });
        this.changeCategory.emit({ category: this.selectedCategoria });
        this.closeModal()
      })
    }
    
    // COMUNIDAD
    if(this.selectedComunidad != ""){
      this.subscription2 = this.proyectoService.getItemsByComunidad(this.selectedComunidad).subscribe(proyectos =>{
        console.log("buscar")
        console.log(proyectos)
        proyectosByComunidad = proyectos
        proyectosByComunidad.forEach(element => {
          if(!proyectosEncontrados.includes(element)){
            proyectosEncontrados.push(element)
          }
        });
        this.subscription2.unsubscribe()
        this.showSearched.emit({ proyects: proyectosEncontrados });
        this.closeModal()
      })
    }
  }

  closeModal(){
    this.closePopUp.emit({ closePopUP: this.closePopUP });
  }

}
