// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     axios.post("http://localhost:3002/login", { email, password })
//       .then((res) => {
//         alert("Login successful");
//         localStorage.setItem("token", res.data.token);
//         // Redirect to dashboard page or reload
//         window.location.href = "/dashboard";
//       })
//       .catch((err) => {
//         alert(err.response.data || "Error logging in");
//       });
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
