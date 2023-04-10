import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Evento } from 'src/app/models/evento';

@Component({
  selector: 'popup-create-event',
  templateUrl: './popup-create-event.component.html',
  styleUrls: ['./popup-create-event.component.css']
})
export class PopupCreateEventComponent {
  @Input() eventoToRead: any[];
  @Input() startDate: string;
  @Output() closePopUp = new EventEmitter<{ closePopUP: Boolean }>();
  @Output() createNewEvent = new EventEmitter<{ newEvent: any }>();
  @Output() editEvent = new EventEmitter<{ newEvent: any }>();
  @Output() deleteEvent = new EventEmitter<{ newEvent: any }>();
  closePopUP: Boolean = false

  newEvent: Evento = {
    idEvento: "",
    idProyecto: "",
    title: '',
    description: '',
    start: '',
    end: '',
    tiempoHora:12,
    tiempoMinuto:30,
    tiempoHoraFin:14,
    tiempoMinutoFin:30,
    day: 0,
    month: 0,
    year: 0
  }

  isReading = false

  ngOnInit(): void {
    if(this.eventoToRead != null){
      // this.newEvent = this.eventoToRead
      this.isReading = true
    }else{
      this.isReading = false
    }
  }

  closeModal(){
    this.closePopUp.emit({ closePopUP: this.closePopUP });
  }

  createEvent(){
    this.newEvent.start = this.startDate
    this.createNewEvent.emit({ newEvent: this.newEvent });
    this.closeModal()
  }

  click_EditEvent(){
    this.editEvent.emit({ newEvent: this.newEvent });
    this.closeModal()
  }

  click_DeleteEvent(){
    this.deleteEvent.emit({ newEvent: this.newEvent });
    this.closeModal()
  }
}
