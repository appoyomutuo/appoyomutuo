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
    requiredTime:number;
    participationType:string;
    period:string;
    imagenes: string[];
    offer:string;
    needs:string;
    contact:string;

    owner:string;
    fechaCreacion:string;

    tareas:[];
    foroID:[];
}