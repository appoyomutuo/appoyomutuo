import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../projects/project.model';
import { ProjectsComponent } from '../projects/projects.component'; // Importa el componente de proyectos

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  id = 0;

  constructor(private route: ActivatedRoute, private projectsComponent: ProjectsComponent) {}

  ngOnInit() {
    this.route.queryParams.subscribe((query: any) => {
      this.id = +query.id;
      this.project = this.findProjectById(this.id);
    });
  }
  

  private findProjectById(id: number): Project | undefined {
    return this.projectsComponent.projectsData.find((project) => project.id === id);
  }
  
  
}
