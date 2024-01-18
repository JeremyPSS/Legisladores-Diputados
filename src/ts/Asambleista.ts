import { Legislador } from "./Legislador";

export class Asambleista extends Legislador {
    salarioMensual: number;
    proyectosAprobados: number;

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
        this.proyectosAprobados = 0;
    }

    ProyectoPresentado(aprobado: boolean): number {
        if (aprobado) {
            this.proyectosAprobados++;
            return 1000; // Bonificación por proyecto aprobado
        }
        return 0;
    }

    CalcularSueldo(): number {
        const sueldo = this.salarioMensual - this.salarioMensual * 0.0932; // Descuento del seguro social
        return sueldo + this.proyectosAprobados * 1000; // Sueldo más bonificaciones por proyectos
    }
}