import { Persona } from "./Persona";

export class Legislador extends Persona {
    provinciaRepresenta: string;
    partidoPolitico: string;
    numeroOficinaAsamblea: number;

    constructor(
        idCodigo: string,
        cedula: string,
        nombre: string,
        apellido: string,
        fechaNacimiento: string,
        estado: string,
        provinciaRepresenta: string,
        partidoPolitico: string,
        numeroOficinaAsamblea: number
    ) {
        super(idCodigo, cedula, nombre, apellido, fechaNacimiento, estado);
        this.provinciaRepresenta = provinciaRepresenta;
        this.partidoPolitico = partidoPolitico;
        this.numeroOficinaAsamblea = numeroOficinaAsamblea;
    }

    /*
    ProyectoPresentado(aprobado: boolean): number {
        return 0; 
    }

    */
    CalcularSueldo(): number {
        return 0; 
    }
}
