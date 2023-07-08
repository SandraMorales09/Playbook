/*
 * Ten en cuenta:
 *    -requiere('./logger') te dara el objeto creado
 *    - requiere('./logger').Logger te regresara la clase
 * 
 * En este caso estamos agregando una funcion mas al objeto instanciando, no a la clase.
 * */
requiere('./logger').customMessage = function() {
    console.log('This is a new functionality')
}