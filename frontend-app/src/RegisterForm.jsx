import React from "react"
import { Component } from "react"


class RegisterForm extends Component {
  render() {
    return (
        <form>
          <fieldset>
            <h2>Register</h2>
            <p>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
       
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        
        <button type="submit">Register</button>
        </p>
        </fieldset>
      </form>
      
   
  );
};
}

export default RegisterForm;