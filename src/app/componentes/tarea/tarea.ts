import { Component, input, output } from '@angular/core';
import { Tarea } from '../../usuarios-falsos';

@Component({
    selector: 'app-tarea',
    templateUrl: './tarea.html',
    styleUrl: './tarea.css',
})
export class TareaComponent {
    tarea = input.required<Tarea>();
    terminada = output<string>();

    marcarTerminada(): void {
        this.terminada.emit(this.tarea().id);
    }
}
