import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tarea-nueva',
    imports: [CommonModule, FormsModule],
    templateUrl: './tarea-nueva.html',
    styleUrl: './tarea-nueva.css',
})
export class TareaNuevaComponent {
    cerrar = output<void>();
    agregar = output<{ titulo: string, tiempo: string, resumen: string }>();

    nuevaTarea = {
        titulo: '',
        tiempo: '',
        resumen: ''
    };

    cerrarModal() {
        this.cerrar.emit();
    }

    guardarTarea() {
        const tareaAEnviar = {
            titulo: this.nuevaTarea.titulo,
            tiempo: `${this.nuevaTarea.tiempo} horas`,
            resumen: this.nuevaTarea.resumen
        };
        this.agregar.emit(tareaAEnviar);
    }
}
