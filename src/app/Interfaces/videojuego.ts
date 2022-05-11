export interface Videojuego {
    $key?: string; //Angular necesita este campo.
    title: string;
    year  : string;
    imagen: number;
    descripcion: number;
    favoritos : boolean;
  }