import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { setHouses } from '../../actions';
import fetchApi from '../../apiCall.js';
import CardContainer from '../CardContainer/CardContainer.js';

class App extends Component {

  componentDidMount = async() => {
    const houseData = await fetchApi();
    this.props.setHouses(houseData);
  }

  handleClick =() => {
    console.log('hi')
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

//const mapStateToProps = ({ fake }) => ({ fake });
export const mapDispatchToProps = dispatch => ({ 
  setHouses: houseData => dispatch(setHouses(houseData))
});

export default connect(null, mapDispatchToProps)(App);
