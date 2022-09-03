const guardarContacto = (localStorage, contacto) => {
    localStorage.setItem(contacto.id, JSON.stringify(contacto));
    window.location.href = "/";
};

const cargarContactos = (localStorage, parentNode) => {
    let claves = Object.keys(localStorage);
    for (clave of claves) {
        let contacto = JSON.parse(localStorage.getItem(clave));
        crearContacto(parentNode, contacto, localStorage)
    };
};

const crearContacto = (parentNode, contacto, localStorage) => {
    let divContacto = document.createElement("div")
    let nombreContacto = document.createElement("h3")
    let numeroContacto = document.createElement("p")
    let direccionContacto = document.createElement("p")
    let iconBorrar = document.createElement("span")

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion

    iconBorrar.innerHTML = "delete_forever"

    divContacto.classList.add("contactos")
    iconBorrar.classList.add("material-symbols-outlined", "icono")

    iconBorrar.onclick = () => {
        localStorage.removeItem(contacto.id)
        window.location.href = "/";
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconBorrar)

    parentNode.appendChild(divContacto)

}