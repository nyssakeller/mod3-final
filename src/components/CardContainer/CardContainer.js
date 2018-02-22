import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getMembers} from '../../apiCall.js';
import { setMembers } from '../../actions';
import Card from '../Card/Card.js';

export class CardContainer extends Component  {
  handleClick = async (e) => {
    const match = this.props.houses.find(house => house.name === e.target.parentElement.className);
    this.getMembersForHouse(match);
    console.log(this.props.members)
;  }

  getMembersForHouse = async(house) => {
    house.swornMembers.forEach(async member => {
      const mems = await getMembers(member);
      this.props.setMembers(house, mems);
    }); 
  }
  
  render () {
    const { houses, members } = this.props;
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
          // swornMembers={memberNames}
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

export const mapDispatchToProps = dispatch => ({
  setMembers: (house, members) => dispatch(setMembers(house, members))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);