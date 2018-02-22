import React from 'react';
import App, { mapDispatchToProps } from './App.js';

describe('App', () => {

  it('calls dispatch', () => {
    const mockDispatch = jest.fn(); 
    const mapped = mapDispatchToProps(mockDispatch);
    
    mapped.setHouses();
    expect(mockDispatch).toHaveBeenCalled();
  });

});