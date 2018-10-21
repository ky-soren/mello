import React, { Component } from 'react';
import './App.css';

import '@material/react-button/dist/button.css';
import '@material/react-button/dist/card.css';
import '@material/react-button/dist/text-field.css';
import '@material/react-button/dist/ripple.css';
import '@material/react-button/dist/line-ripple.css';

import UserForm from "./components/UserForm";
import { getUser } from "./apiMethods/requests";

class App extends Component {
  state = {
    name: null,
    summonerLevel: null,
    id: null,
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
        this.setState({name:data.name});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>mello</h1>
        <UserForm searchUser={this.searchUser} />
      { this.state.name ? <p>Name: { this.state.name } </p> :
        <p>Search by username</p> }
        </header>
      </div>
    );
  }
}

export default App;
