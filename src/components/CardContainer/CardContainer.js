import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getMembers} from '../../apiCall.js';
import Card from '../Card/Card.js';

export class CardContainer extends Component  {
  handleClick = (e) => {
    const match = this.props.houses.find(house => house.name === e.target.parentElement.className);
    this.getMembersForHouse(match);
  }

  getMembersForHouse = async(house) => {
    console.log(house);
    house.swornMembers.forEach(async member => {
      console.log(member)
      this.props.setMembers(house, await getMembers(member));
    });   
  }
  
  render () {
    const { houses, members } = this.props;
    const memberNames = members.map(member => member.name);

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