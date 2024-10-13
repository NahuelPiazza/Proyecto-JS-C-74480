// Vamos a hacer un carrito de compras de comidas, donde indique el plato, con ingredientes.
// ademas si queres agregar o sacar alguno de ellos. tambien la cantidad del producto
// un sumador de precios y un total. tambien que se aplique un descuento si tiene determinado codigo
//ademas de calcular envio por kilometros(3=gratis, hasta 6=750+ , 7 o + = 2000+)
//podemos sumar un carrusel que muestre los productos con los precios en el carrito





const productos = [
    {
        id: 1,
        imagen: "./imagenes/hamburguesa1.jpg",
        nombre: "Burger Egg n Beacon",
        precio: 5950,
        contenido: "medallon de carne de 150gr, huevos revueltos,chedddar, beacon, lechuga, tomate y mayonesa"
    },

    {
        id: 2,
        imagen:"./imagenes/hamburguesa2.jpg",
        nombre: "Fully Chiken",
        precio: 7900,
        contenido: "medallon de pollo krispy, medallon de espinaca,cheddar, panceta,lechuga morada y salsa agridulce"
    },


    {
        id: 3,
        imagen: "./imagenes/hamburguesa3.jpg",
        nombre: "Suprema mushroom",
        precio: 8500,
        contenido: "suprema de pollo,cheddar, cebolla, champiñones, tomate, lechuga y nuestra salsa especial"
    },

    {
        id: 4,
        imagen: "./imagenes/hamburguesa4.jpg",
        nombre: "La Ultra",
        precio: 7400,
        contenido: "doble medallon de carne de 100gr, chedar, panceta, lechuga, tomate, pepinillos, morrones asados y salsas spicy"
    },


]

let Carrito = []

const itemsearch = []
const IVA = 1.21
const descuento = 0.15
const redes = [
    {
        nombre: "facebook",
        url: "https://www.facebook.com/search/top?q=hamburguesas&locale=es_LA",
        img: "./imagenes/facebook_5968764.png",
    },

    {
        nombre: "instagram",
        url: "https://www.instagram.com/cope_burgers/?hl=es",
        img: "./imagenes/instagram_2111463.png",
    },

    {
        nombre:"google",
        url:"https://acortar.link/kF7klb",
        img: "./imagenes/google_13170545.png",
    },
]

let buscador = document.getElementById("filtroCards")




// funcion crear seccion redes footer index 

let ContRedes = document.getElementById ("redes")

function RedesFooter (itemsArray) {
    itemsArray.forEach ( item => {
        const red = document.createElement ("div")
        red.innerHTML = `<a href="${item.url}" >
                        <img src="${item.img}" alt="${item.nombre}">
                        </img></a> ` 
        ContRedes.appendChild (red)
    })
}



//funcion para agregar hamburguesas al carrito 


//(.currenttarget captura el valor (id, en este caso) del elemento)
//estas funciones se cargan de manera global, por lo que debemos ejecutarla luego de renderizar las cards
//ademas sumamos una funcion que agrega el producto del carrito al storage de mi sitio(el JSON.stringify convierte mi array en una cadena de caracteres)

function agregarAlCarrito() {
    ButtonCarrito = document.querySelectorAll(".botonAgregar")
    ButtonCarrito.forEach (button => {
        button.onclick = (e) => {
            const IdProducts = e.currentTarget.id
            const HamburguesaSeleccionada = productos.find (producto => producto.id == IdProducts)
            const productoExiste = Carrito.some(producto => producto.id === HamburguesaSeleccionada.id);
            if (!productoExiste) {
                Carrito.push(HamburguesaSeleccionada)

                // Guardar en localStorage
                localStorage.setItem("CardProduct", JSON.stringify(Carrito));
            } else {
                alert("Este producto ya está en el carrito");
            }


        }
    })
}

const CarritoPrevio = JSON.parse(localStorage.getItem("CardProduct"))
if (CarritoPrevio) {
    Carrito = CarritoPrevio
}





//funcion para crear las cards de cada hamburguesa

let contenedorHamburguesa = document.getElementById ("listaProductos")

function CardsHamb (productsArray) {
    productsArray.forEach(producto => {
        const card = document.createElement ("div")
        card.innerHTML =  ` <img src="${producto.imagen}" alt="imagen burger" class="ImgBurger">
                            <h4>${producto.nombre}</h4>
                            <p>precio:$${producto.precio}</p>
                            <p>Descripcion: ${producto.contenido}</p>
                            <button class="botonAgregar" id="${producto.id}">agregar al carro</button>`
        contenedorHamburguesa.appendChild (card)
    
        
    });
    agregarAlCarrito()
}







// funciones a ejecutar:



CardsHamb (productos)
RedesFooter (redes)





//buscador

// buscador.onchange = () => {
//     const element = productos.find ((producto) => producto.nombre == buscador.value)
//     switch (element){
//         case "Burger Egg n Beacon":
//             card.innerHTML = ""
//             CardsHamb (itemsearch)
//             break

//         case "Fully Chiken":
//             card.innerHTML = ""
//             CardsHamb (productos.id)
//             break

//         case "Suprema mushroom":
//             card.innerHTML = ""
//             CardsHamb (productos.id)
//             break

//         case "La Ultra":
//             card.innerHTML = ""
//             CardsHamb (productos.id)
//             break

//         default:
//             alert("mostrar todas")
//             break
//     }
        
    
// }