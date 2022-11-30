console.log("Entro al main.js");
const base_url_api = "http://ucamp.alumnos.dev4humans.com.mx";
const tblUsuarios = document.getElementById("tblUsuarios");

function cargarUsuarios() {
    fetch(base_url_api + "/Main/alumnos", 
    {
        method: "GET"
    }
    )
    .then(response => response.json())
    .then (result => {
        console.log(result);
        tblUsuarios.innerHTML = "";
        for (const usuario of result.data) {
            let tr = `<tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.paterno}</td>
            <td>${usuario.materno}</td>
            <td>${usuario.nombre}</td>
            </tr>`;
            tblUsuarios.innerHTML += tr;
        }
        if(result.data.lenght == 0) {
            tblUsuarios.innerHTML = `<tr><td colspan="5" class="text-center">No hay usuarios</td></tr>`;
        }
    })
    .catch((error) => {
        console.log("¡Error Detectado!");
    })
}

function agregarUsuario() {
    console.log( "Entro a agregarUsuario")
    let form_data = new FormData();
    form_data.append("nombre", document.getElementById("nombre").value);
    form_data.append("paterno", document.getElementById("paterno").value);
    form_data.append("materno", document.getElementById("materno").value);
    form_data.append("email", document.getElementById("email").value);

    fetch(base_url_api + "/Main/alumnos", 
    {
        method: "POST",
        body: form_data
    }
    )
    .then(response => response.json())
    .then (result => {
        console.log(result);
        cargarUsuarios();
    })
    .catch((error) => {
        console.log("¡Error Detectado!");
    })
}

function limpiarFormulario() {

}

cargarUsuarios();