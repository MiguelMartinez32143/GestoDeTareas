import { Component } from '@angular/core';
import { EncabezadoComponent } from './componentes/encabezado/encabezado';
import { UsuarioComponent } from './componentes/usuario/usuario';
import { TareasComponent } from './componentes/tareas/tareas';
import { Colaborador, LISTA_COLABORADORES } from './usuarios-falsos';

@Component({
  selector: 'app-root',
  imports: [EncabezadoComponent, UsuarioComponent, TareasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  colaboradores: Colaborador[] = LISTA_COLABORADORES;
  colaboradorActual: Colaborador | null = this.colaboradores[0];

  asignarColaborador(colaborador: Colaborador): void {
    this.colaboradorActual = colaborador;
  }
}
