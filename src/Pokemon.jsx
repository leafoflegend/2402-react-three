import { useState } from 'react';
import PokemonTypes from './PokemonTypes.jsx';
import classes from './pokemon.module.css';

const Pokemon = ({ pokemonName, pokemonUrl }) => {
    const [pokemonData, setPokemonData] = useState(null);

    const fetchPokemonData = async () => {
        const pokemonResponse = await fetch(pokemonUrl);
        const pokemonDataJSON = await pokemonResponse.json();

        const picture = pokemonDataJSON.sprites.front_default;
        const types = pokemonDataJSON.types.map((typeInfo) => {
            return typeInfo.type.name;
        });

        setPokemonData({
            picture,
            types,
        });
    };

    return (
        <div
            className={classes.container}
        >
            <h4 style={{ margin: 0 }}>{pokemonName}</h4>
            {
                pokemonData ? <img src={pokemonData.picture} /> : null
            }
            {
                pokemonData
                    ? <PokemonTypes pokemonTypes={pokemonData.types} />
                    : null
            }
            <button
                onClick={fetchPokemonData}
            >
                Load More Info
            </button>
        </div>
    );
};

export default Pokemon;
