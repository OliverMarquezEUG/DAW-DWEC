document.getElementById('btnGuardarDatos').addEventListener('click', function() {
    var nom = prompt('Introduce tu nombre:');
    var cognom = prompt('Introduce tu apellido:');
    var edat = prompt('Introduce tu edad:');
    
    window.usuario = {
        nom: nom,
        cognom: cognom,
        edat: edat
    };
});

document.getElementById('btnMostrarDatos').addEventListener('click', function() {
    if (window.usuario) {
        var infoDiv = document.getElementById('infoUsuario');
        infoDiv.innerHTML = 'Nombre: ' + window.usuario.nom + '<br>Apellido: ' + window.usuario.cognom + '<br>Edad: ' + window.usuario.edat;
    } else {
        alert('Primero debes guardar los datos del usuario.');
    }
});
