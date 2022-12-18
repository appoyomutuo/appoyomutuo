export interface Foro {
    $key?: string; //Angular necesita este campo.
    idForo: string;
    idProyecto: string;
    nombreProyecto: string;
    mensajes: any[
    ];
}