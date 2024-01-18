export class Persona {
    idCodigo: string;
    cedula: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    estado: string;

    constructor(
        idCodigo: string,
        cedula: string,
        nombre: string,
        apellido: string,
        fechaNacimiento: string,
        estado: string
    ) {
        this.idCodigo = idCodigo;
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.estado = estado;
    }
}