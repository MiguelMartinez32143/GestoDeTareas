import { Component, input, output } from '@angular/core';
import { Usuario } from '../../usuarios-falsos';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.html',
    styleUrl: './usuario.css',
})
export class UsuarioComponent {
    lista = input.required<Usuario[]>();
    activo = input<Usuario | null>(null);
    seleccion = output<Usuario>();

    onSelectUser(usuario: Usuario): void {
        this.seleccion.emit(usuario);
    }
}
