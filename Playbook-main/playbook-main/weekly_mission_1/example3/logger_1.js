/*
Esto tambien es la declaracion de una funcion

module. exports hara que puedas invocar esta funcion en otro script como:
> const logger = requiere("./logger")

y usarla como:
*/
module.exports = (message) => {
    console.log("info: ${message}")
}