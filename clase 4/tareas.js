//1//

const producto = 'mochila'

const precio = 30000

let disponible = true;

let mensaje;

if (disponible) {
    mensaje = 'en stock';
} else {
    mensaje = 'sin stock';
}

console.log(`La ${producto} cuesta ${precio} y su disponibilidad es: ${mensaje}`);

//2//

const metros = 1000000000
   

if (metros <= 1000){
    console.log(`ir a pie`)
} else if (metros <= 10000){
    console.log(`ir en bicicleta`)
} else if (metros <= 30000){
    console.log(`ir en colectivo`)
} else if (metros <= 100000){
    console.log(`ir en auto`)
} else {
    console.log(`ir en avion`)
}

//3//

const frutas = ['bananas', 'manzanas', 'paltas', 'naranjas', 'mandarinas'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`¡No te olvides de comprar ${frutas[i]}!`);
}

//4//

const numeros = [150,200,562,352,325,945,484,211,654,];

let mayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}

console.log(`El mayor es ${mayor}`)


