import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  users: User[] = [
    { id: 1, name: 'Antonia Céspedes', avatar: 'img/1.jpg' },
    { id: 2, name: 'Emilia Torres', avatar: 'img/2.jpg' },
    { id: 3, name: 'Marcos Jeremías', avatar: 'img/3.jpg' },
    { id: 4, name: 'David Mercado', avatar: 'img/4.jpg' },
  ];

  selectedUser: User | null = this.users[0];

  selectUser(user: User): void {
    this.selectedUser = user;
  }
}
