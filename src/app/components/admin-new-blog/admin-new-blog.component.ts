import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-new-blog',
  templateUrl: './admin-new-blog.component.html',
  styleUrls: ['./admin-new-blog.component.css']
})
export class AdminNewBlogComponent {
  formData = {
    title: '',
    shortDescription: '',
    content: '',
    imagen: null // Aquí puedes almacenar la imagen seleccionada
  };

  selectedImages: any[] = [];

  submitForm() {
    // Aquí puedes agregar la lógica para enviar el formulario, incluyendo las imágenes
    console.log('Entrada de Blog enviada:', this.formData);
    console.log('Imágenes seleccionadas:', this.selectedImages);
  }

  onFileSelected(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.selectedImages.push({ url: e.target.result, file: file });
      };

      reader.readAsDataURL(file);
    }
  }

  removeImage(index: number) {
    this.selectedImages.splice(index, 1);
  }
}
