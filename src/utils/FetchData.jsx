import axios from 'axios';

export const BASE_URL = 'https://youtube-v311.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50, 
  },
  headers: {
   'x-rapidapi-key': 'f4899d3debmsh89e9fb5added327p1a83afjsn96a150d1a46d',
    'x-rapidapi-host': 'youtube-v311.p.rapidapi.com'
  },
};

export const fetchedData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data);
  
  return data;
  
};