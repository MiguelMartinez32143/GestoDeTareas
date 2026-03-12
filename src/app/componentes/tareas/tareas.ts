import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaComponent } from '../tarea/tarea';
import { TareaNuevaComponent } from '../tarea-nueva/tarea-nueva';
import { Usuario, Tarea } from '../../usuarios-falsos';

@Component({
    selector: 'app-tareas',
    imports: [CommonModule, TareaComponent, TareaNuevaComponent],
    templateUrl: './tareas.html',
    styleUrl: './tareas.css',
})  
export class TareasComponent {
    usuario = input<Usuario | null>(null);

    mostrarModal = false;

    eliminarTarea(id: string) {
        const user = this.usuario();
        if (user) {
            user.tareas = user.tareas.filter((t) => t.id !== id);
        }
    }

    abrirModal() {
        this.mostrarModal = true;
    }

    cancelarTarea() {
        this.mostrarModal = false;
    }

    agregarTarea(nuevaData: { titulo: string; tiempo: string; resumen: string }) {
        const user = this.usuario();
        if (user) {
            const nueva: Tarea = {
                id: 't' + new Date().getTime(),
                titulo: nuevaData.titulo,
                tiempo: nuevaData.tiempo,
                resumen: nuevaData.resumen,
                terminada: false
            };
            user.tareas.push(nueva);
            this.cancelarTarea();
        }
    }
}
