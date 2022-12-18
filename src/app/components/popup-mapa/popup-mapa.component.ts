import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import {Map, marker, tileLayer} from 'leaflet';

@Component({
  selector: 'popup-mapa',
  templateUrl: './popup-mapa.component.html',
  styleUrls: ['./popup-mapa.component.css']
})
export class PopupMapaComponent implements AfterViewInit  {
  @Output() closePopUp = new EventEmitter<{ closePopUP: Boolean }>();
  @Output() setCoordinates = new EventEmitter<{ coordinates: String }>();
  closePopUP: Boolean = false
  coordinates: String = ""

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void 
  {
    //Init map & add tile
    const map = new Map('map').setView([40.391573973884405, -3.6876456316743167], 5);
    tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(map);
    var markers: L.Layer[] = []
    //onClick
    map.on("click", (e:any) =>{
      //Add marker
      // const myMarker = marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      if(markers.length > 0){
        map.removeLayer(markers[0])
      }
      const marker = new L.Marker(e.latlng, {draggable:true});
      map.addLayer(marker);
      markers = []
      markers.push(marker)
      this.sendCoordinates(e.latlng) 
      //marker.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
    });
  }

  sendCoordinates(coordinates:any){
    this.setCoordinates.emit({ coordinates: coordinates });
  }

  closeModal(){
    this.closePopUp.emit({ closePopUP: this.closePopUP });
  }
}
