import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaComponent } from '../tarea/tarea';
import { TareaNuevaComponent } from '../tarea-nueva/tarea-nueva';
import { Usuario } from '../../usuarios-falsos';
import { Tarea, NuevaTareaInfo } from '../tarea/tarea.model';
import { TareaService } from '../../tarea.service';

@Component({
    selector: 'app-tareas',
    imports: [CommonModule, TareaComponent, TareaNuevaComponent],
    templateUrl: './tareas.html',
    styleUrl: './tareas.css',
})
export class TareasComponent {
    @Input({ required: true }) usuario!: Usuario;
    @Input({ required: true }) userId!: string;
    formularioVisible = false;

    // Inyección de dependencias por Constructor
    constructor(private tareaService: TareaService) {}

    // Tareas filtradas del servicio central
    get tareas() {
        return this.tareaService.obtenerPorUsuario(this.userId);
    }


    cerrarFormulario() {
        this.formularioVisible = false;
    }

    eliminar(id: string) {
        this.tareaService.eliminar(id);
    }

    guardarTarea(datos: NuevaTareaInfo) {
        this.tareaService.agregar(this.userId, datos);
        this.cerrarFormulario();
    }
}
