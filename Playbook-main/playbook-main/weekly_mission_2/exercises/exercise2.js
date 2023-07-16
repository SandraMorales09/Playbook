const explorers = [{
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMORELIA",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Patzcuaro",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Uruapan",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]


// 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log('Punto #1')
explorers.forEach(element => console.log(element.name))

// 2. Imprime el stack de cada explorers, una FOR EACH
console.log('Punto #2')
explorers.forEach(element => console.log(element.stack))

// 3. Cre una nueva lista con las listas de stacks de cada explorer, usa MAP
const atckMap = explorer.map(element => element.stack)
console.log('Punto #3')
console.log('stackMap')

// 4. Obten la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el metodo incluides)
const explorerConJs = explorers.filter(elemt => elemt.stack.icludes('js'))
console.log('Punto #4')
explorerConJs.forEach(element => console.log(element.name))

// 5. Busca el primer explorer que sea de la CDMORELIA, usa FIND
const CDMORELIA = explorer.find(element => element.city === 'CDMORELIA')
console.log('Punto #5')
console - log(CDMORELIA.Nname)

// 6. Obten la suma de todos los exercises_completed, usa REDUCE
const totalCompletedExercises = explorers.reduce((prev_val, curr_val) => prev_val + curr_val.exercises_completed, 0)
console.log('Punto #6')
console.log(totalCompletedExercises)

// 7. Obten la validacion si al menos uno de los explorers tiene la propiedad exercisesFinished en Fronted como true, usa SOME
const someFrontendCoomplete = explorers.some(element => element.missions.frontend.isFinished === true)
console.log('Punto #7')
console.log(someFrontendComplete)

// 8. Obten la validacion si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const everyFrontendComplee = explorers.every(element => element.missions.frontend.isFinished === true)
console.log('Punto #8')
console.log(everyFrontendComplete)