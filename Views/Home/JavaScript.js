let carrito = [];

function agregarAlCarrito(nombre, precio) {
    const producto = {
        nombre: nombre,
        precio: precio
    };
    carrito.push(producto);
    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach(producto => {

        const elemento = document.createElement('li', '<br>');
        elemento.textContent = (`${producto.nombre} - Precio: $${producto.precio}\n`);
        listaCarrito.appendChild(elemento, /\n/g), '<br>';
        total += producto.precio;
    });

    const totalCarrito = document.getElementById('total-carrito');
    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
}