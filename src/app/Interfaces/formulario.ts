export interface Formulario {
    $key?: string; //Angular necesita este campo.
    nombre: string;
    apellidos  : string;
    dni: string;
    sexo: string;
    fecha: number;
  }