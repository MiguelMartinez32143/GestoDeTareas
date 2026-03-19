import { Injectable } from '@angular/core';
import { Tarea, NuevaTareaInfo } from './componentes/tarea/tarea.model';

@Injectable({
  providedIn: 'root'
})

export class TareaService {
  private tareas: Tarea[] = [
    {
      id: 't1',
      userId: 'u1',
      titulo: 'Diseñar la interfaz de inicio',
      tiempo: '2 horas',
      resumen: 'Crear los mockups y prototipos de la pantalla principal del sistema.',
      terminada: false,
      fecha: new Date()
    },
    {
      id: 't3',
      userId: 'u2',
      titulo: 'Crear componentes',
      tiempo: '3 horas',
      resumen: 'Desarrollar los componentes de la aplicacion',
      terminada: false,
      fecha: new Date()
    },
    {
      id: 't6',
      userId: 'u3',
      titulo: 'Configurar entorno de producción',
      tiempo: '5 horas',
      resumen: 'Configurar el entorno de producción',
      terminada: false,
      fecha: new Date()
    },
    {
      id: 't7',
      userId: 'u4',
      titulo: 'Optimizar consultas SQL',
      tiempo: '3 horas',
      resumen: 'Mejorar el rendimiento de las consultas',
      terminada: false,
      fecha: new Date()
    },
    {
      id: 't9',
      userId: 'u5',
      titulo: 'Implementar autenticación',
      tiempo: '6 horas',
      resumen: 'Desarrollar el sistema de login.',
      terminada: false,
      fecha: new Date()
    },
    {
      id: 't11',
      userId: 'u6',
      titulo: 'Migrar base de datos',
      tiempo: '4 horas',
      resumen: 'Migrar los datos del sistema legacy',
      terminada: false,
      fecha: new Date()
    }
  ];

  // Obtiene las tareas filtradas por usuario
  obtenerPorUsuario(userId: string) {
    return this.tareas.filter((t) => t.userId === userId);
  }

  // Elimina una tarea por su ID
  eliminar(id: string) {
    this.tareas = this.tareas.filter((t) => t.id !== id);
  }

  // Agrega una nueva tarea al usuario indicado
  agregar(userId: string, datos: NuevaTareaInfo) {
    const nueva: Tarea = {
      id: 't' + new Date().getTime(),
      userId: userId,
      titulo: datos.titulo,
      tiempo: datos.tiempo.toLocaleString(),
      resumen: datos.resumen,
      terminada: false,
      fecha: new Date()
    };
    this.tareas.push(nueva);
  }
}
