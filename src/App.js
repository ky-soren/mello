import React, { Component } from 'react';
import './App.css';


import UserForm from "./components/UserForm";
import { getUser } from "./apiMethods/requests";

class App extends Component {
  searchUser = (e) => {
    e.preventDefault();
    const userId = e.target.elements.username.value;
    getUser(userId);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>mello</h1>
        <UserForm searchUser={this.searchUser} />
        </header>
      </div>
    );
  }
}

export default App;
