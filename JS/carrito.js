let CarritoBox = document.getElementById ("SeccionCarrito")

let CarritoStorage = localStorage.getItem("CardProduct")
CarritoStorage= JSON.parse(CarritoStorage)

let totalCarrito = []


// funcion de actualizado

function ActInventario (){
    CarritoBox.innerHTML = "";
}

// // Función para eliminar un producto del carrito


function eliminarProducto (index) {
    let CarritoACT = JSON.parse(localStorage.getItem("CardProduct"));
    CarritoACT.splice(index, 1);
    // CarritoACT = CarritoACT.filter((_,i) => i !== index);
    //document.getElementById("SeccionCarrito").innerHTML = ""
    localStorage.setItem("CardProduct",JSON.stringify(CarritoACT));
    ActInventario ()
    TableCarrito(CarritoACT);
}




//funcion total del carrito


// function CalcularTotal  ()  {
//     const cantHamb = parseInt(document.getElementById(`ContadorUnidad-${producto.id}`).innerText)
//     let total = Carrito.reduce ((acc, el) => acc + el.precio {
//         return () {
//             precio: total*IVA
//         }
//     }, 0 )


    // }
    // const CarroTotal = ArrayTotalCarrito.reduce((acc,el)=> acc + el.precio, 0)





//funcion para crear tabla con carrito

function TableCarrito (productsArray) {
    productsArray.forEach ((producto , index) => {
        const FilaProd = document.createElement ("tr")
        FilaProd.innerHTML =  `<td><h4>${producto.nombre}</h4></td>
                                <td><p id="precioDelProd-${producto.id}">$${producto.precio}</p></td>
                                <td><button id="BotonSumar-${producto.id}">+</button></td>
                                <td><span id="ContadorUnidad-${producto.id}">1</span></td>
                                <td><button id="BotonRestar-${producto.id}">-</button></td>
                                <td><button id="BotonEliminar-${producto.id}" class="BtnEliminar">
                                <img src="../imagenes/delete_8567839.png" alt="icono-eliminar"></img></button></td>`
        CarritoBox.appendChild (FilaProd)

         //funcion de sumar y restar cantidad de productos
    let contador = document.getElementById(`ContadorUnidad-${producto.id}`)
    let sumador = document.getElementById (`BotonSumar-${producto.id}`)
    let restador = document.getElementById (`BotonRestar-${producto.id}`)
    let counter = 1
    let PrecioYCantidad = document.getElementById (`precioDelProd-${producto.id}`)
    
    sumador.onclick = () => {
        counter++
        contador.innerHTML = counter
        PrecioYCantidad.innerHTML = counter * producto.precio
        CalcularTotal ()
    }
    
    restador.onclick = () => {
        if (counter >= 1) {
        counter--
        contador.innerHTML = counter
        PrecioYCantidad.innerHTML = counter * producto.precio
        CalcularTotal ()
        }
    }
    

    let eliminador = document.getElementById (`BotonEliminar-${producto.id}`)

    eliminador.onclick = () => {
        eliminarProducto (index)
    }


    });

}




TableCarrito(CarritoStorage)












// function CardsHamb (CartArray) {
//     CarritoBox.innerHTML = "";
//     CartArray.forEach(producto => {
//         const card = document.createElement ("div")
//         card.innerHTML =   `<h4>${producto.nombre}</h4>
//                             <p>precio:$${producto.precio}</p>
//                             <button id="BotonSumar-${producto.id}">+</button>
//                             <span id="ContadorUnidad-${producto.id}">1</span>
//                             <button id="BotonRestar-${producto.id}">-</button>
//                             <button id="BotonEliminar-${producto.id}" class="BotonEliminar"><img src="../imagenes/delete_8567839.png" alt="icono-eliminar"></img></button>`
//         CarritoBox.appendChild (card)

// //funcion de sumar y restar
//     let contador = document.getElementById(`ContadorUnidad-${producto.id}`)
//     let sumador = document.getElementById (`BotonSumar-${producto.id}`)
//     let restador = document.getElementById (`BotonRestar-${producto.id}`)
//     let counter = 1

//     sumador.onclick = () => {
//         counter++
//         contador.innerHTML = counter
//         CalcularTotal ()
//     }
    
//     restador.onclick = () => {
//         if (counter >= 1) {
//         counter--
//         contador.innerHTML = counter
//         CalcularTotal ()
//         }
//     }
//     });

// }



