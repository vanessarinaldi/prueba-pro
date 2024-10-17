document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let userName = localStorage.getItem('user');
    if (userName) {
        document.getElementById("user-container").textContent =`${userName}`;
    }
})

       /* let registerLink = document.getElementById("register-link");
        if (registerLink) {
            registerLink.style.display = "none"; // Oculta el enlace de "Registrarse"
        }*/

       

