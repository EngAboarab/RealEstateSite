import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '4e434584c8mshb5054fa05cf00bcp1ebfd5jsne2b72945b045',
    },
  });
  return data;
};
