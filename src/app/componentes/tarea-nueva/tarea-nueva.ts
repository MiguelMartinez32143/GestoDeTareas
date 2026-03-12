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
}
