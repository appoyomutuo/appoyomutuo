import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tareas';

@Component({
  selector: 'popup-newtarea',
  templateUrl: './popup-newtarea.component.html',
  styleUrls: ['./popup-newtarea.component.css']
})
export class PopupNewtareaComponent {
  @Input() tareaToRead: Tarea[];
  @Output() closePopUp = new EventEmitter<{ closePopUP: Boolean }>();
  @Output() createNewTask = new EventEmitter<{ newTask: Tarea }>();
  @Output() editTask = new EventEmitter<{ newTask: Tarea }>();
  @Output() deleteTask = new EventEmitter<{ newTask: Tarea }>();
  closePopUP: Boolean = false

  newTarea:any = {
    idTarea:"",
    idProyecto:"",
    nombre:"",
    descripcion: "",
    idLista:""
  }

  isReading = false

  ngOnInit(): void {
    if(this.tareaToRead != null){
      this.newTarea = this.tareaToRead
      this.isReading = true
    }else{
      this.isReading = false
    }
  }

  closeModal(){
    this.closePopUp.emit({ closePopUP: this.closePopUP });
  }

  createTarea(){
    this.createNewTask.emit({ newTask: this.newTarea });
    this.closeModal()
  }

  editTarea(){
    this.editTask.emit({ newTask: this.newTarea });
    this.closeModal()
  }

  deleteTarea(){
    this.deleteTask.emit({ newTask: this.newTarea });
    this.closeModal()
  }
}
