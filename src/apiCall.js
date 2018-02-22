export const fetchApi = async() => {
  try {
    const initalFetch = await fetch('http://localhost:3001/api/v1/houses');
    const data = await initalFetch.json();
    return data;
  } catch (err) {
    throw new Error('error');
  }
};

export const getMembers = async(id) => {
  const getMembers = await fetch(`https://www.anapioficeandfire.com/api/characters/${id}`, {
    method: 'GET',

    headers: {
      'Content-Type': 'application/json'
    }
})

  // const data = await getMembers.json();

  return await getMembers.json();
}

