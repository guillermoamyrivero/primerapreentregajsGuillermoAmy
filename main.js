const precioPorSublimacion = 600;
let colorCamisetas = "";
let cantidadCamisetas = 0;
let costoFinal = 0;

function calcularPrecio() {
    cantidadCamisetas = parseFloat(prompt("Ingrese cantidad de camisetas a comprar"));

    colorCamisetas = prompt("Ingrese el color de la camiseta (blanco o gris)");

    while (colorCamisetas !== "blanco" && colorCamisetas !== "gris") {
        colorCamisetas = prompt("Ingrese el color de la camiseta (blanco o gris)");
    }

    //Suponiendo que las grises salen 100$ más caras que las blancas..

    if (colorCamisetas == "gris") {
        costoFinal = (cantidadCamisetas * precioPorSublimacion + 100);
    } else if (colorCamisetas == "blanco") {
        costoFinal = (cantidadCamisetas * precioPorSublimacion);
    }

    alert("El costo total de las camisetas es: $" + costoFinal);

}

calcularPrecio();