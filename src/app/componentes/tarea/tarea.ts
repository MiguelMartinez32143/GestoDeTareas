import { Component, input, output } from '@angular/core';
import { Tarea } from '../../usuarios-falsos';
import { TarjetaComponent } from '../tarjeta/tarjeta';

@Component({
    selector: 'app-tarea',
    imports: [TarjetaComponent],
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
