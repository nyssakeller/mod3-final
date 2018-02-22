import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { setHouses, setMemberIds, setMembers } from '../../actions';
import {fetchApi, getMembers} from '../../apiCall.js';
import CardContainer from '../CardContainer/CardContainer.js';

class App extends Component {

  componentDidMount = async() => {
    const houseData = await fetchApi();
    //getMembers();
    this.props.setHouses(houseData);
    this.getMemberId();
  }

  getMemberId = async() => {
    // const ids = this.props.houses.map(house => {
    //   return house.swornMembers.map(member => member.split('characters/')[1]);
    // });
    // this.props.setMemberIds(ids);
    
    // this.props.memberIds.forEach(ids => {
    //   ids.forEach(async id => {
    //     const member = await getMembers(id);
    //     await this.props.setMembers(member);
    //   });
    // });
   this.props.houses.reduce((arr, house) => {
    console.log(house);
   });
  }
  
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          {/* <button onClick={this.handleClick}
          ></button> */}
        </div>
        <div className='Display-info'>
          <CardContainer onClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  setHouses: PropTypes.func
};

export const mapStateToProps = store => ({
  houses: store.houses, 
  memberIds: store.memberIds
});

export const mapDispatchToProps = dispatch => ({ 
  setHouses: houseData => dispatch(setHouses(houseData)),
  setMemberIds: memberIds => dispatch(setMemberIds(memberIds)),
  setMembers: members => dispatch(setMembers(members))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
