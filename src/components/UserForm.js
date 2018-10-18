import React from 'react';

const UserForm = (props) => {
  return (
    <form onSubmit={props.searchUser}>
      <input style={{ display:"block"}}
             type="text"
             name="username"
      />
      <button>Search</button>
    </form>
  )
}

export default UserForm;
