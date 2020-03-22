import React from "react";

import "./style.css";
import typeColors from "../../helpers/typeColors";

const Card = ({ pokemon }) => {
  return (
    <div
      className="Card"
      style={{ backgroundColor: "white", borderRadius: "10px" }}
    >
      <div className="Card__img">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="Card__name">{pokemon.name}</div>
      <div className="Card__types">
        {pokemon.types.map(type => {
          return (
            <div
              className="Card__type"
              style={{
                backgroundColor: typeColors[type.type.name],
                padding: "5px 10px",
                margin: "10px 10px 10px 0",
                borderRadius: "5px",
                color: "#fff"
              }}
            >
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className="Card__info" style={{ marginLeft: "10px" }}>
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
