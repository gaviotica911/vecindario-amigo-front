import { Negocio } from './negocios';

import { Vecindario } from '../vecindarios/vecindario';

export class NegocioDetail extends Negocio {
    

    constructor(
        id: number, 
        nombre: string, 
        descripcion: string, 
        profilePic: string, 
        numeroDeTelefonico: number, 
        calificacion: number, 
        vecindario: Vecindario, 
        
    ) {
        super(id, nombre, descripcion, profilePic, numeroDeTelefonico, calificacion, vecindario);
    }
}
