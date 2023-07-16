/*
 Al exportar una funcion/objeto asi:

 > module.exports.verbose

 Estaremos exportando el contenido con el nombre 'verbose'

 module.exporst hara que puedas invocar esta funcion en otro script como:
 > const logger = requiere(',/logger')

 y usarla como:
 
 > logger.verbose ("Heeey")
*/

module.exports.verbose = (message) => {
    console.log('verbose: ${message}')
}