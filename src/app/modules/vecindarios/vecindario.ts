import { Negocio } from "app/modules/negocios/negocios";
import { Vecino } from "app/vecino/vecino";
import { ZonaVerde } from "app/zonaVerde/zonaVerde";
import { CentroComercial } from "app/centroComercial/centroComercial";

export class Vecindario {
    id: number;
    nombre: string;
    ciudad: string;
    localidad: string;
    vecinos?: Vecino[];
    negocios?: Negocio[];
    centrosComerciales?: CentroComercial[];
    zonasVerdes?: ZonaVerde[];

    constructor(
        id: number,
        nombre: string,
        ciudad: string,
        localidad: string,
        vecinos?: Vecino[],
        negocios?: Negocio[],
        centrosComerciales?: CentroComercial[],
        zonasVerdes?: ZonaVerde[]
    ) {
        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.localidad = localidad;
        this.vecinos = vecinos || [];
        this.negocios = negocios || [];
        this.centrosComerciales = centrosComerciales || [];
        this.zonasVerdes = zonasVerdes || [];
    }
}
