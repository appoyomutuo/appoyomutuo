import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'popup-acceptpeticion',
  templateUrl: './popup-acceptpeticion.component.html',
  styleUrls: ['./popup-acceptpeticion.component.css']
})
export class PopupAcceptpeticionComponent {
  @Output() closePopUp = new EventEmitter<{ closePopUP: Boolean }>();
  @Input() decline :boolean
  closePopUP: Boolean = false

  declinePeticion = false

  ngOnInit(): void {
    this.declinePeticion = this.decline
  }

  closeModal(){
    this.closePopUp.emit({ closePopUP: this.closePopUP });
  }
}
