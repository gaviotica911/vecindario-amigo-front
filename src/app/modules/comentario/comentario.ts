import { CentroComercial } from 'src/app/centroComercial/centroComercial';
import { Vecino } from '../vecino/vecino';
import { Negocio } from '../negocios/negocios';
import { Publicacion } from '../publicacion/publicacion';
import { ZonaVerde } from '../zonaVerde/zonaVerde';

export class Comentario {
    id: number;
    descripcion:string;
    fecha: any;
    nombre:string;
    centro_comercial:CentroComercial;
    negocio:Negocio;
    publicacion:Publicacion;
    zonaVerde:ZonaVerde;
    constructor(id: number, descripcion:string, fecha: any, nombre:string, centro_comercial:CentroComercial, negocio:Negocio, publicacion:Publicacion, zonaVerde:ZonaVerde) {     
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.nombre = nombre;
        this.centro_comercial = centro_comercial;
        this.negocio= negocio;
        this.publicacion= publicacion;
        this.zonaVerde= zonaVerde;
    }
}

