import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = {
  button: {
    margin: '10px 0'
  },
  textField: {
    background: 'white',
    borderRadius: 5
  }
}

class UserForm extends Component {
  state = {value: ''};

  render() {
    const { classes } = this.props;
    return (
      <form 
        onSubmit={e => this.props.searchUser(e, this.state.value)}>
        <TextField
          classes={{ root: classes.textField}}
          autoFocus={true}
          variant="filled"
          fullWidth={true}
          label="Summoner name"
          value={this.state.value}
          onChange={e => this.setState({value: e.target.value})}>
          </TextField>
        <Button 
          classes={{
            root: classes.button
          }}
          variant="contained"
          size="large"
          color="primary"
        > 
          Search
        </Button>
      </form>
    );
  }
}

export default injectSheet(styles)(UserForm);
