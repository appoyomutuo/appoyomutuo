export interface Peticion {
    $key?: string; //Angular necesita este campo.
    idPeticion: string;
    idProyecto: string;
    nombreProyecto:string;
    mailOwner:string;
    mailPeticion:string;
    nombre: string;
    mensaje: string;
    estado:Boolean;
    leida:Boolean
    borrada:Boolean;
}