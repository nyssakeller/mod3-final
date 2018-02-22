import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.js';

export class CardContainer extends Component  {
  
  render () {
    const { houses } = this.props;

    const rendered =  houses.map((house, i)=> {
      return (
        <Card 
          name={house.name} 
          founded={house.founded}
          seats={house.seats}
          titles={house.titles}
          key={i}/>

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