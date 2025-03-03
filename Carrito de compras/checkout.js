let productoscarrito =(localStorage.getItem("productoscarrito")) || [];
productoscarrito= JSON.parse(productoscarrito);

const boton_checkout = document.getElementById("checkout_btn");
boton_checkout.addEventListener("click",funciono);
function funciono(){
    const numero_deMovilAllegar="5356346418"
    const nombre = document.getElementById('nombre').value;
    const numero = document.getElementById('numero').value;
    const direccion = document.getElementById('direcion').value;
    const aclaracion = document.getElementById('aclaracion').value;



    let menssage="Quisiera ordenar un producto";

    productoscarrito.forEach((producto) => {
        menssage += `-Producto: ${producto.nombre}\n`;
        menssage += `-Talla: ${producto.talla}\n`;
        menssage += `-Precio: ${producto.precio}\n\n`;
    });

    menssage += `Nombre del cliente: ${nombre}\n`;
    menssage += `Direccion: ${direccion}\n`;
    menssage += `Telefono: ${numero}\n`;
    menssage += `Aclaracion: ${aclaracion}\n`; 
    console.log(menssage)
    
    //codificar mensaje
    const mensaje_cod=encodeURIComponent(menssage);
    //crear mensaje de watsapp con intent
    const url=`https://wa.me/${numero_deMovilAllegar}&text=${mensaje_cod}#Intent;scheme=whatsapp;package=com.whatsapp;end`;
    window.open(url,"_blanck")
}