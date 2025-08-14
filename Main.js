const productos =[
    {
        "id": "dulcecapitolio",
        "nombre": "Capitolio",
        "imagen": "imagenes/Capitolio.jpg",
        "categoria":{
            "titulo":"merengue",
            "categoria":"Dulces"
        },
        "detalles":"Dulce con bastante merengue",
        
        "precio": 150,
    },
  {
        "id": "cocoglase",
        "nombre": "Coco Glasé",
        "imagen": "imagenes/Cocoglase.jpg",
        "categoria":{
            "titulo":"todos",
            "categoria":"Dulces"
        },
        "detalles":"Coco glase helado riquisimo",
        "precio": 550
    },
    {
        "id": "panqueafricano",
        "nombre": "Panque Africano",
        "imagen": "imagenes/Panque africano.jpg",
        "categoria":{
            "titulo":"Panques",
            "categoria":"Dulces"
        },
        "detalles":"Panque africano",
        "precio": 180
    },
    {
        "id": "panquecencillo",
        "nombre": "Panque sencillo",
        "imagen": "imagenes/Panquecencillo.jpg",
        "categoria":{
            "titulo":"Panques",
            "categoria":"Dulces"
        },
        "detalles":"Panque cencillo ",
        "precio": 120
    },
   /* {
        "id": "paeguallaba",
        "nombre": "Pae",
        "imagen": "imagenes/Paeguayaba.jpg",
        "categoria":{
            "titulo":"Pasteles",
            "categoria":"Dulces"
        },
        "detalles":"Con mermelada de guayaba",
        "precio": 650,
    },*/
    {
        "id": "tatianof",
        "nombre": "Tatianof",
        "imagen": "imagenes/Tatianof.jpg",
        "categoria":{
            "titulo":"Merengue",
            "categoria":"Dulces"
        },
        "detalles":"Tatianof no se pierda de su sabor!!",
        "precio": 200
    },
    /*{
        "id": "ensaladafria",
        "nombre": "Ensalada Fria",
        "imagen": "imagenes/Ensaladafria.jpg",
        "categoria":{
            "titulo":"todos",
            "categoria":"Dulces"
        },
        "detalles":"Ensalda fria",
        "precio": 250,
    },*/

    {
        "id": "cuña",
        "nombre": "Cuña de dulce",
        "imagen": "imagenes/Cuña.jpg",
        "categoria":{
            "titulo":"merengue",
            "categoria":"Dulces"
        },
        "detalles":"cuña de dulce",
        
        "precio": 150
    },
    {
        "id": "marquesita",
        "nombre": "Marquesita",
        "imagen": "imagenes/Tartainof.jpg",
        "categoria":{
            "titulo":"merengue",
            "categoria":"Dulces"
        },
        "detalles":"Dulce Marquesita",
        "precio":170
    },
    {
        "id": "polvorones",
        "nombre": "Mantecado",
        "imagen": "imagenes/Polvorones.jpg",
        "categoria":{
            "titulo":"Pasteles",
            "categoria":"Dulces"
        },
        "detalles":"Mantecaditos",
        "precio": 50
    },
    {
        "id": "Tartaletas",
        "nombre":"Tartaleta",
        "imagen": "imagenes/Tartalet.jpg",
        "categoria":{
            "titulo":"merengue",
            "categoria":"Dulces"
        },
        "detalles":"tartaletas",
        "precio": 100
    },




/*Esta parte es bebidas*/






    
    {
        "id": "Belga",
        "nombre": "CervezaBelga",
        "imagen": "imagenes/Belga.jpg",
        "categoria":{
            "titulo":"",
            "categoria":"Bebidas"
        },
        "detalles":"Cerveza belga",
        "precio": 250
    },
    {
        "id": "refrescobom",
        "nombre": "Refresco de piña",
        "imagen": "imagenes/Refresco boom.jpg",
        "categoria":{
            "titulo":"",
            "categoria":"Bebidas"
        },
        "detalles":"Refresco booms de lata sabor piña",
        "precio": 230
    },
    {
        "id": "Maltabucanero",
        "nombre": "Malta Bucanero",
        "imagen": "imagenes/Maltab.jpg",
        "categoria":{
            "titulo":"",
            "categoria":"Bebidas"
        },
        "detalles":"malta en lata",
        "precio": 320
    },
    {
        "id": "cervesa cristal",
        "nombre": "Cerveza Cristal",
        "imagen": "imagenes/Cervesacristal.jpg",
        "categoria":{
            "titulo":"",
            "categoria":"Bebidas"
        },
        "detalles":"Cerveza cristal en lata",
        "precio": 300
    },
    {
        "id": "Cervesaparranda",
        "nombre": "Cerveza Parranda",
        "imagen": "imagenes/Cervesaparranda.png",
        "categoria":{
            "titulo":"",
            "categoria":"Bebidas"
        },
        "detalles":"Cervesa parranda",
        "precio": 220
    },
    {
        "id": "chacal",
        "nombre": "Cerveza Chacal",
        "imagen": "imagenes/Chacal.jpg",
        "categoria":{
            "titulo":"",
            "categoria":"Bebidas"
        },
        "detalles":"chacal bebida en lata ",
        "precio": 250
    },
    {
        "id": "maltaguajira",
        "nombre": "Malta Guajira",
        "imagen": "imagenes/Maltag.jpg",
        "categoria":{
            "categoria":"Bebidas"
        },
        "detalles":"Clasica malta guajira",
        "precio": 250
    },




//Esta parte es de los kakes 




    
    {
        "id":"Cake",
        "nombre": "Cake",
        "imagen": "imagenes/Kakem.jpg",
        "categoria":{
            "categoria":"Cake"
        },
        "detalles":"Kake exelente para eventos.Ruiquisimo!! ",
        "precio": 4000
    },
    {
        "id":"Cake2",
        "nombre": "Cake",
        "imagen": "imagenes/Cake2000.jpg",
        "categoria":{
            "categoria":"Cake"
        },
        "detalles":"Kake exelente para eventos.Ruiquisimo!! ",
        "precio": 2000
    },







    
//esta parte es de los panes 



    {
        "id":"panpq",
        "nombre": "Paquete de Pan Bon",
        "imagen": "imagenes/Pk de pan.jpg",
        "categoria":{
            "categoria":"Pan"
        },
        "detalles":"Paquete de pan trae 10",
        "precio": 270      
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

// Función para cargar los productos en el contenedor

function cargar_productos(producto_filtrado) {
    contenedor.innerHTML = ""
    producto_filtrado.forEach(producto => {
    // Crea un div para cada producto
    const div = document.createElement("div");
    div.classList.add("product");
    
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
        modal_contenido.innerHTML=`
        <img src="${producto.imagen}" alt="${producto.categoria.titulo}">
        <p class="description_producto">${producto.detalles}</p>
        <p class="p_de_costo">$<b>${producto.precio}</b></p>
        
        
        
        <button class="btnn_productos_agg" id="${producto.id}">Agg al carrito</button>
        `;
    actualizar_botones_Agregar()
    actualizar_eventos_imagenes()
        
        
    
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
let productoscarrito;
let productoscarritoLS = localStorage.getItem("productoscarrito");
if(productoscarritoLS){
    productoscarrito = JSON.parse(productoscarritoLS);
    act_num();
}else{
    productoscarrito=[]
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



    producto_agg.cantidad = 1;
    productoscarrito.push({ ...producto_agg});
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
