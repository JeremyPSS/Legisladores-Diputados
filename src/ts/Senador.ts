import { Legislador } from "./Legislador";

export class Senador extends Legislador {
    salarioMensual: number;
    comisiones: number;

    constructor(
        idCodigo: string,
        cedula: string,
        nombre: string,
        apellido: string,
        fechaNacimiento: string,
        estado: string,
        provinciaRepresenta: string,
        partidoPolitico: string,
        numeroOficinaAsamblea: number,
        salarioMensual: number
    ) {
        super(
            idCodigo,
            cedula,
            nombre,
            apellido,
            fechaNacimiento,
            estado,
            provinciaRepresenta,
            partidoPolitico,
            numeroOficinaAsamblea
        );
        this.salarioMensual = salarioMensual;
        this.comisiones = 0;
    }

    /*
    ProyectoPresentado(aprobado: boolean): number {
        // Los senadores no reciben bonificación por proyectos presentados
        return 0;
    }

    */
    CalcularSueldo(): number {
        const sueldo = this.salarioMensual - this.salarioMensual * 0.0932; // Descuento del seguro social
        return sueldo + this.comisiones; // Sueldo más comisiones
    }
}

