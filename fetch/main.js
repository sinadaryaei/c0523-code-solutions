fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => console.log(users));

async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.status}`);
    }
    const pokemon = await response.json();
    console.log(pokemon);
  } catch (error) {
    console.error(error);
  }
}

getPokemon();
