const fetchApi = async() => {
  try {
    const initalFetch = await fetch('http://localhost:3001/api/v1/houses');
    const data = await initalFetch.json();
    return data;
  } catch (err) {
    throw new Error('error');
  }
};

export default fetchApi;