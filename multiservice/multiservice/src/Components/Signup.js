import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="signup-page">
      <h1 class='h1'>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input  class='input' type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input class='input'  type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  }
export default Signup;
