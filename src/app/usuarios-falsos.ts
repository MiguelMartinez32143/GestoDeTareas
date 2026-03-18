export interface Tarea {
  id: string;
  titulo: string;
  tiempo: string;
  resumen: string;
  terminada: boolean;
}

export interface Usuario {
  id: string;
  nombre: string;
  avatar: string;
  tareas: Tarea[];
}

export const USUARIOS: Usuario[] = [
  {
    id: 'u1',
    nombre: 'Antonio Céspedes',
    avatar: 'img/1.jpg',
    tareas: [
      {
        id: 't1',
        titulo: 'Diseñar la interfaz de inicio',
        tiempo: '2 horas',
        resumen: 'Crear los mockups y prototipos de la pantalla principal del sistema.',
        terminada: false,
      },
    ],
  },
  {
    id: 'u2',
    nombre: 'Andres Torres',
    avatar: 'img/2.jpg',
    tareas: [
      {
        id: 't3',
        titulo: 'Crear componentes',
        tiempo: '3 horas',
        resumen: 'Desarrollar los componentes de la aplicacion',
        terminada: false,
      },
    ],
  },
  {
    id: 'u3',
    nombre: 'Marcos Jeremías',
    avatar: 'img/3.jpg',
    tareas: [
      {
        id: 't6',
        titulo: 'Configurar entorno de producción',
        tiempo: '5 horas',
        resumen: 'Configurar el entorno de producción',
        terminada: false,
      },
    ],
  },
  {
    id: 'u4',
    nombre: 'Daniela Mercado',
    avatar: 'img/4.jpg',
    tareas: [
      {
        id: 't7',
        titulo: 'Optimizar consultas SQL',
        tiempo: '3 horas',
        resumen: 'Mejorar el rendimiento de las consultas',
        terminada: false,
      },
    ],
  },
  {
    id: 'u5',
    nombre: 'Jhonatan Martinez',
    avatar: 'img/5.jpg',
    tareas: [
      {
        id: 't9',
        titulo: 'Implementar autenticación',
        tiempo: '6 horas',
        resumen: 'Desarrollar el sistema de login.',
        terminada: false,
      },

    ],
  },
  {
    id: 'u6',
    nombre: 'Adrián Serbio',
    avatar: 'img/6.jpg',
    tareas: [
      {
        id: 't11',
        titulo: 'Migrar base de datos',
        tiempo: '4 horas',
        resumen: 'Migrar los datos del sistema legacy',
        terminada: false,
      },
    ],
  },
];
