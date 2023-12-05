const params = new URLSearchParams(window.location.search);
const pokemonId = params.get("Number");

const pokemonDetailElement = document.getElementById("content");

const getPokemonEspecies = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
  );

  const data = await response.json();

  return data;
};

const getPokemonDetail = async () => {
  const especies = await getPokemonEspecies();

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  const data = await response.json();

  const pokemon = convertPokeApiDetailToPokemon(data);

  const newHtml = convertPokemonDetails(pokemon, especies);

  pokemonDetailElement.innerHTML += newHtml;
};

function convertPokemonDetails(pokemon, especies) {
  return `
  <section class="pokemonDetail ${pokemon.type}">
        <div class="actions">
            <a href="index.html">
                <span class="material-symbols-outlined" id="backIcon">
                    arrow_back
                    </span>
            </a>
            <a href="">
                <span class="material-symbols-outlined" id="favoriteIcon">
                    favorite
                    </span>
            </a>

        </div>
        <h1> ${pokemon.name}</h1>
        <div class="tags">
            <ol class="types">
            ${pokemon.types
              .map((type) => `<li class="type ${type}">${type}</li>`)
              .join("")}
            </ol>
            <span>
                #${pokemon.number}
            </span>
        </div>
        <div class="img">
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
        <div class="detailsContent">
            <div class="titleContent">
                <h2>About</h2>
            </div>

            <ul>
                <li>
                    Species: <span class="detailValue">Seed</span>
                </li>
                <li>
                    Height: <span class="detailValue">${pokemon.height}</span>
                </li>
                <li>
                    Weight: <span class="detailValue">${pokemon.weight}</span>
                </li>
                <li>
                    Abilities: 
                            
                </li>
            </ul>
            <h3>Breeding</h3>
            <ul>
                <li>
                    Gender: <span class="detailValue"> 87.5% 12.5%</span>
                </li>
                <li>
                    Egg Groups: ${especies.egg_groups.map(
                      (item) =>
                        `<span class="detailValue" id="hability" >${item.name}</span>`
                    )}
                </li>
                <li>
                    Egg Cycle: <span class="detailValue">Grass</span>
                </li>
            </ul>
        </div>
    </section>
      `;
}

function loadDetailPokemon() {
  console.log(`hello ${newHtml}`);
}

getPokemonDetail();
