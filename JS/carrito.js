let CarritoBox = document.getElementById ("SeccionCarrito")

let CarritoStorage = localStorage.getItem("CardProduct")
CarritoStorage= JSON.parse(CarritoStorage)

let CarroTotalBox = document.getElementById ("CTN-precioTOT")

let totalCarrito = []
//ver que se guarde en el storage la cantidad de los productos tambien

//funcion para crear card del total del carrito

function CardTotal () {
    CarroTotalBox.innerHTML = ""
    const CardTot = document.createElement ("div")
    CardTot.innerHTML = `<div><h3>aca poner img</h3></div>
                        <div><h3>TOTAL:</h3></div>
                        <div><P>$${totalCarrito}</P></div>`
                        
    CarroTotalBox.appendChild (CardTot)
}



//funcion aplicar descuento 
// function AplicarDescuento (productos) {
//     const discount = productos.map((producto) => {
//         let precioOFF = producto.precio - (producto.precio*descuento)
//         return {
            
//         id: producto.id,
//         imagen: producto.img,
//         nombre: producto.nombre,
//         precio: precioOFF,
//         contenido: producto.contenido,
    
//         }
//     //tengo que ponerlo en el total
//     })
// }

//funcion aplicar impuestos

function AplicarIMP () {

}


// funcion de actualizado

function ActInventario () {
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


function CalcularTotal  ()  {

    let total = CarritoStorage.reduce((acc, producto) => {
        const cantidad = parseInt(document.getElementById(`ContadorUnidad-${producto.id}`).innerText);
        return acc + (producto.precio * cantidad);
    }, 0);
    totalCarrito.push (total)

    CardTotal (totalCarrito)
    
    //cuando elimino un producto del carrito tira error
        
}




//funcion para crear tabla con carrito (sumador,restador y eliminador)

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
        totalCarrito = []
        counter++
        contador.innerHTML = counter
        PrecioYCantidad.innerHTML = counter * producto.precio
        CalcularTotal (CarritoStorage)
    }
    
    restador.onclick = () => {
        totalCarrito = []
        if (counter >= 1) {
        counter--
        contador.innerHTML = counter
        PrecioYCantidad.innerHTML = counter * producto.precio
        CalcularTotal (CarritoStorage)

        }
    }
    

    let eliminador = document.getElementById (`BotonEliminar-${producto.id}`)

    eliminador.onclick = () => {
        eliminarProducto (index)


    }


    });
    CalcularTotal (CarritoStorage)
}


TableCarrito(CarritoStorage)












