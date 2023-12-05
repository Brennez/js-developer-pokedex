const params = new URLSearchParams(window.location.search);
const pokemonId = params.get("Number");

let pokemonDetailElement = document.getElementById("content");

const getPokemonDetail = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  const data = await response.json();
};

function convertPokemonDetails() {
  return `
  <section class="pokemonDetail">
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
        <h1> Bulbasaur</h1>
        <div class="tags">
            <ol class="types">
                <li>grass</li>
                <li>poison</li>
            </ol>
            <span>
                #001
            </span>
        </div>
        <div class="img">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="bulbassaur">

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
                    Height: <span class="detailValue">2' 3.6° (0.70cm)</span>
                </li>
                <li>
                    Weight: <span class="detailValue">15.2 lbs (6.9 kg)</span>
                </li>
                <li id="Abilities">
                    Abilities: 
                            <span class="detailValue" >OverGrow,</span>
                            <span class="detailValue" >Chlorophyl,</span>
                </li>
            </ul>
            <h3>Breeding</h3>
            <ul>
                <li>
                    Gender: <span class="detailValue"> 87.5% 12.5%</span>
                </li>
                <li>
                    Egg Groups: <span class="detailValue">Monster</span>
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
  const newHtml = convertPokemonDetails();

  pokemonDetailElement += newHtml;
}

getPokemonDetail();

loadDetailPokemon();
