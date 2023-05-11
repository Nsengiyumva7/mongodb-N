import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './log.css';

export const Adminlogin = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("/api/loginn", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("token", data.token);
        alert('ok')
        navigate("/dashboard");
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Login failed");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred while logging in.");
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="youremail@gmail.com"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Adminlogin;