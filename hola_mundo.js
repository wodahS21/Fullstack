//Imprime en pantalla
console.log('hola mundo esto se vera en Node JS Esto se vera en la terminal de comandos');
//Operacion Matematica
console.log(2*5);
//Esta linea nos dara error al ser un comando de frontend
//console.log(window);
//Imprime en consola todo lo relacionado con el modulo GLOBAL
console.log(global);
//Realizamos una funcionpara imprimir cada segundo 'hola nodejs'
setInterval(function(){
    console.log('hola nodejs');
},1000);