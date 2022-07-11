import { useEffect, useState } from "react";
import axios from 'axios';

function PokeCard(props) {
 
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    console.log(props.pokeName)
    pegaPokemon(props.pokeName);
  }, [props.pokeName]);

 
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <figure>
      <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
      <p>Peso: {pokemon.weight}</p>
      <p>Tipo: {pokemon.types && pokemon.types[0].type.name}</p>
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </figure>
  );
};

export default PokeCard;
