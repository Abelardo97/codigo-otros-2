/**
 * El programa nos pide ingresar unos datos y despues los datos los añade a la lista 
 * de invitados , la persona que quiieras invitar debe ser mayor de edad, tambien 
 * se pueden eliminar a los invitados
 * Paso 1: Se modificaron los links en el html
 * Paso 2: se modifcaron las variable por otras, ya que los nombres de estas eran redundantes
 * Paso 3: 
 */

 let formulario = document.querySelector("form");

formulario.onsubmit = function(e) {

  e.preventDefault();
  
  //Se cambia el tipo  y nombre de las  variables, se añade ;
  let name = formulario.elements[0];
  let age = formulario.elements[1];
  let nacionality = formulario.elements[2];



  let nombre = name.value;
  let edad = age.value;

  let i = nacionality.selectedIndex;

  let nacionalidad = nacionality.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error")
  }

  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
  && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

/*

const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const  corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);
*/

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }



  //Se modifican variables
const lista = document.getElementById("lista-de-invitados");
const elementoLista = document.createElement("div");

elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);

/*
const spanNombre = document.createElement("span");
const inputNombre = document.createElement("input");
const espacio = document.createElement("br");
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
*/

function crearElemento(descripcion, valor) {
  //Se agrega const
const spanNombre = document.createElement("span");
const inputNombre = document.createElement("input");
const espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


//Se agrega const
const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  };
}