import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.js';

export class CardContainer extends Component  {
  handleClick = (e) => {
    let display = 'display';
  }
  
  render () {
    const { houses, members } = this.props;
    const memberNames = members.map(member => member.name);
    // houses.reduce((obj, house) => {
    //   !obj[house] ? obj[house] = [] : null;
    //   const match = members.filter(member => member.url === house.swornMembers[0].url);
    //   console.log(match)
    // }, {});

    const rendered =  houses.map((house, i)=> {
      
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
          swornMembers={memberNames}
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