const getTypeColor = (type) => {
    switch (type) {
        case 'grass':
            return 'green';
        case 'fire':
            return 'red';
        case 'poison':
            return 'purple';
        default:
            return 'black';
    }
}

const PokemonTypes = ({ pokemonTypes }) => {
    return (
        <p>
            {
                pokemonTypes.map((typeName) => {
                    return (
                        <span
                            key={typeName}
                            style={{
                                color: getTypeColor(typeName),
                            }}
                        >
                            {typeName}&nbsp;
                        </span>
                    );
                })
            }
        </p>
    );
}

export default PokemonTypes;
