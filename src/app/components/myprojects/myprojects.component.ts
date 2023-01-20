import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements OnInit {

  ownProjects: any[] = []
  participationProjects: any[] = []

  loading = false

  userMail = ""

  constructor(
    private proyectoService: ProyectoService,
    private router:Router
  ) { }

  ngOnInit(): void {
    // proyectos propios
    this.userMail = sessionStorage.getItem("usermail")!
    console.log("user mail", this.userMail)
    this.loading = true
    this.proyectoService.searchItemByMail(this.userMail).subscribe(proyectos =>{
      console.log("mis proyectos recibido", proyectos)
      this.ownProjects = proyectos!
      this.loading = false
    })

    // proyectos en los que participo
    this.proyectoService.searchParticipantesByMail(this.userMail).subscribe(proyectosParticipante =>{
      console.log("proyectos en que participo recibido", proyectosParticipante)
      // this.participationProjects = proyectos!
      proyectosParticipante.forEach(element => {
        this.proyectoService.getItemByID(element.idProyecto).subscribe(proyecto =>{
          console.log("proyecto recibido", proyecto)
          this.participationProjects.push(proyecto)
          this.loading = false
        })
      });
    })
  }

  gotoProjectDetail(id:any){
    this.router.navigate(['/projectDetail'], { queryParams: { project: id } });
  }

  gotoTareas(id:any){
    this.router.navigate(['/tareas'], { queryParams: { project: id } });
  }

  gotoProjectForo(id:any){
    this.router.navigate(['/foro'], { queryParams: { project: id } });
  }

}
