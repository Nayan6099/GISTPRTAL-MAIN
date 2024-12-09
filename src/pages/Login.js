import React from "react";

const Login = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Login Page</h1>
      <p>Welcome! Please log in to access your account.</p>
      <form>
        <input 
          type="text" 
          placeholder="Username" 
          style={{ padding: "10px", margin: "5px", width: "200px" }} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          style={{ padding: "10px", margin: "5px", width: "200px" }} 
        />
        <button 
          type="submit" 
          style={{ padding: "10px 20px", margin: "5px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px" }}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
