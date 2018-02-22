const fetchApi = async() => {
  const initalFetch = await fetch('http://localhost:3001/api/v1/houses');
  const data = await initalFetch.json();
  return data;
};

export default fetchApi;