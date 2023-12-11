import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent {
  items = [
    { title: 'Blog', route: '/admin/blog' },
    // Agrega más elementos aquí según sea necesario
  ];
}
