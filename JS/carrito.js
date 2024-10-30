//tomo los datos de los productos en storage

//puedo agregar un setinterval que muestre un mensaje conde figura un codigo de descuento 
//si agrega los 4 productos al carrito


let CarritoStorage = localStorage.getItem("CardProduct")
CarritoStorage = JSON.parse(CarritoStorage)
let CarroTotalBox = document.getElementById ("CTN-precioTOT")
let totalCarrito = []
//ver que se guarde en el storage la cantidad de los productos tambien

let CarritoBox = document.getElementById ("SeccionCarrito")
//funcion para crear card del total del carrito

function CardTotal () {
    CarroTotalBox.innerHTML = ""
    const CardTot = document.createElement ("div")
    CardTot.innerHTML = `<div><h3>aca poner img</h3></div>
                        <div><h3>TOTAL: $${totalCarrito}</h3></div>
                        <button id="Finalizar">finalizar compra</button>`
                        
    
    
    CarroTotalBox.appendChild (CardTot)

    let btnFinalizar = document.getElementById ("Finalizar")

    btnFinalizar.onclick = () => {
        Swal.fire({
            title: "Coloque dirección de envio",
            input: "text",
            showCancelButton: true,
            cancelButtonText: "cancelar",
            confirmButtonText: "Finalizar compra",
            showLoaderOnConfirm: true,
        }).then ((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: "Comprado",
                text:   `"tu compra por "$${totalCarrito}" sera enviada a "${result.value}"  en los proximos 30-40 min, Esperemos disfrute su comida." ` ,
                icon: "success"
                }),
                localStorage.clear("CardProduct");
                CarritoBox.innerHTML = "";
                CarroTotalBox.innerHTML = "";
            } else {
                    Swal.fire({
                        title: "volviendo al carrito",
                        text: "Esperemos no se arrepienta, de verdad son de otra galaxia las hamburguesas",
                        icon: "warning"
                    })
                
                };
            
        })}


}


// // Función para eliminar un producto del carrito

function eliminarProducto (index) {
    CarritoStorage.splice(index, 1);
    localStorage.setItem("CardProduct",JSON.stringify(CarritoStorage));
    CarritoBox.innerHTML = "";
    TableCarrito(CarritoStorage);
}


//funcion total del carrito

function CalcularTotal  ()  {
    totalCarrito = []
    let total = CarritoStorage.reduce((acc, producto) => {
        const cantidad = parseInt(document.getElementById(`ContadorUnidad-${producto.id}`).innerText);
        return acc + (producto.precio * cantidad);
    }, 0);
    totalCarrito.push (total)

    CardTotal ()
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
        counter++
        contador.innerHTML = counter
        PrecioYCantidad.innerHTML = `$${counter * producto.precio} `
        CalcularTotal (CarritoStorage)
    }
    
    restador.onclick = () => {
        if (counter >= 1) {
        counter--
        contador.innerHTML = counter
        PrecioYCantidad.innerHTML =  `$${counter * producto.precio} `
        CalcularTotal (CarritoStorage)

        }
    }
    

    let eliminador = document.getElementById (`BotonEliminar-${producto.id}`)

    eliminador.onclick = () => {
        eliminarProducto (index)
        CarroTotalBox.innerHTML = ""
        CalcularTotal (CarritoStorage)
        
    }


    });
    CalcularTotal (CarritoStorage)
}



TableCarrito(CarritoStorage)












