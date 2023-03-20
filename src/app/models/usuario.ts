export interface Usuario {
    $key?: string; //Angular necesita este campo.
    idUsuario: string;
    nombre: string,
    mail: string,
    ubicacion: string,
    short:string,
    descripcion: string,
    foto: string[],
    fotoName: string
}