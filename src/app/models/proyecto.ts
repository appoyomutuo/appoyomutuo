export interface Proyecto {
    $key?: string; //Angular necesita este campo.
    id: string;
    name: string;
    colectivo: string;
    description: string;
    categoria:string;
    tags:string[],
    ubication: string;
    direction: string;
    comunidad:string;
    initialPeople: number;
    necessaryPeople: number;
    requiredTime:string;
    requiredMoney:string;
    participationType_time:string;
    participationType_money:string;
    periodTime:string;
    periodMoney:string;
    imagenes: string[];
    offer:string;
    needs:string;
    contact:string;

    owner:string;
    fechaInicio: string;
    fechaFin: string;
    fechaCreacion:string;

    tareas:[];
    foroID:[];
}