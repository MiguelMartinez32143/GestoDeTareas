import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../usuarios-falsos';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.html',
    styleUrl: './usuario.css',
})
export class UsuarioComponent {
    @Input({ required: true }) lista!: Usuario[];
    @Input() activo: Usuario | null = null;
    @Output() seleccion = new EventEmitter<Usuario>();

    alSeleccionarUsuario(usuario: Usuario): void {
        this.seleccion.emit(usuario);
    }
}
