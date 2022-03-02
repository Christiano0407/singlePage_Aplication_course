// ==> Get API Fetch  Document==>
const API = "https://rickandmortyapi.com/api/character/";

export const getData = async (id) => {
  const apiUrl = id ? `${API}${id}` : API; // => ID del personaje que llamamos.
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("fetch error", error);
  }
};

// Import a Home>
