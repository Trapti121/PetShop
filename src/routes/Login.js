import React, { useState, useEffect } from 'react';
import '../components/Login.css';
import { Link } from "react-router-dom";
export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  useEffect(() => {
    // Add the 'login-body' class to the body element
    document.body.classList.add('login-body');

    // Clean up the class on component unmount
    return () => {
      document.body.classList.remove('login-body');
    };
  }, []);

  return (
    <>
      <div className="Box">
        <div className="Form">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
            <label htmlFor="password">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
            <button type="submit">Log In</button>
          </form>
          <button>
          <Link to="/register">Don't have an account? Register here.</Link>
         </button>
        </div>
      </div>
    </>
  );
};


