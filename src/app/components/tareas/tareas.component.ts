import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CdkDragDrop,
  CdkDragEnter,
  CdkDragMove,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';


import { ProyectoService } from 'src/app/services/proyecto.service';
import { Tarea } from 'src/app/models/tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute,
  ) { }

  showPopUp_newTarea:Boolean = false

  project: any;
  id: any

  tareas:any = []

  todo = [];
  doing = [];
  done = [];

  newTask:Tarea = {
    idTarea:"",
    idProyecto: "",
    nombre:"",
    descripcion:"",
    idLista:""
  }

  countOnInit = 0

  tareaToRead: any

  ngOnInit(): void {
    if(this.countOnInit == 0){
      this.activatedRoute.queryParams.subscribe((query: any) => {
        this.id = query.project
      });
  
      if(this.id){
        this.proyectoService.getItemByID(this.id).subscribe(proyecto =>{
          this.project = proyecto!
          // console.log("proyecto recibido", this.project)
          //GET TAREAS
          if(this.project != null){
            this.proyectoService.getTasksByIDProject(this.project.id).subscribe(tareas =>{
              console.log("tareas recibidas", tareas)
              this.tareas = tareas!
              this.organiceTareas(this.tareas)
            })
          }
        })
      }
    }
    this.countOnInit++
  }

  organiceTareas(tareas:any){
    if(tareas != null){
      tareas.forEach(tarea => {
        if(tarea.idLista == "cdk-drop-list-0"){
          this.todo.push(tarea)
        }else if(tarea.idLista == "cdk-drop-list-1"){
          this.doing.push(tarea)
        }else if(tarea.idLista == "cdk-drop-list-2"){
          this.done.push(tarea)
        }
      });
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.updateTask(event.container.data[event.currentIndex], event.container.id)
    }
  }

  showPopupNewTarea(){
    this.showPopUp_newTarea = !this.showPopUp_newTarea
  }

  readTarea(item:any){
    this.tareaToRead = item
    console.log("tarea padre", this.tareaToRead)
    this.showPopUp_newTarea = true
  }

  closePopUpFilters(){
    this.tareaToRead = []
    this.showPopUp_newTarea = false
  }

  createNewTask(task:any){
    console.log("create new task")
    task.newTask.idProyecto = this.project.id
    this.newTask = task.newTask
    this.newTask.idLista = "cdk-drop-list-0"
    // this.newTask.idTarea = this.project.id + this.tareas.length + 1
    this.proyectoService.addTask(this.newTask)
    this.showPopUp_newTarea = false
  }

  updateTask(item:any, newContainer:any){
    item.idLista = newContainer
    this.proyectoService.updateTask(item)
    // console.log("update tarea: " , item, newContainer)
  }

  editTask(item:any){
    console.log("edit task", item)
    this.proyectoService.editTask(item)
  }

  deleteTask(item:any){
    this.proyectoService.deleteTask(item)
  }
}
