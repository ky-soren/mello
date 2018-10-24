import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './UserForm.css';

class UserForm extends Component {
  state = {value: ''};

  render() {
    return (
      <form 
        onSubmit={e => this.props.searchUser(e, this.state.value)}>
        <TextField
          className="searchUserTextField"
          autoFocus={true}
          variant="filled"
          fullWidth={true}
          label="Summoner name"
          value={this.state.value}
          onChange={e => this.setState({value: e.target.value})}>
          </TextField>
        <Button 
          variant="contained"
          size="large"
          color="primary"> Search
          </Button>
      </form>
    );
  }
}

export default UserForm;
