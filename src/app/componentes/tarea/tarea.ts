import { Component, input } from '@angular/core';
import { Tarea } from '../../usuarios-falsos';

@Component({
    selector: 'app-tarea',
    templateUrl: './tarea.html',
    styleUrl: './tarea.css',
})
export class TareaComponent {
    tarea = input.required<Tarea>();

    marcarTerminada(): void {
        const t = this.tarea();
        (t as Tarea).terminada = !t.terminada;
    }
}
