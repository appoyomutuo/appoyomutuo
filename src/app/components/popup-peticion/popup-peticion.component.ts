import { Component, EventEmitter, Output } from '@angular/core';
import { Peticion } from 'src/app/models/peticion';

@Component({
  selector: 'popup-peticion',
  templateUrl: './popup-peticion.component.html',
  styleUrls: ['./popup-peticion.component.css']
})
export class PopupPeticionComponent {
  @Output() closePopUp = new EventEmitter<{ closePopUP: Boolean }>();
  @Output() createNewPeticion = new EventEmitter<{ newPeticion: Peticion }>();
  closePopUP: Boolean = false

  newPeticion:Peticion = {
    idPeticion: "",
    idProyecto: "",
    nombreProyecto:"",
    mailOwner:"",
    mailPeticion:"",
    nombre: "",
    mensaje: "",
    estado:false,
    leida:false,
    borrada:false
  }

  ngOnInit(): void {
  }

  closeModal(){
    this.closePopUp.emit({ closePopUP: this.closePopUP });
  }

  createPeticion(){
    this.createNewPeticion.emit({ newPeticion: this.newPeticion });
  }
}
