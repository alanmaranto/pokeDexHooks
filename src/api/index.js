import axios from "axios";

// pokemon
export const getAllPokemon = async url => {
  try {
    const response = await axios(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};
