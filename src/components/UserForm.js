import React from 'react';

import Button from '@material/react-button';
import TextField, { HelperText, Input } from '@material/react-text-field';

import '@material/react-button/dist/button.min.css';
import '@material/react-text-field/dist/text-field.min.css';

const UserForm = (props) => {
  return (
    <form onSubmit={props.searchUser}>
      <input style={{ display:"inline-flex"}}
             type="text"
             name="username"
      />
      <Button raised="true">Search</Button>
    </form>
  )
}

export default UserForm;
