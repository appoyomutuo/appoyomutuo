import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import {Map, marker, tileLayer} from 'leaflet';

@Component({
  selector: 'mapa-detalle',
  templateUrl: './mapa-detalle.component.html',
  styleUrls: ['./mapa-detalle.component.css']
})
export class MapaDetalleComponent implements AfterViewInit{
  @Input() latLong!: string;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void 
  {
    console.log("latlong", this.latLong)
    var lat = parseFloat(this.latLong.split(",")[0])
    var long = parseFloat(this.latLong.split(",")[1])
    console.log("lat", lat)
    console.log("long", long)
    var latLongParse ={
      lat:lat,
      lng:long
    }

    //Init map & add tile
    const map = new Map('map').setView([lat, long], 10);
    tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(map);
    var markers: L.Layer[] = []
    const marker = new L.Marker(latLongParse, {draggable:true});
    map.addLayer(marker);
    markers = []
    markers.push(marker)
  }
}
