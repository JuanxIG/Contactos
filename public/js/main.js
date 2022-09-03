const nombre = document.querySelector(".nombre");
const direccion = document.querySelector(".direccion");
const numero = document.querySelector(".numero");
const btnAgregar = document.querySelector(".btn-agregar");

const listadoAgregar = document.querySelector(".listado-contactos");

const localStorage = window.localStorage;

btnAgregar.onclick = () => {
    let contacto = {
        id: Math.random(1, 100),
        nombre: nombre.value,
        direccion: direccion.value,
        numero: numero.value,
    }
    guardarContacto(localStorage, contacto);
};

cargarContactos(localStorage, listadoAgregar);