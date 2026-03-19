import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tarea, NuevaTareaInfo } from '../tarea/tarea.model';

@Component({
    selector: 'app-tarea-nueva',
    imports: [CommonModule, FormsModule],
    templateUrl: './tarea-nueva.html',
    styleUrl: './tarea-nueva.css',
})
export class TareaNuevaComponent {
    @Output() cancelar = new EventEmitter<void>();
    @Output() agregar = new EventEmitter<NuevaTareaInfo>();

    formulario = {
        titulo: '',
        tiempo: new Date(),
        resumen: ''
    };

    alCancelar() {
        this.cancelar.emit();
    }

    alAgregar() {
        const datos: NuevaTareaInfo = {
            titulo: this.formulario.titulo,
            tiempo: this.formulario.tiempo,
            resumen: this.formulario.resumen
        };
        this.agregar.emit(datos);
    }
}
