/*
class Persona {
    IdCodigo: string;
    Cedula: string;
    Nombre: string;
    Apellido: string;
    FechaNacimiento: string;
    Estado: string;

    constructor(
        IdCodigo: string,
        Cedula: string,
        Nombre: string,
        Apellido: string,
        FechaNacimiento: string,
        Estado: string
    ) {
        this.IdCodigo = IdCodigo;
        this.Cedula = Cedula;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.FechaNacimiento = FechaNacimiento;
        this.Estado = Estado;
    }
}

class Legislador extends Persona {
    provinciaRepresenta: string;
    partidoPolitico: string;
    numeroOficinaAsamblea: number;

    constructor(
        IdCodigo: string,
        Cedula: string,
        Nombre: string,
        Apellido: string,
        FechaNacimiento: string,
        Estado: string,
        provinciaRepresenta: string,
        partidoPolitico: string,
        numeroOficinaAsamblea: number
    ) {
        super(IdCodigo, Cedula, Nombre, Apellido, FechaNacimiento, Estado);
        this.provinciaRepresenta = provinciaRepresenta;
        this.partidoPolitico = partidoPolitico;
        this.numeroOficinaAsamblea = numeroOficinaAsamblea;
    }

    ProyectoPresentado(aprobado: boolean): number {
        return 0; // Este método será implementado en las clases concretas
    }

    CalcularSueldo(): number {
        return 0; // Este método será implementado en las clases concretas
    }
}

class Asambleista extends Legislador {
    salarioMensual: number;
    proyectosAprobados: number;

    constructor(
        IdCodigo: string,
        Cedula: string,
        Nombre: string,
        Apellido: string,
        FechaNacimiento: string,
        Estado: string,
        provinciaRepresenta: string,
        partidoPolitico: string,
        numeroOficinaAsamblea: number,
        salarioMensual: number
    ) {
        super(
            IdCodigo,
            Cedula,
            Nombre,
            Apellido,
            FechaNacimiento,
            Estado,
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

class Senador extends Legislador {
    salarioMensual: number;
    comisiones: number;

    constructor(
        IdCodigo: string,
        Cedula: string,
        Nombre: string,
        Apellido: string,
        FechaNacimiento: string,
        Estado: string,
        provinciaRepresenta: string,
        partidoPolitico: string,
        numeroOficinaAsamblea: number,
        salarioMensual: number
    ) {
        super(
            IdCodigo,
            Cedula,
            Nombre,
            Apellido,
            FechaNacimiento,
            Estado,
            provinciaRepresenta,
            partidoPolitico,
            numeroOficinaAsamblea
        );
        this.salarioMensual = salarioMensual;
        this.comisiones = 0;
    }

    ProyectoPresentado(aprobado: boolean): number {
        // Los senadores no reciben bonificación por proyectos presentados
        return 0;
    }

    CalcularSueldo(): number {
        const sueldo = this.salarioMensual - this.salarioMensual * 0.0932; // Descuento del seguro social
        return sueldo + this.comisiones; // Sueldo más comisiones
    }
}

const asambleista1 = new Asambleista(
    'A001',
    '1234567890',
    'Jeremy',
    'Lopez',
    '2002-09-27',
    'Activo',
    'El Oro',
    'PartidoA',
    101,
    3000
);

const asambleista2 = new Asambleista(
    'A002',
    '0987654321',
    'Ana',
    'Gomez',
    '1995-05-15',
    'Activo',
    'Pichincha',
    'PartidoB',
    102,
    3200
);

const senador1 = new Senador(
    'S001',
    '1112223334',
    'Carlos',
    'Rodriguez',
    '1980-03-10',
    'Activo',
    'Guayas',
    'PartidoC',
    201,
    5000
);

const bonificacionProyecto1 = asambleista1.ProyectoPresentado(true);
const sueldoAsambleista1 = asambleista1.CalcularSueldo();

const bonificacionProyecto2 = asambleista2.ProyectoPresentado(false);
const sueldoAsambleista2 = asambleista2.CalcularSueldo();


const sueldoSenador1 = senador1.CalcularSueldo();


console.log(`Asambleista 1 - Sueldo: $${sueldoAsambleista1}`);
console.table(asambleista1);

console.log(`Asambleista 2 - Sueldo: $${sueldoAsambleista2}`);
console.table(asambleista2);
console.log(`Senador 1 - Sueldo: $${sueldoSenador1}`);
console.table(senador1);
*/