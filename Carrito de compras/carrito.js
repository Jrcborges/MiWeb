let productoscarrito =(localStorage.getItem("productoscarrito"));
productoscarrito= JSON.parse(productoscarrito);


const carrito_vacio=document.querySelector("#carrito_vacio")
const cont_carrito_product=document.querySelector("#cont_carrito_product")
let btn_eliminar = document.querySelectorAll(".producto_eliminar")
const btn_vaciar_carrito = document.getElementById("vaciar_carrito")
const total=document.getElementById("total")
const comprarr=document.getElementById("comprar")


function cargar_productos_carr(){
    if (productoscarrito && productoscarrito.length!==0){

        console.log(productoscarrito)
        carrito_vacio.style.display="none";
        
        
        
        cont_carrito_product.innerHTML="";

    
        productoscarrito.forEach(producto =>{
        const div = document.createElement("div");
        div.classList.add("carrito_producto")
    
        div.innerHTML=`
        <img class="carrito_producto_img" src="../${producto.imagen}" alt="${producto.imagen}">
        <div class="contenedor_productosAgg">
            <h2>${producto.nombre}</h2>
            
        </div>
        <div>
            <p>Precio</p>
            <p><b>${producto.precio}</p>
        </div>
        <button class="producto_eliminar" id="${producto.id}"><img class="boton_borrar" src="../imagenes/borrar.jpg"></button>
        `;
    
        cont_carrito_product.append(div);
    })}else{
        cont_carrito_product.innerHTML="";
        carrito_vacio.style.display="block"
    }
    actualizar_botones_eliminar();
    act_total()
}
cargar_productos_carr();


function actualizar_botones_eliminar(){
    btn_eliminar= document.querySelectorAll(".producto_eliminar");
    btn_eliminar.forEach(boton =>{
        boton.addEventListener("click", eliminar_carr);

    })
}
function eliminar_carr(e){
    const idboton = e.currentTarget.id;
    const index = productoscarrito.findIndex(producto => producto.id ===idboton)

    productoscarrito.splice(index, 1);
    cargar_productos_carr(productoscarrito)
    console.log(productoscarrito)
    localStorage.setItem("productoscarrito",JSON.stringify(productoscarrito))
    
}
btn_vaciar_carrito.addEventListener("click",vaciarCarrito);

function vaciarCarrito(){
    productoscarrito.length = 0;
    localStorage.setItem("productoscarrito",JSON.stringify(productoscarrito))
    cargar_productos_carr();
}
function act_total(){
    const total_calc=productoscarrito.reduce((acc,producto)=>acc+producto.precio,0)
    total.innerText=`$${total_calc}`
}


comprarr.addEventListener("click",comprar);

function comprar(){
    if(productoscarrito.length>0){
        cargar_productos_carr();
        function finalisarCompra(){
            location.href="checkout.html";
        }
        finalisarCompra()
    }else{
        alert("Su carrito esta vacio")
    }
}


