import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.js';

export class CardContainer extends Component  {
  handleClick = (e) => {
    console.log(e);
  }
  
  render () {
    const { houses } = this.props;
    const rendered =  houses.map((house, i)=> {
      console.log(Card);
      return (
        <Card 
          name={house.name} 
          founded={house.founded}
          seats={house.seats}
          titles={house.titles}
          coatOfArms={house.coatOfArms}
          ancestralWeapons={house.ancestralWeapons}
          words={house.words}
          swornMembers={house.swornMembers}
          key={i} 
          onClick={(e) => this.handleClick(e)}/>
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