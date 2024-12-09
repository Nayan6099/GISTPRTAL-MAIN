import React from "react";

const Signup = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Signup Page</h1>
      <p>Create an account to get started!</p>
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
          style={{ padding: "10px 20px", margin: "5px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
