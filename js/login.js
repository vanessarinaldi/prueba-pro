document.getElementById('boton').addEventListener('click', function(event) {
    event.preventDefault();

    let user = document.getElementById('user').value;
    let contra = document.getElementById('contra').value;

    if (user && contra) {
        location.replace('index.html');
    } else {
        alert('Please fill in the fields.');
    }
});
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('user').value;
    
    // Guardar el nombre de usuario en la sesión
    sessionStorage.setItem('username', username);
    
    // Redirigir a la página principal
    window.location.href = 'index.html';
});