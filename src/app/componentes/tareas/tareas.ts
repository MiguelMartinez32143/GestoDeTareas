import { Component, input } from '@angular/core';
import { TareaComponent } from '../tarea/tarea';
import { Usuario } from '../../usuarios-falsos';

@Component({
    selector: 'app-tareas',
    imports: [TareaComponent],
    templateUrl: './tareas.html',
    styleUrl: './tareas.css',
})
export class TareasComponent {
    usuario = input<Usuario | null>(null);
}
