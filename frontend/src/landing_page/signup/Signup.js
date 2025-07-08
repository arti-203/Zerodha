import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    axios.post("http://localhost:3002/signup", { name, email, password })
      .then(() => {
        alert("Signup successful. Please login.");
        window.location.href = "/login";
      })
      .catch((err) => {
        alert(err.response.data || "Error signing up");
      });
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
