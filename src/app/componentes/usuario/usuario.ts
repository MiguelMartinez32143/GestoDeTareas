import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Colaborador } from '../../usuarios-falsos';

@Component({
    selector: 'app-usuario',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './usuario.html',
    styleUrl: './usuario.css',
})
export class UsuarioComponent {
    lista = input.required<Colaborador[]>();
    activo = input<Colaborador | null>(null);
    seleccion = output<Colaborador>();

    onSelectUser(colaborador: Colaborador): void {
        this.seleccion.emit(colaborador);
    }
}
