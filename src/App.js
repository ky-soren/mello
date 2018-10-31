import React, { Component } from 'react';
import './App.css';

import { getUser, getUserMetrics } from "./apiMethods/requests";
import UserForm from "./components/UserForm";
import SummonerProfile from "./components/SummonerProfile";

class App extends Component {
  state = {
    accountId:'',
    summonerId:'',
    summonerName:'',
    summonerLevel:'',
    tier:'',
    rank:'',
    leaguePoints:'',
    wins:'',
    losses:''
  }

  searchUser = (e, userName) => {
    e.preventDefault();
    getUser(userName).then(data => {
      if (data.name) {
        this.setState({
          summonerName:data.name, 
          accountId:data.accountId, 
          summonerId:data.id,
          summonerLevel:data.summonerLevel
        });

        getUserMetrics(data.id).then(data => {
            this.setState({
              tier:data.tier, 
              rank:data.rank, 
              wins:data.wins, 
              losses:data.losses,
              leaguePoints:data.leaguePoints
            });
          console.log(data);
        })
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>mello</h1>
        <UserForm searchUser={this.searchUser} /> 
       { this.state.summonerName ? 
          <SummonerProfile 
            summonerName={this.state.summonerName}
            tier={this.state.tier}
            rank={this.state.rank}
            wins={this.state.wins}
            losses={this.state.losses} /> :
         <p>Search by summoner name</p> } 
        </header>
      </div>
    );
  }
}

export default App;
