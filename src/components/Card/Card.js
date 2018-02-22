import React from 'react';

const Card = ({ name, founded,  seats, titles, coatOfArms, ancestralWeapons, words, onClick }) => {
  founded === '' ? founded = 'N/A' : null;
  
  return (
    <div onClick={(e) => onClick(e)}>
      <h1>{name}</h1>
      <h2>Founded: {founded}</h2>
      <p>Seats: {seats}</p>
      <p>Titles: {titles}</p>
      <p>Coat of Arms: {coatOfArms}</p>
      <p>Ancestral Weapons: {ancestralWeapons}</p>
      <p>Words: {words}</p>
    </div>
  );
};

export default Card;