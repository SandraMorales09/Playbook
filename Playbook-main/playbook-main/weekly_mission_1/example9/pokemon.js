exports.default = (Pikachu) => {
    console.log('default: ${pikachu}')
}

import MyPokemon from './pokemon.js'

const pikachu = new MyPokemon('Pikachu')
pikachu.sayHello()
const chikorita = new MyPokemon('Chikorita')
chikorita.sayHello()
const shorlax = new MyPokemon('Shorlax')
shorlax.sayHello()
const eevee = new MyPokemon('Eevee')
eevee.sayHello()
const miutu = new MyPokemon('Miutu')
miutu.sayHello()

exports.from = (pikachu) => {
    console.log('default: ${pikachu}')
}