export class Vecino {
    ID: number;
    nombre: string;
    edad: number;
    profilePic: string;
    descripcion: string;
   
    public constructor(ID: number, nombre: string, edad: number, profilePic: string, descripcion: string) {
        this.ID = ID;
        this.nombre = nombre;
        this.edad = edad;
        this.profilePic = profilePic;
        this.descripcion = descripcion;
    }
   }