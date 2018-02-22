export const fetchApi = async() => {
  try {
    const initalFetch = await fetch('http://localhost:3001/api/v1/houses');
    const data = await initalFetch.json();
    return data;
  } catch (err) {
    throw new Error('error');
  }
};

export const getMembers = async(url) => {
  const getMembers = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // const data = await getMembers.json();

  return await getMembers.json();
}

