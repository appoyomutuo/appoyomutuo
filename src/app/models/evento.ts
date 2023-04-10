export interface Evento {
    $key?: string; //Angular necesita este campo.
    idEvento: string;
    idProyecto: string;
    title: string;
    description: string;
    start:string;
    end:string;
    tiempoHora:number;
    tiempoMinuto:number;
    tiempoHoraFin:number;
    tiempoMinutoFin:number;
    day:number;
    month: number;
    year: number;
}