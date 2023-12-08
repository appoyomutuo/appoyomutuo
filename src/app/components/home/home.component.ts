import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  // Función para navegar a la sección de Preguntas Frecuentes (FAQ)
  navigateToFAQ() {
    this.router.navigate(['/faq']); // Reemplaza '/faq' con la ruta real de tu sección de preguntas frecuentes
  }

  // Función para navegar a la sección de Proyectos
  navigateToProjects() {
    this.router.navigate(['/projects']); // Reemplaza '/projects' con la ruta real de tu sección de proyectos
  }

  navigateToNewProjectForm() {
    this.router.navigate(['/newproject']); // Reemplaza '/projects' con la ruta real de tu sección de proyectos
  }
}
