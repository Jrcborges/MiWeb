const productos =[
    {
        "id": "sport-hombre",
        "titulo": "Momo",
        "imagen": "imagenes/Pant2.jpg",
        "categoria": "hombre",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "sport-hombre",
        "titulo": "Pantalon",
        "imagen": "imagenes/Pant.jpg",
        "categoria": "hombre",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "formal-hombre",
        "titulo": "Camisa Azul",
        "imagen":"imagenes/imgcategoria/Camazul.jpg",
        "categoria": "hombre",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "sport-hombre",
        "titulo": "Abrigo",
        "imagen": "imagenes/Abrig.jpg",
        "categoria": "hombre",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "sport-hombre",
        "titulo": "Momo",
        "imagen": "imagenes/Pant2.jpg",
        "categoria": "hombre",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "sport-hombre",
        "titulo": "Pantalon",
        "imagen": "imagenes/Pant.jpg",
        "categoria": "hombre",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "formal-hombre",
        "titulo": "Camisa Azul",
        "imagen":"imagenes/imgcategoria/Camazul.jpg",
        "categoria": "hombre",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "sport-hombre",
        "titulo": "Abrigo",
        "imagen": "imagenes/Abrig.jpg",
        "categoria": "hombre",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "sport-mujer",
        "titulo": "Vestido blanco",
        "imagen": "imagenes/Vestido1.jpg",
        "categoria": "mujer",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "formal-mujer",
        "titulo": "Vestido rosa",
        "imagen": "imagenes/Vestido2.jpg",
        "categoria": "mujer",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "sport-mujer",
        "titulo": "Vestido blanco",
        "imagen": "imagenes/Vestido1.jpg",
        "categoria": "mujer",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "formal-mujer",
        "titulo": "Vestido rosa",
        "imagen": "imagenes/Vestido2.jpg",
        "categoria": "mujer",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "sport-mujer",
        "titulo": "Vestido blanco",
        "imagen": "imagenes/Vestido1.jpg",
        "categoria": "mujer",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "formal-mujer",
        "titulo": "Vestido rosa",
        "imagen": "imagenes/Vestido2.jpg",
        "categoria": "mujer",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "sport-mujer",
        "titulo": "Vestido blanco",
        "imagen": "imagenes/Vestido1.jpg",
        "categoria": "mujer",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "formal-mujer",
        "titulo": "Vestido rosa",
        "imagen": "imagenes/Vestido2.jpg",
        "categoria": "mujer",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "",
        "titulo": "Refrijerador",
        "imagen": "imagenes/Refri.jpg",
        "categoria": "electrodomestico",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "",
        "titulo": "Refrijerador",
        "imagen": "imagenes/Refri.jpg",
        "categoria": "electrodomestico",
        "detalles":"ropa de sports",
        "precio": 1000
    },
    {
        "id": "",
        "titulo": "Refrijerador",
        "imagen": "imagenes/Refri.jpg",
        "categoria": "electrodomestico",
        "detalles":"ropa de sports",
        "precio": 1000
    },
]
// Selecciona el contenedor del HTML
const contenedor = document.querySelector("#contenedor");
const producto_filtrado =productos.filter(producto => producto.categoria===categoria_actual)
const boton_categoria = document.querySelectorAll(".boton_categoria")
// Función para cargar los productos en el contenedor

function cargar_productos(producto_filtrado) {
    contenedor.innerHTML = ""
    producto_filtrado.forEach(producto => {
    // Crea un div para cada producto
    const div = document.createElement("div");
    div.classList.add("product");

    // Llena el div con la información del producto
    div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.titulo}">
        <h2>${producto.titulo}</h2>
        <p>$${producto.precio}</p>
    `;

    // Añade el div al contenedor
    contenedor.appendChild(div);
    });
}
boton_categoria.forEach(boton => {
    boton.addEventListener("click",(e)=>{
        boton_categoria.forEach(boton=>boton.classList.remove("active"));
        e.currentTarget.classList.add("active")
        const productoboton = productos.filter(producto=>producto.id===e.currentTarget.id)
        cargar_productos(productoboton)
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

        }
        else{
            menu.classList.remove("stiki");
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
