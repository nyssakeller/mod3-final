import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { setHouses } from '../../actions';
import fetchApi from '../../apiCall.js';
class App extends Component {
  componentDidMount = async() => {
    const houseData = await fetchApi();
    this.props.setHouses(houseData);
  }
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          {/* <button onClick={() => {
           this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button> */}
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  setHouses: PropTypes.func
};

//const mapStateToProps = ({ fake }) => ({ fake });
const mapDispatchToProps = dispatch => ({ 
  setHouses: houseData => dispatch(setHouses(houseData))
});
export default connect(null, mapDispatchToProps)(App);
