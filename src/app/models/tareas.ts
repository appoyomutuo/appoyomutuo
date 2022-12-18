export interface Tarea {
    $key?: string; //Angular necesita este campo.
    idTarea: string;
    idProyecto: string;
    nombre: string;
    descripcion: string;
    idLista:string;
}