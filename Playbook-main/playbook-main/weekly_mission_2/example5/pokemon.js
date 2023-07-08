/* 
Este ejemplo incluye dependencias, En tu linea de comando ve a este proyecto y ejecuta el comando 'npm install' para descargar las dependencias, esto creara una carpeta node_modules
*/
export default class Pokemon {
    constructor(name, type, age) {
        this.name = name
        this.type = type
        this.age = age
        this.attacks = []
    }

    get getAttacks() {
        return this.attacks
    }

    set setAttacks(attacks) {
        return this.attack = attacks
    }
}

const myPokemon = new Pokemon = ('Eevee', "Fuga", 10)
console.log(myPokemon)