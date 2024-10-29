// Vamos a hacer un carrito de compras de comidas, donde indique el plato, con ingredientes.
// ademas si queres agregar o sacar alguno de ellos. tambien la cantidad del producto
// un sumador de precios y un total. tambien que se aplique un descuento si tiene determinado codigo
//ademas de calcular envio por kilometros(3=gratis, hasta 6=750+ , 7 o + = 2000+)
//podemos sumar un carrusel que muestre los productos con los precios en el carrito







let Carrito = []

const itemsearch = []
const IVA = 1.21
const descuento = 0.15

let buscador = document.getElementById("filtroCards")

let ContRedes = document.getElementById ("redes")



// funcion crear seccion redes footer index 

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
                Swal.fire("Ya has agregado este producto al carrito!!");
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
        card.innerHTML =  ` <img src="${producto.imagen}" alt="imagen burger" class="ImgBurger-${producto.id}">
                            <h4>${producto.nombre}</h4>
                            <p class="p-precio">$${producto.precio}</p>
                            <p class="p-desc"><span>Descripcion:</span> ${producto.contenido}</p>
                            <button class="botonAgregar" id="${producto.id}">agregar al carro</button>`
        contenedorHamburguesa.appendChild (card)
        
    });
    agregarAlCarrito ()
}







// funciones a ejecutar:

fetch("./db/data.json")
.then(response => response.json())
.then(data => {
    CardsHamb (data)
    productos = data
    

})

fetch("./db/redes.json")
.then(response => response.json())
.then(data => {
    RedesFooter (data)
})

