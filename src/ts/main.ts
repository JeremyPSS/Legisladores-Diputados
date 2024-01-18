import {Asambleista} from "./Asambleista";
import {Senador} from "./Senador";

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

//const bonificacionProyecto1 = asambleista1.ProyectoPresentado(true);
const sueldoAsambleista1 = asambleista1.CalcularSueldo();

//const bonificacionProyecto2 = asambleista2.ProyectoPresentado(false);
const sueldoAsambleista2 = asambleista2.CalcularSueldo();


const sueldoSenador1 = senador1.CalcularSueldo();


console.log(`Asambleista 1 - Sueldo: $${sueldoAsambleista1}`);
console.table(asambleista1);

console.log(`Asambleista 2 - Sueldo: $${sueldoAsambleista2}`);
console.table(asambleista2);
console.log(`Senador 1 - Sueldo: $${sueldoSenador1}`);
console.table(senador1);
