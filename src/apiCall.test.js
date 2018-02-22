import fetchApi from './apiCall.js';

describe('fetchApi', () => {
  let houseData;

  beforeEach(() => {
    houseData = [{
      name: 'name',
      founded: 'founded',
      seats: 'seats',
      titles: 'titles',
      coatOfArms: 'coat of arms',
      ancestralWeapons: 'weapons',
      words: 'words'
    }];
  });

  it('fetch gets called', async() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: houseData
      })
    }));

    expect(window.fetch).not.toHaveBeenCalled();
    await fetchApi();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('throw new error', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404
    }));
  });

  try {
    window.fetch;
  } catch (err) {
    expect(err).toEqual('error');
  }

});