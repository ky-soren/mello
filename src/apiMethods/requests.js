import axios from 'axios';
import { API_KEY, GET_SUMMONER_INFO_URL } from './urls';

export function getUser(userId) {
  return axios.get(`${GET_SUMMONER_INFO_URL}${userId}${API_KEY}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
}
