import { useState, useEffect } from 'react';
import Pokemon from './Pokemon.jsx';

function App() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const getPokemon = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            const json = await response.json();

            const pokemon = json.results;

            setPokemonList(pokemon);
        };

        getPokemon();
    }, []);

    return (
        <div
            style={{
                maxHeight: '100%',
                height: '100%',
                width: '100%',
                maxWidth: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h3>Pokedex</h3>
            <div
                style={{
                    borderBottom: 'solid 1px black',
                    width: '100%',
                }}
            >
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    overflowY: 'scroll',
                    flexGrow: 1,
                    width: '100%',
                    padding: '0.5em',
                }}
            >
            {
                pokemonList.map((pokemon) => {
                    return (
                        <Pokemon
                            key={pokemon.name}
                            pokemonName={pokemon.name}
                            pokemonUrl={pokemon.url}
                        />
                    );
                })
            }
            </div>
        </div>
    );
}

export default App
