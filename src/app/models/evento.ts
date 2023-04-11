export interface Evento {
    $key?: string; //Angular necesita este campo.
    idEvento: string;
    idProyecto: string;
    title: string;
    description: string;
    start:string;
    end:string;
    tiempoHora:string;
    tiempoMinuto:string;
    tiempoHoraFin:string;
    tiempoMinutoFin:string;
    day:number;
    month: number;
    year: number;
}