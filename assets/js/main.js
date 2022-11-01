let carrito = [] ;
let productos = [] ;

let gestor ;
const clave_carrito = "carrito";

// cuanto todo haya cargado se ejecuta este bloque de codigo.
document.addEventListener('DOMContentLoaded', () =>{

    carrito = JSON.parse(localStorage.getItem('carrito')) || [] ;

    gestor = new GestionarProductos();
    gestor.iniciar();
    
})

function addCarrito(id){

    let prod = document.querySelector('#row_'+id);
    let producto = new Producto (id, 
                                prod.querySelector("h2").textContent,
                                prod.querySelector(".precio").textContent.substring(1,10),
                                );

gestor.addCart(producto);

}

function eliminar(id){
    gestor.eliminarArticulo(id);
}

document.querySelector('#buscar').addEventListener('keyup', ()=>{

    let q = document.querySelector ('#buscar').value;

    if (q.length >= 2){

        gestor.mostrarHeader(`Resultados para: ${q}`);
        gestor.buscar (q);
    }else if (q.length === 0 ){

        gestor.mostrarHeader(`Todos los producots en stock`);
        gestor.cargarProductos(productos);
    }
})