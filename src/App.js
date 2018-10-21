import React, { Component } from 'react';
import './App.css';


import UserForm from "./components/UserForm";
import { getUser } from "./apiMethods/requests";

class App extends Component {
  state = {
    name: null,
    summonerLevel: null
  }

  searchUser = (e) => {
    e.preventDefault();
    const userId = e.target.elements.username.value;
    getUser(userId).then(data => {
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
