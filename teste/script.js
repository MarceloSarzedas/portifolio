const pokemon = [
  {
    name: 'Pikachu',
    type: 'electric',
},
  {
    name: 'Bulbasaur',
    type: 'grass',
  },
  {
    name: 'Charmander',
    type: 'fire',
  },
  {
    name: 'Squirtle',
    type: 'water',
  }
]
console.log(pokemon)
const novoPokemon = [
  {
  name: 'psyduck',
  type: 'water',
},
{
  name: 'pidgey',
  type: 'flying',
},
{
  name: 'jigglypuff',
  type: 'normal',
},
{
  name: 'gastly',
  type: 'ghost',
}
]
pokemon.push(...novoPokemon)
pokemon.forEach((pokemon) => {
  console.log(pokemon.name)
  console.log(pokemon.type)
  console.log('-----------------------------------')
  
  
});