console.log("Que onda explorers!")

let myCar = new Object() // Creacion de un objeto
myCar.model = "Adui"; // Guardaddo un valor dentro del objeto creado
myCar.model = "Chevrolet";
myCar.year = 1978;

console.log(myCar) // Imprimiendo objeto

// 2. Deaclaracion de un objeto con variables locales y publicas

const myModule = (() => {

    // Variables de contexto local
    const privateFoo = "Soy un valor me usan dentro de este objeto"
    const privateBear = [1, 2, 3, 4]
    const baz = "Soy un valor que va ser expuesto"

    // Variables para guardar las variables locales   
    const exported = {
        publicFoo: "Valor publico, pueden verme desde donde me llamen!"

    }

    // Exposicion de variables locales
    return exported
})

console.log(myModule.privateFoo)
console.log(myModule)