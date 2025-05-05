'use strict';

const productosAliExpress = [
  {
    nombre: "Smartwatch Fitness",
    precio: 29.99,
    categoria: "Tecnología",
    disponible: true,
    especificaciones: {
      color: "Negro",
      bateria: "7 días",
      bluetooth: true
    },
    opiniones: [
      "Muy útil para hacer ejercicio",
      "Buen precio y buena calidad",
      "La batería dura bastante"
    ]
  },
  {
    nombre: "Auriculares Bluetooth",
    precio: 15.99,
    categoria: "Tecnología",
    disponible: true,
    especificaciones: {
      color: "Blanco",
      bateria: "4 horas",
      bluetooth: true
    },
    opiniones: [
      "Sonido claro",
      "Se conectan rápido",
      "No aíslan bien el ruido"
    ]
  }
];

// Mostrar productos
console.log("=== LISTA DE PRODUCTOS ===");
productosAliExpress.forEach((producto, i) => {
  console.log(`${i + 1}. ${producto.nombre} - $${producto.precio}`);
});

console.log("\n=== PRODUCTOS POR MENOS DE $20 ===");
const productosBaratos = productosAliExpress.filter(p => p.precio < 20);
productosBaratos.forEach(p => {
  console.log(`- ${p.nombre} ($${p.precio})`);
});

console.log("\n=== RESUMEN DE PRODUCTOS ===");
const resumen = productosAliExpress.map(p => `${p.nombre} cuesta $${p.precio}`);
resumen.forEach(p => console.log(p));

console.log("\n=== BÚSQUEDA DE PRODUCTO ===");
const buscado = productosAliExpress.find(p => p.nombre === "Smartwatch Fitness");
if (buscado) {
  console.log(`Producto encontrado: ${buscado.nombre} - $${buscado.precio}`);
} else {
  console.log("Producto no encontrado");
}

console.log("\n=== ¿HAY PRODUCTOS CON BATERÍA CORTA? ===");
const hayBateriaCorta = productosAliExpress.some(p => p.especificaciones.bateria === "4 horas");
console.log(hayBateriaCorta ? "Sí, hay al menos uno." : "No, todos tienen buena batería.");

console.log("\n=== TODAS LAS OPINIONES ===");
const opiniones = productosAliExpress.flatMap(p => p.opiniones);
opiniones.forEach((o, i) => console.log(`${i + 1}. ${o}`));

console.log("\n=== TOTALES ===");
const total = productosAliExpress.reduce((acc, p) => acc + p.precio, 0);
console.log(`Total a pagar por todos los productos: $${total.toFixed(2)}`);

console.log("\n=== DESTRUCTURACIÓN DEL PRIMER PRODUCTO ===");
const [primerProducto] = productosAliExpress;
const { nombre, precio, especificaciones } = primerProducto;
console.log(`Nombre: ${nombre}`);
console.log(`Precio: $${precio}`);
console.log(`Color: ${especificaciones.color}`);

