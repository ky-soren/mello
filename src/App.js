import React, { Component } from 'react';
import './App.css';

import { getUser } from "./apiMethods/requests";
import UserForm from "./components/UserForm";

class App extends Component {
  state = {
    accountId: null,
    summonerId: null,
    summonerName: null,
    summonerLevel: null,
    tier: null,
    rank: null,
    wins: null,
    losses: null
  }

  searchUser = (e) => {
    e.preventDefault();
    const userName = e.target.elements.username.value;
    getUser(userName).then(data => {
        console.log(data);
        this.setState({summonerName:data.name});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>mello</h1>
        <UserForm searchUser={this.searchUser} /> 
       { this.state.summonerName ? <p>Name: { this.state.summonerName } </p> :
        <p>Search by username</p> } 
        </header>
      </div>
    );
  }
}

export default App;
