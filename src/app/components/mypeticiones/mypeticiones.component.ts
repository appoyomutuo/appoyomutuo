import { Component } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/models/proyecto';
import { Participanteproyecto } from 'src/app/models/participanteproyecto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mypeticiones',
  templateUrl: './mypeticiones.component.html',
  styleUrls: ['./mypeticiones.component.css']
})
export class MypeticionesComponent {

  peticiones = []
  peticionesSinLeer = []

  loading = true

  showPopupAcceptPeticion = false

  decline = false

  constructor(private proyectoService: ProyectoService) { }

  subscription: Subscription

  ngOnInit(): void {
    this.getPeticiones()
  }

  getPeticiones() {
    this.subscription = this.proyectoService.getPeticionesByMail(sessionStorage.getItem("usermail")).subscribe(peticiones =>{
      console.log(peticiones)
      this.peticiones = peticiones
      // this.setPeticionesComoLeidas(this.peticiones)
      this.peticiones.forEach(element => {
        if(element.leida == false && element.borrada == false){
          this.peticionesSinLeer.push(element)
        }
      });
      this.loading = false
      this.subscription.unsubscribe()
      // this.setPeticionesComoLeidas(this.peticionesSinLeer)
    })

  }

  setPeticionesComoLeidas(peticiones:any){
    peticiones.forEach(element => {
      element.leida = true
      this.proyectoService.updatePeticion(element)
    });
  }

  acceptPeticion(peticion: any) {
    // marcar como aceptada
    peticion.estado = true
    peticion.leida = true
    this.proyectoService.updatePeticion(peticion)

    var newParticipante: Participanteproyecto = {
      id:"",
      idProyecto: peticion.idProyecto,
      mailParticipante:peticion.mailPeticion
    }

    this.proyectoService.addParticipante(newParticipante)

    this.showPopupAcceptPeticion = true

    // this.getPeticiones()

    // incluir una entrada en la colección participanteproyecto
    
    // // incluir un nuevo miembro en el proyecto
    // var project: any
    // // hack porque si no hace bucle infinito
    // var count = 0
    // this.proyectoService.getItemByID(peticion.idProyecto).subscribe(proyecto =>{
    //   if(count == 0){
    //     project = proyecto!
    //     project.participantes.push(peticion.mailPeticion)
    //     project.initialPeople ++
    //     project.id = peticion.idProyecto
    //     this.proyectoService.updateItem(project)
    //   }
    //   count++
    // })
  }

  declinePeticion(peticion: any) {
    this.showPopupAcceptPeticion = true
    this.decline = true
    peticion.borrada = true
    this.proyectoService.updatePeticion(peticion)
  }

  closePopUpAcceptTarea(){
    this.showPopupAcceptPeticion = false
    window.location.reload();
  }

}
