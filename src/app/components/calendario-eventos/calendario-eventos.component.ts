import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Evento } from 'src/app/models/evento';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-calendario-eventos',
  templateUrl: './calendario-eventos.component.html',
  styleUrls: ['./calendario-eventos.component.css']
})
export class CalendarioEventosComponent {
  Events: any[] = [];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    plugins:[dayGridPlugin,timeGridPlugin,interactionPlugin]
  };

  newEvent: Evento = {
    idEvento: "",
    idProyecto: "",
    title: '',
    description: '',
    start: '',
    tiempoHora:"12",
    tiempoMinuto:"30",
    tiempoHoraFin:"14",
    tiempoMinutoFin:"30",
    end: '',
    day: 0,
    month: 0,
    year: 0
  }

  eventoToRead : Evento

  showPopUp_CreateEvent = false

  project: any
  id = ""
  startDate = ""

  subscription: Subscription
  subscription2: Subscription
  subscription3: Subscription

  loading = true

  isEditing = false

  constructor(
    private proyectoService: ProyectoService,
    private activatedRoute: ActivatedRoute) {}

  onDateClick(res: any) {
    this.showPopUp_CreateEvent = true
    this.isEditing = false
    this.startDate = res.dateStr
  }

  onEventoClick(res: any) {
    var idEvento = res.event._def.extendedProps.idEvento
    this.subscription3 = this.proyectoService.getEventoByIdEvento(idEvento).subscribe(evento =>{
      if(evento){
        var event:any  = evento
        this.eventoToRead = event
        this.eventoToRead.idEvento = idEvento
      }
      // this.newEvent = evento
      this.isEditing = true
      this.showPopUp_CreateEvent = true
      this.subscription3.unsubscribe()
    })
  }

  ngOnInit() {
    this.setCalendar()
    this.getEventos()
  }

  setCalendar(){
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.onDateClick.bind(this),
        eventClick: this.onEventoClick.bind(this),
        events: this.Events,
        eventTimeFormat: {
          hour: '2-digit',
          minute: '2-digit',
          hour12:false
        }
      };
    }, 1500);
  }

  getEventos(){
    this.Events = []
    this.activatedRoute.queryParams.subscribe((query: any) => {
      this.id = query.project
    });
    
    if(this.id){
      this.proyectoService.getEventosByIdProject(this.id).subscribe(eventos =>{
        this.Events = eventos
        eventos.forEach(element => {
          element.start = element.start + "T" + element.tiempoHora + ":" + element.tiempoMinuto + ":00" 
          // console.log("element", element)
          // this.Events.push(element)
        });
        this.setCalendar()
        this.loading = false
      })
    }
  }

  closePopUp(){
    this.showPopUp_CreateEvent = false
  }

  createEvent(e:any){
    this.newEvent = e.newEvent
    this.newEvent.idProyecto = this.id
    if(this.newEvent.tiempoHora.toString().length < 2){
      var fixedHour = "0" + this.newEvent.tiempoHora
      this.newEvent.tiempoHora = fixedHour
    }
    if(this.newEvent.tiempoMinuto.toString().length < 2){
      var fixedHour = "0" + this.newEvent.tiempoMinuto
      this.newEvent.tiempoMinuto = fixedHour
    }
    this.proyectoService.addEvento(this.newEvent)

    this.getEventos()
  }

  editEvent(e:any){
    this.newEvent = e.newEvent
    this.newEvent.idProyecto = this.id
    if(this.newEvent.tiempoHora.toString().length < 2){
      var fixedHour = "0" + this.newEvent.tiempoHora
      this.newEvent.tiempoHora = fixedHour
    }
    if(this.newEvent.tiempoMinuto.toString().length < 2){
      var fixedHour = "0" + this.newEvent.tiempoMinuto
      this.newEvent.tiempoMinuto = fixedHour
    }
    this.proyectoService.editEvento(this.newEvent)

    this.getEventos()
  }

  deleteEvent(e:any){
    this.newEvent = e.newEvent
    this.newEvent.idProyecto = this.id
    this.proyectoService.deleteEvento(this.newEvent.idEvento)

    this.getEventos()
  }
}
