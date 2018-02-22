import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.js';

export class CardContainer extends Component  {
  handleClick = (e) => {
    console.log(e.target.value);
  }
  
  render () {
    const { houses } = this.props;
    const rendered =  houses.map((house, i)=> {
      return (
        <Card 
          name={house.name} 
          founded={house.founded}
          seats={house.seats}
          titles={house.titles}
          coatOfArms={house.coatOfArms}
          ancestralWeapons={house.ancestralWeapons}
          words={house.words}
          key={i} 
          onClick={()=>this.handleClick()}/>
      );
    });

    return (
      <div>
        {rendered}
      </div>
    );
  }
};

export const mapStateToProps = store => ({
  houses: store.houses
});

export default connect(mapStateToProps)(CardContainer);