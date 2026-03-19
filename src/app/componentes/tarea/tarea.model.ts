export interface Tarea {
  id: string;
  userId: string;
  titulo: string;
  tiempo: string;
  resumen: string;
  terminada: boolean;
  fecha?: Date;
}

export interface NuevaTareaInfo {
    titulo: string;
    resumen: string;
    tiempo: Date;
}