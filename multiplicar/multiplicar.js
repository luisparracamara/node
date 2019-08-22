const fs = require('fs');
const colors = require("colors");


let listarTabla = (base, limite = 10) => {

    console.log("=====================".green);
    
    for (let index = 1; index <= limite; index++) {
        let resultado = base * index;
        console.log(`${base} X ${index} = ` + resultado);

    }
    console.log("=====================".red);
}


let crearArchivo = (base, limite = 10) => {

    return new Promise ((resolve, reject) =>{

        if (!Number(base)) {
            reject(`La base ${base} no es un numero`);
            return;
        }

        let data = "";

        for (let index = 1; index <= limite; index++) {
            let resultado = base * index;
            console.log(`${base} X ${index} = ` + resultado + `\n`);

        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
           
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}



