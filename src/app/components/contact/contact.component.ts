import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    nombre: '',
    email: '',
    mensaje: '',
    terminos: false
  };

  submitForm() {
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, una solicitud HTTP
    console.log('Formulario enviado:', this.formData);
  }
}
