import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Colaborador } from '../../usuarios-falsos';

@Component({
    selector: 'app-tareas',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tareas.html',
    styleUrl: './tareas.css',
})
export class TareasComponent {
    colaborador = input<Colaborador | null>(null);
}
