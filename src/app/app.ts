import { Component } from '@angular/core';
import { EncabezadoComponent } from './componentes/encabezado/encabezado';
import { UsuarioComponent } from './componentes/usuario/usuario';
import { TareasComponent } from './componentes/tareas/tareas';
import { Usuario, USUARIOS } from './usuarios-falsos';

@Component({
  selector: 'app-root',
  imports: [EncabezadoComponent, UsuarioComponent, TareasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  usuarios: Usuario[] = USUARIOS;
  usuarioActual: Usuario | null = this.usuarios[0];

  seleccionarUsuario(usuario: Usuario): void {
    this.usuarioActual = usuario;
  }
}
