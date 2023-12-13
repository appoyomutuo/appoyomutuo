import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent {

  constructor(private router: Router) { }

  items = [
    { title: 'Blog', route: '/adminNewBlog' },
    // Agrega más elementos aquí según sea necesario
  ];

  // Función para navegar a la sección de Preguntas Frecuentes (FAQ)
  navigateTo() {
    this.router.navigate(['/faq']); // Reemplaza '/faq' con la ruta real de tu sección de preguntas frecuentes
  }
}
