

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar.js");
const colors = require("colors");

const argv = require("./config/yargs").argv;


let base = "7";

let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite)
        break;
    case "crear":
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado ${archivo}`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log("comando no reconocido");       
        break;
}



