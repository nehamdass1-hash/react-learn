import React from "react";

const SamForm = () => {
  return (
    <div>
      <h1>Login Page</h1>

      <form>
        <label htmlFor="username">Username:</label>
        <br/>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter Username"
        />

        <br/>
        <br/>

        <label htmlFor="password">Password:</label>
        <br/>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
        />

        <br/>
        <br/>

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <br/>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
        />

        <br/>
        <br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SamForm;