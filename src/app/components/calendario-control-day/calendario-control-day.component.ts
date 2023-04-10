import {Component, Input, OnInit} from '@angular/core';
import { Evento } from 'src/app/models/evento';

@Component({
  selector: 'calendario-control-day',
  templateUrl: './calendario-control-day.component.html',
  styleUrls: ['./calendario-control-day.component.css']
})
export class CalendarioControlDayComponent {
  set eventDay(value: Evento) {
    this._eventDay = value;
    this.checkIfToday();
  }

  @Input('eventDay') private _eventDay:Evento;

  isToday:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.checkIfToday();
  }

  checkIfToday(){
    let today = new Date();
    if( today.getFullYear() == this._eventDay.year
        && today.getMonth() == this._eventDay.month
        && today.getDate() == this._eventDay.day) {
      this.isToday = true;
    } else {
      this.isToday = false;
    }
  }
}
