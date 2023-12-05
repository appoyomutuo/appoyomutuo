import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild(MatMenuTrigger, { static: false }) menuTrigger?: MatMenuTrigger;
  isMenuOpen = false;

  toggleMenu() {
    if (this.menuTrigger) {
      this.menuTrigger.toggleMenu();
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
