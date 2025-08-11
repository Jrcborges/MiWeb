let productoscarrito =(localStorage.getItem("productoscarrito")) || [];
productoscarrito= JSON.parse(productoscarrito);

const boton_checkout = document.getElementById("checkout_btn");
boton_checkout.addEventListener("click",funciono);
function funciono(){
    const numero_deMovilAllegar="5363460710"
    const nombre = document.getElementById('nombre').value;
    const numero = document.getElementById('numero').value;
    const direccion = document.getElementById('direcion').value;
    const aclaracion = document.getElementById('aclaracion').value;



    let menssage="Quisiera ordenar un producto :";

    productoscarrito.forEach((producto) => {
        menssage += `\n-Producto: ${producto.nombre}\n`;
        menssage += `-ID Producto: ${producto.id}\n`;
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
    const url=`https://wa.me/${numero_deMovilAllegar}?text=${mensaje_cod}`;
    window.open(url,"_blanck")
}
