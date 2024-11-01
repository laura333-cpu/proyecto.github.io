// Función para actualizar el carrito
function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    // Limpiar la lista del carrito
    cartList.innerHTML = '';
    
    // Sumar total
    let total = 0;
    
    // Agregar artículos al carrito y calcular el total
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} (Talla: ${item.size}, Color: ${item.color}): $${item.price.toLocaleString('es-CO')}`;
        cartList.appendChild(listItem);
        total += item.price;
    });
    
    // Mostrar el total en el formato correcto
    totalElement.textContent = `Total: $${total.toLocaleString('es-CO')}`;
}

// Ejemplo de uso (puedes llamarlo desde los botones de productos en otras páginas)
addToCart('Producto 1', 50000, 'M', 'Rojo');
