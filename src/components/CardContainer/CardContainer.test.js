import React from 'react';
import CardContainer, { mapStateToProps } from './CardContainer.js';
import { shallow } from 'enzyme';

describe('CardContainer', () => {

  // it('snapshot test', () => {
  //   const wrapper = shallow(<CardContainer />);
  //   expect(wrapper).toMatchSnapShot();
  // });

  it('map state correctly', () => {
    const houseData = [{
      name: 'name',
      founded: 'founded',
      seats: 'seats',
      titles: 'titles',
      coatOfArms: 'coat of arms',
      ancestralWeapons: 'weapons',
      words: 'words'
    }];
    const mockStore = {houses: houseData};
    const mapped = mapStateToProps(mockStore);
    expect(mapped.houses).toEqual(mockStore.houses);
  });

});