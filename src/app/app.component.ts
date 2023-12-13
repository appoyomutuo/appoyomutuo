import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appoyo-mutuo-app';

  showFooter: boolean = false;

  constructor(private router: Router) {
    // Suscribirse a eventos de cambio de ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verificar si la URL actual es "/"
        this.showFooter = !(event.url === '/');
        console.log("HOOA", (event.url === '/'))
      }
    });
  }
}
