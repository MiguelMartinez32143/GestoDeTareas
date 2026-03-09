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
      {
        id: 't2',
        titulo: 'Revisar estilos del encabezado',
        tiempo: '1 hora',
        resumen: 'Ajustar colores, tipografía y espaciado del componente header.',
        terminada: true,
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
        titulo: 'Crear componente de tareas',
        tiempo: '3 horas',
        resumen: 'Desarrollar el componente que lista y gestiona las tareas asignadas.',
        terminada: false,
      },
      {
        id: 't4',
        titulo: 'Conectar servicios REST',
        tiempo: '4 horas',
        resumen: 'Integrar la API REST con los componentes del frontend.',
        terminada: false,
      },
      {
        id: 't5',
        titulo: 'Escribir pruebas unitarias',
        tiempo: '2 horas',
        resumen: 'Cubrir los casos de prueba principales con Jasmine y Karma.',
        terminada: true,
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
        resumen: 'Preparar servidores, variables de entorno y scripts de despliegue.',
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
        resumen: 'Mejorar el rendimiento de las consultas más utilizadas en la base de datos.',
        terminada: false,
      },
      {
        id: 't8',
        titulo: 'Documentar API endpoints',
        tiempo: '2 horas',
        resumen: 'Escribir documentación técnica de todos los endpoints del backend.',
        terminada: true,
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
        resumen: 'Desarrollar el sistema de login con JWT y protección de rutas.',
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
        resumen: 'Migrar los datos del sistema legacy a la nueva estructura.',
        terminada: false,
      },
    ],
  },
];
