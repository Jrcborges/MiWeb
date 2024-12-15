const productos =[
    {
        "id": "momo-1",
        "nombre": "Momo con estilo",
        "imagen": "imagenes/Pant2.jpg",
        "categoria":{
            "titulo":"sport-hombre",
            "categoria":"hombre"
        },
        "detalles":
        "Ropa de sports especial para salidas casuales con amigos",
        "talla":["xl","m"],
        "color":["azul","rojo"],
        "precio": 1000,
    },
    {
        "id": "momo-2",
        "nombre": "Momo",
        "imagen": "imagenes/Pant2.jpg",
        "categoria":{
            "titulo":"sport-hombre",
            "categoria":"hombre"
        },
        "detalles":"ropa de sports",
        "talla":["XL","M"],
        "precio": 1000
    },
    {
        "id": "momo-4",
        "nombre": "Momo",
        "imagen": "imagenes/Pant2.jpg",
        "categoria":{
            "titulo":"sport-hombre",
            "categoria":"alimento"
        },
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "vestido-3",
        "nombre": "vestido",
        "imagen": "imagenes/Vestido1.jpg",
        "categoria":{
            "titulo":"sport-mujer",
            "categoria":"alimento"
        },
        "detalles":"vestido bonito de mujer",
        "precio": 10
    },
    {
        "id": "vestido",
        "nombre": "Vestido",
        "imagen": "imagenes/Vestido2.jpg",
        "categoria":{
            "titulo":"formal-mujer",
            "categoria":"mujer"
        },
        "detalles":"ropa de mujer",
        "precio": 100
    },
    {
        "id": "momo-100",
        "nombre": "Momo",
        "imagen": "imagenes/Pant2.jpg",
        "categoria":{
            "titulo":"sport-hombre",
            "categoria":"hombre"
        },
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "momo-200",
        "nombre": "Momo",
        "imagen": "imagenes/Pant2.jpg",
        "categoria":{
            "titulo":"formal-hombre",
            "categoria":"hombre"
        },
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "momo-300",
        "nombre": "Momo",
        "imagen": "imagenes/Pant2.jpg",
        "categoria":{
            "titulo":"sport-hombre",
            "categoria":"hombre"
        },
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "momo-1",
        "nombre": "Momo",
        "imagen": "imagenes/Pant2.jpg",
        "categoria":{
            "titulo":"sport-hombre",
            "categoria":"hombre"
        },
        "detalles":"ropa de sports",
        "precio": 1000
    },
]
// Selecciona el contenedor del HTML
const contenedor = document.querySelector("#contenedor");
const producto_filtrado =productos.filter(producto => producto.categoria.categoria===categoria_actual);
const boton_categoria = document.querySelectorAll(".boton_categoria");
const numerito = document.querySelector("#numerito");
const modal_detalles = document.querySelector("#modal_detalles");
const modal_contenido = document.querySelector("#modal_contenido");
const btn_cerrar_modal = document.querySelector("#cerrar_modal")

let botones_agg = document.querySelector(".btnn_productos_agg");

//este array es del carrito de compras
let productoscarrito;
const productoscarritoLS = JSON.parse(localStorage.getItem("productoscarrito"));
if(productoscarritoLS){
    productoscarrito = productoscarritoLS;
    act_num();
}else{
    productoscarrito=[]
}
// Función para cargar los productos en el contenedor

function cargar_productos(producto_filtrado) {
    contenedor.innerHTML = ""
    producto_filtrado.forEach(producto => {
    // Crea un div para cada producto
    const div = document.createElement("div");
    div.classList.add("product");

    //Opcion para elegir tallas
    const tallas_disponibles = producto.talla || []
    let opciones_talla = ""

    for(const talla of tallas_disponibles){
        opciones_talla += `<option value="${talla}">${talla}</option>`
    }
    
    // Llena el div con la información del producto
    div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.categoria.titulo}" class="imagen_producto" data-id="${producto.id}">
        <p>${producto.nombre}</p>
    `;

    // Añade el div al contenedor
    contenedor.appendChild(div);
    });
    actualizar_eventos_imagenes()
}


function mostrar_detalles_producto(idprducto){
    const producto=productos.find((producto) =>producto.id === idprducto);
    //Opcion para elegir tallas
    const tallas_disponibles = producto.talla || []
    let opciones_talla = ""

    for(const talla of tallas_disponibles){
        opciones_talla += `<option value="${talla}">${talla}</option>`
    }
    //opcion para elegir color
    const color_disponible = producto.color || []
    let opcion_color = ""

    for(const color of color_disponible){
        opcion_color += `<option value="${color}">${color}</option>`
    }
    if (producto.talla != null){
        modal_contenido.innerHTML=`
        <img src="${producto.imagen}" alt="${producto.categoria.titulo}">
        <p class="description_producto">${producto.detalles}</p>
        <p class="p_de_costo">$<b>${producto.precio}</b></p>
        <div class="celecionador_tall_color">
            <label for="tallas-${producto.id}">Talla:</label>
            <select id="tallas-${producto.id}" class="select_tallas">
                <option select value="">
                Selecionar
                </option>
                ${opciones_talla}
            </select>
            <label for="color-${producto.id}">Color:</label>
            <select id="color-${producto.id}" class="select_tallas">
                <option select value="">
                Selecionar
                </option>
                ${opcion_color}
            </select>
        </div>
        
        <button class="btnn_productos_agg" id="${producto.id}">Agg al carrito</button>
        `;
    actualizar_botones_Agregar()
    actualizar_eventos_imagenes()
        
    }
    else{
        modal_contenido.innerHTML=`
        <img src="${producto.imagen}" alt="${producto.categoria.titulo}">
        <p class="description_producto">${producto.detalles}</p>
        <p class="p_de_costo">$<b>${producto.precio}</b></p>
        <button class="btnn_productos_agg" id="${producto.id}">Agg al carrito</button>
        <div id="tallas-${producto.id}" value=null>
        </div>
        <div id="color-${producto.id}" value=null>
        </div>
        
        `;
    actualizar_botones_Agregar()
    actualizar_eventos_imagenes()
        
    }
    const activ = document.querySelector("#modal_detalle")
    activ.style.display="block"
}
//func para actualisar los botones de agg al carrito
function actualizar_botones_Agregar(){
    const botones_agg= document.querySelectorAll(".btnn_productos_agg");
    botones_agg.forEach(boton =>{
        boton.addEventListener("click", aggAlcarrito);

    })
}

//funcion para cerrar el modal
btn_cerrar_modal.addEventListener("click",()=>{
    const activ = document.querySelector("#modal_detalle")
    activ.style.display="none";
})


//funcion para agg eventos a las imagenes
function actualizar_eventos_imagenes(){
    const imagen = document.querySelectorAll(".imagen_producto")
    imagen.forEach((imagen=> {
        imagen.addEventListener("click",(e)=>{
            const idprducto = e.currentTarget.getAttribute("data-id")
            mostrar_detalles_producto(idprducto)
            
        })
    }))

}

//esta parte es para agg al carrito de compra
function aggAlcarrito(e){
    const idboton = e.currentTarget.id;
    //tengo q corrgir las tallas
    const producto_agg = productos.find(producto => producto.id === idboton);
    select_talla = document.getElementById(`tallas-${idboton}`).value;
    select_color = document.getElementById(`color-${idboton}`).value;



    producto_agg.cantidad = 1;
    productoscarrito.push({ ...producto_agg,select_talla,select_color});
    console.log(productoscarrito)
    act_num();
    localStorage.setItem("productoscarrito",JSON.stringify(productoscarrito))
}
function act_num(){
    let nuevonumerito = productoscarrito.reduce((acc,producto)=> acc + producto.cantidad,0);
    numerito.innerText = nuevonumerito
}


//filtro de categoria
boton_categoria.forEach(boton => {
    boton.addEventListener("click",(e)=>{
        if (e.currentTarget.id !="micelanios"){
            const productoboton = productos.filter(producto=>producto.categoria.titulo===e.currentTarget.id)
            cargar_productos(productoboton)
        }
        else{
            cargar_productos(producto_filtrado)
        }
    })
})

// Llama a la función para cargar los productos
cargar_productos(producto_filtrado);



//esta parte es para q el nav se quede fijo cuando bajo con el scroll
document.addEventListener("DOMContentLoaded",()=>{
    const menu = document.getElementById("menu")
    const stickiPoint = menu.offsetTop;//Obtiene la posision inicial
    window.addEventListener("scroll",()=>{
        if (window.scrollY >= stickiPoint) {
            menu.classList.add("stiki");
            var c_c = document.getElementById("contenedor_cecioncirculos");
            c_c.style.display = "block";
        }
        else{
            menu.classList.remove("stiki");
            c_c.style.display = "none";
        }
        
    })
})





//Esto es para el boton flotante
function boton_flotante(){
    var b_f = document.getElementById("contenedor_contact_id");
    if(b_f.style.display == "block"){
        b_f.style.display = "none";
    }else{
        b_f.style.display = "block"
    }
}
//productoscarrito.some(producto => producto.id === idboton)
/*function aggAlcarrito(e){
    const idboton = e.currentTarget.id;
    const producto_agg = productos.find(producto => producto.id === idboton);
    const select_talla = document.getElementById('#tallas-${producto.id}');
    const talla_celecionada = select_talla.value;




    if (productoscarrito.some(producto => producto.id === idboton)){
        const index = productoscarrito.findIndex(producto => producto.id === idboton);
        productoscarrito[index].cantidad++;

    }else{
        producto_agg.cantidad = 1;
        productoscarrito.push(producto_agg);
        
        console.log(productoscarrito)
    }
    act_num();
    localStorage.setItem("productoscarrito",JSON.stringify(productoscarrito))
}*/