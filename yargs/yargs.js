const { demandCommand } = require("yargs");


const yargs = require("yargs").options({
    direccion:{
        alias:'d',
        description:'Comando de direcciones',
        demand:true,
    }
}).argv;

module.exports={
    yargs
}