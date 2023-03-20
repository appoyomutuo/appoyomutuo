import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'popup-editarperfil',
  templateUrl: './popup-editarperfil.component.html',
  styleUrls: ['./popup-editarperfil.component.css']
})
export class PopupEditarperfilComponent {
  @Input() usertoEdit: Usuario[];
  @Output() closePopUp = new EventEmitter<{ closePopUP: Boolean }>();
  @Output() updateUser = new EventEmitter<{ user: Usuario }>();

  user: any ={
    idUsuario:"",
    nombre: "",
    mail: "",
    ubicacion: "",
    descripcion: "",
    short: "",
    foto: [],
    fotoName: ""
  }

  foto = []
  fotoName = ""

  newFoto = ""

  ngOnInit(): void {
    console.log("this.usertoEdit", this.usertoEdit)
    if(this.usertoEdit !== null){
      this.user = this.usertoEdit
      console.log("user short", this.user.short)
    }else{
      console.log("aqui")
    }
  }

  closePopUP: Boolean = false

  closeModal(){
    this.closePopUp.emit({ closePopUP: this.closePopUP });;
  }

  editUsuario(){
    if(this.newFoto !== ""){
      this.user.foto = this.newFoto
      this.user.fotoName = this.fotoName
    }
    this.updateUser.emit({ user: this.user });
    this.closeModal()
  }

  onFileSelected(event:any){
    const files = event.target.files;
    // console.log("files", files)
    this.newFoto = files
    this.fotoName = files[0].name
  }
}
