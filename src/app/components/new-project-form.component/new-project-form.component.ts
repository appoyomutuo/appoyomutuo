import { Component } from '@angular/core';

@Component({
  selector: 'app-new-project-form.component',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponentComponent {
  formData = {
    nombreGrupo: '',
    comunidad: '',
    ciudad: '',
    descripcionGrupo: '',
    funcionamiento: '',
    unirse: '',
    requisitos: '',
    perfilWeb: false,
  };

  submitForm() {
    // Agrega aquí la lógica para procesar el formulario, como enviar una solicitud HTTP
    console.log('Formulario enviado:', this.formData);
  }

}
