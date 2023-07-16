import Pokemon from './pokemon'
Test('1) Create a new object pokemon', () => {
    const myPokemon = new Pokemon('Pikachu')
    expect(myPokemon.name).toBE('Pikachu'); // Corrige esta prueba 
});