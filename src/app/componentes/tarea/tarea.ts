import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { Tarea } from './tarea.model';
import { TarjetaComponent } from '../tarjeta/tarjeta';
import { TareaService } from '../../tarea.service';

@Component({
    selector: 'app-tarea',
    imports: [TarjetaComponent, DatePipe, TitleCasePipe],
    templateUrl: './tarea.html',
    styleUrl: './tarea.css',
})
export class TareaComponent {
    @Input({ required: true }) tarea!: Tarea;
    
    private tareaService = inject(TareaService);

    completar(): void {
        this.tareaService.eliminar(this.tarea.id);
    }
}
