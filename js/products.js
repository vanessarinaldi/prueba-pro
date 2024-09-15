/*let catID = localStorage.getItem("catID");

function setProductID(id) {
    localStorage.setItem("productID", id);
    window.location = "product-info.html";
}

const PRODUCTS = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`;

let container = document.getElementById('container-products');

getJSONData(PRODUCTS).then(function(res){
    let productos = res.data.products;

    container.innerHTML = '';

    productos.forEach((producto) => {
        let card = document.createElement('div');
        card.classList.add('card-product');
        card.setAttribute('data-id', producto.id);

        card.innerHTML = `
            <img src="${producto.image}" class="img-card" alt="${producto.name}">
            <div class="card-body-product">
                <h5 class="card-title-product">${producto.name}</h5>
                <p class="card-text-product">${producto.description}</p>
                <h5 class="price-product">USD: ${producto.cost}</h5>
                <small class="text-muted">Cantidad vendidos: ${producto.soldCount}</small>
            </div>
        `;

        card.addEventListener('click', function() {
            let productID = card.getAttribute('data-id');
            console.log(productID);
            setProductID(productID);
        });

        container.appendChild(card);
    });
})

.catch(function(error){
    console.error(error)
})*/
/*document.getElementById("limpiar").addEventListener("click", function () {

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


const ORDER_ASC_BY_PROD_COST = "ASC_COST";
const ORDER_DESC_BY_PROD_COST = "DESC_COST";
const ORDER_BY_PROD_COUNT = "COUNT";
let currentCategoriesArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_PROD_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost< b.cost ){ return -1; }
            if ( a.cost> b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_PROD_COST){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.Count);
            let bCount = parseInt(b.Count);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

function setCatID(id) {
    localStorage.setItem("catID", id);
    window.location = "products.html"
}

function showCategoriesList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentCategoriesArray.length; i++){
        let producto= currentCategoriesArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(producto.Count) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(producto.Count) <= maxCount))){

                card.innerHTML = `
                <img src="${producto.image}" class="img-card" alt="${producto.name}">
                <div class="card-body-product">
                    <h5 class="card-title-product">${producto.name}</h5>
                    <p class="card-text-product">${producto.description}</p>
                    <h5 class="price-product">USD: ${producto.cost}</h5>
                    <small class="text-muted">Cantidad vendidos: ${producto.soldCount}</small>
                </div>
            `;  
        }

        document.getElementById("products-list-container").innerHTML = htmlContentToAppend;
    }
}

function sortAndShowCategories(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentCategoriesArray = categoriesArray;
    }

    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);

    //Muestro las categorías ordenadas
    showCategoriesList();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CATEGORIES_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentCategoriesArray = resultObj.data
            showCategoriesList()
            //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
        }
    });

    document.getElementById("bot1").addEventListener("click", function(){
        sortAndShowCategories(ORDER_ASC_BY_PROD_COST);
    });

    document.getElementById("bot2").addEventListener("click", function(){
        sortAndShowCategories(ORDER_DESC_BY_PROD_COST);
    });

    document.getElementById("bot3").addEventListener("click", function(){
        sortAndShowCategories(ORDER_BY_PROD_COUNT);
    });

    document.getElementById("limpiar").addEventListener("click", function(){
        document.getElementById("min").value = "";
        document.getElementById("max").value = "";

        minCount = undefined;
        maxCount = undefined;

        showCategoriesList();
    });

    document.getElementById("filtrar").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("min").value;
        maxCount = document.getElementById("max").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showCategoriesList();
    });
})*/
let catID = localStorage.getItem("catID");

function setProductID(id) {
    localStorage.setItem("productID", id);
    window.location = "product-info.html";
}

const PRODUCTS = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`;

let container = document.getElementById('container-products');

// Obtener datos de productos
getJSONData(PRODUCTS).then(function(res) {
    let productos = res.data.products;
    currentCategoriesArray = productos; // Guardamos los productos en la variable global

    showCategoriesList(); // Mostramos los productos al cargar la página
})
.catch(function(error) {
    console.error(error);
});

const ORDER_ASC_BY_PROD_COST = "ASC_COST";
const ORDER_DESC_BY_PROD_COST = "DESC_COST";
const ORDER_BY_PROD_COUNT = "COUNT";
let currentCategoriesArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

// Función para ordenar los productos según el criterio seleccionado
function sortCategories(criteria, array) {
    let result = [];
    if (criteria === ORDER_ASC_BY_PROD_COST) {
        result = array.sort((a, b) => a.cost - b.cost); // Precios ascendentes
    } else if (criteria === ORDER_DESC_BY_PROD_COST) {
        result = array.sort((a, b) => b.cost - a.cost); // Precios descendentes
    } else if (criteria === ORDER_BY_PROD_COUNT) {
        result = array.sort((a, b) => b.soldCount - a.soldCount); // Más vendidos
    }
    return result;
}

// Mostrar productos en la lista
function showCategoriesList() {
    let htmlContentToAppend = "";
    for (let i = 0; i < currentCategoriesArray.length; i++) {
        let producto = currentCategoriesArray[i];

        // Verificamos si el producto cumple con los filtros de cantidad de vendidos
        if (((minCount == undefined) || (minCount != undefined && parseInt(producto.soldCount) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(producto.soldCount) <= maxCount))) {

            htmlContentToAppend += `
                <div class="card-product">
                    <img src="${producto.image}" class="img-card" alt="${producto.name}">
                    <div class="card-body-product">
                        <h5 class="card-title-product">${producto.name}</h5>
                        <p class="card-text-product">${producto.description}</p>
                        <h5 class="price-product">USD: ${producto.cost}</h5>
                        <small class="text-muted">Cantidad vendidos: ${producto.soldCount}</small>
                    </div>
                </div>
            `;
        }
    }
    document.getElementById("products-list-container").innerHTML = htmlContentToAppend;
}

// Ordenar y mostrar categorías
function sortAndShowCategories(sortCriteria, categoriesArray) {
    currentSortCriteria = sortCriteria;

    if (categoriesArray != undefined) {
        currentCategoriesArray = categoriesArray;
    }

    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);
    showCategoriesList();
}

// Evento que ocurre cuando el documento está cargado

    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCTS_URL).then(function(resultObj){
            if (resultObj.status === "ok"){
                currentCategoriesArray = resultObj.data
                showCategoriesList()
                //sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
            }
        });
    // Asignar funciones a los botones de ordenamiento
    document.getElementById("bot1").addEventListener("click", function() {
        sortAndShowCategories(ORDER_ASC_BY_PROD_COST); // Ordenar por precio ascendente
    });

    document.getElementById("bot2").addEventListener("click", function() {
        sortAndShowCategories(ORDER_DESC_BY_PROD_COST); // Ordenar por precio descendente
    });

    document.getElementById("bot3").addEventListener("click", function() {
        sortAndShowCategories(ORDER_BY_PROD_COUNT); // Ordenar por más vendidos
    });

    // Botón para limpiar los filtros
    document.getElementById("limpiar").addEventListener("click", function() {
        document.getElementById("min").value = "";
        document.getElementById("max").value = "";

        minCount = undefined;
        maxCount = undefined;

        showCategoriesList();
    });

    // Botón para aplicar los filtros de cantidad de vendidos
    document.getElementById("filtrar").addEventListener("click", function() {
        minCount = document.getElementById("min").value;
        maxCount = document.getElementById("max").value;
        

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0) {
            minCount = parseInt(minCount);
        } else {
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0) {
            maxCount = parseInt(maxCount);
        } else {
            maxCount = undefined;
        }

        showCategoriesList();
    });
});
