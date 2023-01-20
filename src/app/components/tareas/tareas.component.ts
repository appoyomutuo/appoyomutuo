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
import { Subscription } from 'rxjs';

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

  tareaToRead: any

  subscription: Subscription
  subscription2: Subscription

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((query: any) => {
      this.id = query.project
    });
    this.getTareas()
  }

  getTareas(){
    if(this.id){
      this.subscription = this.proyectoService.getItemByID(this.id).subscribe(proyecto =>{
        this.project = proyecto!
        // console.log("proyecto recibido", this.project)
        //GET TAREAS
        if(this.project != null){
          this.subscription2 = this.proyectoService.getTasksByIDProject(this.project.id).subscribe(tareas =>{
            console.log("proyecto", this.project)
            console.log("tareas recibidas", tareas)
            this.tareas = tareas!
            this.subscription2.unsubscribe()
            this.organiceTareas(this.tareas)
          })
        }
        this.subscription.unsubscribe()
      })
    }
  }

  organiceTareas(tareas:any){
    this.todo = []
    this.doing = []
    this.done = []
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
    this.tareaToRead = null
  }

  readTarea(item:any){
    this.tareaToRead = item
    this.showPopUp_newTarea = true
  }

  closePopUpFilters(){
    this.tareaToRead = []
    this.showPopUp_newTarea = false
  }

  createNewTask(task:any){
    task.newTask.idProyecto = this.project.id
    this.newTask = task.newTask
    this.newTask.idLista = "cdk-drop-list-0"
    // this.newTask.idTarea = this.project.id + this.tareas.length + 1
    this.proyectoService.addTask(this.newTask)
    this.getTareas()
  }

  updateTask(item:any, newContainer:any){
    item.idLista = newContainer
    this.proyectoService.updateTask(item)
    this.getTareas()
    // console.log("update tarea: " , item, newContainer)
  }

  editTask(item:any){
    console.log("edit task", item)
    this.proyectoService.editTask(item)
    this.getTareas()
  }

  deleteTask(item:any){
    this.proyectoService.deleteTask(item)
    this.getTareas()
  }
}
