const catID = localStorage.getItem("catID");
if (!catID) {
  console.error("No se encontró el identificador de la categoría.");
}

const PRODUCTS = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`;

let container = document.getElementById('container-autos')

getJSONData(PRODUCTS).then(function(res){
    let productos = res.data.products;

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        container.innerHTML += `
    <div class="card-autos">
        <img src="${producto.image}" class="img-card" alt="${producto.name}">
        <div class="card-body-autos">
            <h5 class="card-title-autos">${producto.name}</h5>
            <p class="card-text-autos">${producto.description}</p>
            <h5 class="price-autos">USD: ${producto.cost}</h5>
            <small class="text-muted">Cantidad vendidos: ${producto.soldCount}</small>
        </div>
      </div>
      `
    }
    console.log(res)
})

.catch(function(error){
    console.error(error)
})
document.getElementById("limpiar").addEventListener("click", function () {

})


function limpiar() {
let borrar = document.getElementById("contenedor");


borrar.innerHTML = "";
}


const input = document.querySelector("input");
const log = document.getElementById("busqueda");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}