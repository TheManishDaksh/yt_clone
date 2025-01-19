import axios from "axios"

export const base_url = 'https://yt-api.p.rapidapi.com/home';

const options = {
    params : {
        maxResult: 50
    },
    headers: {
      'x-rapidapi-key': process.env.YT_API_KEY,
      'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    }
  };
  
  export const fetchedData= async(url)=>{
    const {data} = await axios.get(`${base_url}/${url}`, options);
    return data ;
  }