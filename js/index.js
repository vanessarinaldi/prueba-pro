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
window.onload = function() {
    const username = sessionStorage.getItem('username');
    if (username) {
        document.getElementById('user-info').innerText = `Welcome, ${username}`;
    } else {
        // Redirigir al login si no hay un nombre de usuario en la sesión
        window.location.href = 'login.html';
    }
};

