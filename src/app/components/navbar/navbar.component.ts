import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isSidenavOpen = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleMenu() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  closeSidenav() {
    this.sidenav.close();
    this.isSidenavOpen = false;
  }

  ngOnInit() {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.el.nativeElement.contains(e.target)) {
        this.closeSidenav();
      }
    });
  }
}
