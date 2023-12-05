// projects.component.ts
import { Component } from '@angular/core';
import { Project } from './project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private router: Router) { }

  projectsData =[
    {
      "id": 1,
      "title": "Proyecto de Agricultura Sostenible",
      "image": "project1.jpg",
      "description": "Un proyecto dedicado a la agricultura sostenible, promoviendo prácticas respetuosas con el medio ambiente.",
      "tags": ["Agricultura", "Sostenibilidad"],
      "community": "Andalucía",
      "website": "https://www.agriculturasostenible.com",
      "details": {
        "latitude": 37.3861,
        "longitude": -5.9824,
        "contact": "contacto@agriculturasostenible.com",
        "images": ["project1_1.jpg", "project1_2.jpg", "project1_3.jpg"]
      }
    },
    {
      "id": 2,
      "title": "Cooperativa de Energía Renovable",
      "image": "project2.jpg",
      "description": "Una cooperativa que genera electricidad a partir de fuentes renovables, impulsando la energía limpia.",
      "tags": ["Energía", "Renovable"],
      "community": "Madrid",
      "website": "https://www.energiarenovablecoop.com",
      "details": {
        "latitude": 41.3851,
        "longitude": 2.1734,
        "contact": "contacto@energiarenovablecoop.com",
        "images": ["project2_1.jpg", "project2_2.jpg", "project2_3.jpg"]
      }
    },
    {
      "id": 3,
      "title": "Proyecto de Arte Comunitario",
      "image": "project3.jpg",
      "description": "Un proyecto que promueve la expresión artística y cultural local, conectando a artistas y amantes del arte.",
      "tags": ["Arte", "Cultura"],
      "community": "Madrid",
      "website": "https://www.artecomunitario.es",
      "details": {
        "latitude": 40.4168,
        "longitude": -3.7038,
        "contact": "contacto@arteartesania.com",
        "images": ["project3_1.jpg", "project3_2.jpg", "project3_3.jpg"]
      }
    },
    {
      "id": 4,
      "title": "Proyecto de Reciclaje Innovador",
      "image": "project4.jpg",
      "description": "Un proyecto que transforma materiales reciclados en productos útiles, contribuyendo al cuidado del medio ambiente.",
      "tags": ["Reciclaje", "Innovación"],
      "community": "Valencia",
      "website": "https://www.reciclajeinnovador.org",
      "details": {
        "latitude": 39.4699,
        "longitude": -0.3763,
        "contact": "contacto@reciclajeinnovador.org",
        "images": ["project4_1.jpg", "project4_2.jpg", "project4_3.jpg"]
      }
    },
    {
      "id": 5,
      "title": "Cooperativa de Consumo Ecológico",
      "image": "project5.jpg",
      "description": "Una cooperativa que ofrece alimentos frescos y productos sostenibles directamente de productores locales.",
      "tags": ["Consumo", "Ecológico"],
      "community": "Galicia",
      "website": "https://www.consumoecologicocoop.com",
      "details": {
        "latitude": 42.8782,
        "longitude": -8.5448,
        "contact": "contacto@consumoecologicocoop.com",
        "images": ["project5_1.jpg", "project5_2.jpg", "project5_3.jpg"]
      }
    },
    {
      "id": 6,
      "title": "Proyecto de Educación Ambiental",
      "image": "project6.jpg",
      "description": "Un proyecto que trabaja para concienciar y educar sobre la importancia de la conservación del medio ambiente.",
      "tags": ["Educación", "Medio Ambiente"],
      "community": "Asturias",
      "website": "https://www.educacionambiental.org",
      "details": {
        "latitude": 43.3619,
        "longitude": -5.8494,
        "contact": "contacto@educacionambiental.org",
        "images": ["project6_1.jpg", "project6_2.jpg", "project6_3.jpg"]
      }
    },
    {
      "id": 7,
      "title": "Huertos Urbanos Colaborativos",
      "image": "project7.jpg",
      "description": "Un proyecto que transforma espacios urbanos en áreas verdes y productivas para la comunidad.",
      "tags": ["Huertos", "Colaboración"],
      "community": "Canarias",
      "website": "https://www.huertoscolaborativos.es",
      "details": {
        "latitude": 28.6135,
        "longitude": -16.2486,
        "contact": "contacto@huertoscolaborativos.es",
        "images": ["project7_1.jpg", "project7_2.jpg", "project7_3.jpg"]
      }
    },
    {
      "id": 8,
      "title": "Red de Comercio Justo",
      "image": "project8.jpg",
      "description": "Una red que apoya a productores locales y promueve prácticas comerciales éticas y sostenibles.",
      "tags": ["Comercio", "Ética"],
      "community": "Navarra",
      "website": "https://www.comerciojusto.org",
      "details": {
        "latitude": 42.8125,
        "longitude": -1.6458,
        "contact": "contacto@comerciojusto.org",
        "images": ["project8_1.jpg", "project8_2.jpg", "project8_3.jpg"]
      }
    },
    {
      "id": 9,
      "title": "Proyecto de Biodiversidad",
      "image": "project9.jpg",
      "description": "Un proyecto que trabaja para conservar y restaurar la diversidad biológica de nuestra región y proteger los ecosistemas locales.",
      "tags": ["Biodiversidad", "Conservación"],
      "community": "Murcia",
      "website": "https://www.biodiversidadproyecto.com",
      "details": {
        "latitude": 37.9922,
        "longitude": -1.1307,
        "contact": "contacto@biodiversidadproyecto.com",
        "images": ["project9_1.jpg", "project9_2.jpg", "project9_3.jpg"]
      }
    },
    {
      "id": 10,
      "title": "Comunidad de Artesanía Sostenible",
      "image": "project10.jpg",
      "description": "Una comunidad que promueve la artesanía local y la producción de objetos únicos y sostenibles.",
      "tags": ["Artesanía", "Sostenibilidad"],
      "community": "Castilla y León",
      "website": "https://www.artesaniasostenible.com",
      "details": {
        "latitude": 41.3851,
        "longitude": -4.5367,
        "contact": "contacto@artesaniasostenible.com",
        "images": ["project10_1.jpg", "project10_2.jpg", "project10_3.jpg"]
      }
    }
  ]
  

  projects: Project[] = this.projectsData; // Almacena todos los proyectos
  filteredProjects: Project[] = []; // Almacena los proyectos filtrados
  communities: string[] = []; // Almacena las comunidades disponibles
  selectedCommunity: string = ''; // Almacena la comunidad seleccionada

  ngOnInit(): void {
    this.filteredProjects = this.projects; // Inicialmente, muestra todos los proyectos
    this.extractCommunities();
  }

  // Función para reiniciar el filtro y mostrar todos los proyectos
  resetFilter() {
    this.filteredProjects = this.projects;
  }

  extractCommunities() {
    // Extrae las comunidades únicas de los proyectos
    this.communities = [...new Set(this.projects.map((project) => project.community))];
  }

  filterProjectsByCommunity() {
    // Filtra los proyectos según la comunidad seleccionada
    if (this.selectedCommunity) {
      this.filteredProjects = this.projects.filter((project) => project.community === this.selectedCommunity);
    } else {
      this.filteredProjects = this.projects; // Si no se selecciona ninguna comunidad, muestra todos los proyectos
    }
  }

  viewProjectDetails(id: number) {
    this.router.navigate(['project-detail', id]);
  }
}


