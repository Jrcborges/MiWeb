const productoscarrito = JSON.parse(localStorage.getItem("productoscarrito"));
const carrito_vacio=document.querySelector("#carrito_vacio")
const cont_carrito_product=document.querySelector("#cont_carrito_product")
console.log(productoscarrito)



if (productoscarrito){
    carrito_vacio.style.display="none";

    productoscarrito.forEach(producto =>{
    const div = document.createElement("div");
    div.classList.add("carrito_producto")

    div.innerHTML=`
    <img class="carrito_producto_img" src="/../${producto.imagen}" alt="${producto.imagen}">
    <div>
        <h2>${producto.titulo}</h2>
    </div>
    <div>
        <p>Precio:</p>
        <p><b>${producto.precio}</p>
    </div>
    <button>e</button>
    `;

    cont_carrito_product.append(div);
})}else{
    carrito_vacio.style.display="block"
}
