import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'popup-filters',
  templateUrl: './popup-filters.component.html',
  styleUrls: ['./popup-filters.component.css']
})
export class PopupFiltersComponent implements OnInit {
  @Output() closePopUp = new EventEmitter<{ closePopUP: Boolean }>();
  closePopUP: Boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    
  }

  closeModal(){
    this.closePopUp.emit({ closePopUP: this.closePopUP });
  }

}
