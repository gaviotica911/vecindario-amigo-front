export class Negocio {
    ID: number;
    nombre: string;
    profilePic: string;
    descripcion: string;

    public constructor(ID: number, nombre: string, profilePic: string, descripcion: string) {
        this.ID = ID;
        this.nombre = nombre;
        this.profilePic = profilePic;
        this.descripcion = descripcion;
    }
   }