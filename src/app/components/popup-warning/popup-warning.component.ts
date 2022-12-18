import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'popup-warning',
  templateUrl: './popup-warning.component.html',
  styleUrls: ['./popup-warning.component.css']
})
export class PopupWarningComponent implements OnInit {
  @Output() closePopUp = new EventEmitter<{ closePopUP: Boolean }>();
  closePopUP: Boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.closePopUp.emit({ closePopUP: this.closePopUP });
  }

}
