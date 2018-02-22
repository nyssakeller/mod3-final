import React from 'react';

const Card = ({ name, founded }) => {
  founded === '' ? founded = 'N/A' : null;
  
  return (
    <div>
      <h1>{name}</h1>
      <h2>Founded: {founded}</h2>
    </div>
  );
};

export default Card;