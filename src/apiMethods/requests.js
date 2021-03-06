import axios from 'axios';
import { API_KEY, GET_SUMMONER_INFO_URL, GET_SUMMONER_METRICS_URL } from './urls';

export function getUser(userName) {
  return axios.get(`${GET_SUMMONER_INFO_URL}${userName}${API_KEY}`)
    .then((res) => {
      return res.data;
    })
}

export function getUserMetrics(summonerId) {
  return axios.get(`${GET_SUMMONER_METRICS_URL}${summonerId}${API_KEY}`)
    .then((res) => {
      return res.data[0];
    })
}