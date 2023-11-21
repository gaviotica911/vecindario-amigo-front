import { Publicacion } from "../publicacion/publicacion";
import { Vecindario } from "../vecindarios/vecindario";



export class Negocio {
    id: number;
    nombre: string;
    descripcion: string;
    profilePic: string;
    vecindario: Vecindario;

    
    
    

    constructor(
        id: number,
        nombre: string,
        descripcion: string,
        profilePic: string,
        vecindario: Vecindario,
        
    

        
    ) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion =descripcion;
        this.profilePic=profilePic;
        this.vecindario=vecindario;
        
        
}
}