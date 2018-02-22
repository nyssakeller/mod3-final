import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.js';

export class CardContainer extends Component  {
  handleClick = () => {
    const { members } = this.props;
    console.log(Card.house);
  }
  
  render () {
    const { houses } = this.props;
    const rendered =  houses.map((house, i)=> {
      console.log(Card);
      return (
        <Card 
          house={house}
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
  houses: store.houses,
  members: store.members
});

export default connect(mapStateToProps)(CardContainer);