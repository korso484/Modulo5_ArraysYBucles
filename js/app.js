//Mostrar estructura carrito
const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];

//Función imprimir resultados
function imprimir(elemento){
    console.log("ID: " + carrito[i].id);
    console.log("Nombre: " + carrito[i].name);
    console.log("Precio: " + carrito[i].price);
    console.log("Cantidad: " + carrito[i].count);
    console.log("Premium: " + carrito[i].premium);
}

//Listar todos los elementos
console.log("***APARTADO LISTAR TODOS LOS PRODUCTOS***");
function listar(){
    for(i=0; i<carrito.length; i++){
        imprimir(carrito[i]);
    }
}
listar();


//Eliminar un producto
console.log("***APARTADO ELIMINAR UN PRODUCTO***");
console.log("Se elimanará el producto: " + carrito[2].name);
var carritoModificado = carrito.splice(2,1);
//Listamos Array con producto eliminado
listar();


//Calcular total carrito comprar
console.log("***APARTADO CALCULAR TOTAL CARRITO COMPRA***");
var precioTotal = 0;
for(i=0; i<carrito.length; i++){
    var precioTotal = precioTotal + (carrito[i].price * carrito[i].count);
}
console.log("El total del precio de los productos es: " + precioTotal);


//Filtrar productos que sean Premium
console.log("***APARTADO FILTRAR PRODUCTOS PREMIUM***");
for(i=0; i<carrito.length; i++){
    if(carrito[i].premium === true){
        imprimir(carrito[i]);
    }
}

//Si todos son prime muestra "Gastos de envío Gratis" si no, "Con Gastos de envío"
console.log("***OPCIONAL SI TODOS SON PRIME O NO***");
listar();
var verificar = true;
for(i=0; i<carrito.length; i++){
    var verificar = verificar * carrito[i].premium;  
}
if((verificar === true) === carrito.length){
    console.log("Gastos de envío Gratis");
}else{
    console.log("Con Gastos de envío")
}

//Montar con HMLT y API HTML basica
var producto;
document.write("<h2>Carrito de Compra:</h2>");
for(producto of carrito){
    document.write("<ul>");
    document.write("<li>" + producto.name + "</li>");
    document.write("</ul>");
}

//Aplicar descuento 5% si compra es mayor 50€
console.log("***OPCIONAL APLICAR DESCUENTO 5% MAYORES 50€***");
var precioTotal = 0;
for(i=0; i<carrito.length; i++){
    var precioTotal = precioTotal + (carrito[i].price * carrito[i].count);
}
console.log("El total del precio de los productos es: " + precioTotal);
if(precioTotal > 50){
    precioTotal = precioTotal -(precioTotal*0.05);
}
console.log("Por precio superior a 50€ se le descontará un 5%: " + precioTotal);

    




