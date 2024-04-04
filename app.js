/* Desarrollar una aplicación web que permita a los usuarios ingresar nombres en un formulario y visualizar una lista dinámica de estos nombres. */
var botonAgregar = document.querySelector("#btn-agregar")
var textName = document.querySelector("#textName")
var listNames = document.querySelector(".containerNames")

botonAgregar.addEventListener("click", ()=>{
    
    listNames.classList.remove("container")

    textName.value
    listNames.innerHTML += textName.value + " "

    if(textName.value === ""){
        listNames.innerHTML += textName.value + "El campo no puede estar vacío" + " "
    }
})