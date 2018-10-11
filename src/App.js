import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


import UserForm from "./components/UserForm"

//RGAPI-16909554-f23a-4c5c-813b-275a03dd5b1e
//https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/noctia?api_key=RGAPI-16909554-f23a-4c5c-813b-275a03dd5b1e

class App extends Component {
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${user}?api_key=RGAPI-16909554-f23a-4c5c-813b-275a03dd5b1e`)
    .then((res) => {
      console.log(res);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>mello</h1>
          <UserForm getUser={this.getUser} />
        </header>
      </div>
    );
  }
}

export default App;
