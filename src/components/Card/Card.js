import React from "react";

import "./style.css";
import { typeColors, backgroundColors } from "../../helpers/typeColors";

const Card = ({ pokemon }) => {

  const main_types = Object.keys(backgroundColors);
  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const color = backgroundColors[type];

  const CardStyle = {
    backgroundColor: color,
    borderRadius: "20px",
    boxShadow: "0 3px 15px rgba(100, 100, 100, 0.5)",
    margin: "10px",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
  };

  return (
    <div className="Card__container" style={CardStyle}>
      <div className="Card__img">
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt="${name}"
          style={{ maxWidth: "100px"}}
        />
        {/* <img src={pokemon.sprites.front_default} alt="" /> */}
      </div>
      <div className="Card__name">{name}</div>
      <div className="Card__types">
        {pokemon.types.map((type) => {
          return (
            <div
              className="Card__type"
              style={{
                backgroundColor: typeColors[type.type.name],
                padding: "5px 10px",
                margin: "10px 10px 10px 0",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className="Card__info">
        <div className="Card__data Card__data--weight">
          <p className="title">Weight</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="Card__data Card__data--height">
          <p className="title">Height</p>
          <p>{pokemon.height}</p>
        </div>
        <div className="Card__data Card__data--ability">
          <p className="title">Ability</p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
