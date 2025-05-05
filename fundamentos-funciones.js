let cliente = "Kevin Almeida";
let edad = 21;
let carrito = [
  { nombre: "Camisa", precio: 25 },
  { nombre: "Pantalón", precio: 40 },
  { nombre: "Zapatos", precio: 60 }
];
let tieneDescuento = true;


function saludarCliente(nombre) {
  return "Bienvenida, " + nombre + "!";
}

// Función: Calcular total del carrito
const calcularTotal = (productos) => {
  let total = 0;
  for (let i = 0; i < productos.length; i++) {
    total += productos[i].precio;
  }
  return total;
};

const aplicarDescuento = function(total, porcentaje) {
  return total - (total * porcentaje / 100);
};


console.log(saludarCliente(cliente));

console.log("Productos en el carrito:");
for (let i = 0; i < carrito.length; i++) {
  console.log("-", carrito[i].nombre + ": $" + carrito[i].precio);
}


let totalCompra = calcularTotal(carrito);
console.log("Total sin descuento: $" + totalCompra);

// Aplicar descuento si corresponde
if (tieneDescuento) {
  totalCompra = aplicarDescuento(totalCompra, 10); // 10% de descuento
  console.log("¡Descuento aplicado del 10%!");
}

console.log("Total a pagar: $" + totalCompra.toFixed(2));


const clienteObj = {
  nombre: cliente,
  mostrarInfo: function() {
    console.log("Cliente: " + this.nombre + " - Edad: " + edad);
  }
};

clienteObj.mostrarInfo();
