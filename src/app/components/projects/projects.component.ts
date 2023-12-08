import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private router: Router) { }

  navigateToNewProjectForm() {
    this.router.navigate(['/newproject']); // Reemplaza '/projects' con la ruta real de tu sección de proyectos
  }
}
