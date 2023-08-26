import React, { useState, useEffect } from 'react';
import '../components/Register.css'
import { Link } from "react-router-dom";
export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass,setPass]  = useState('');
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
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
     <div className="Form">
    <h1>Register here</h1>
    <form onSubmit={handleSubmit}>
      <label htmlfor="name">Full name</label>
      <input value={name} name="name" placeholder="full Name" ></input>
    <label htmlfor="email">email</label>
   <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
   <label htmlfor="Password">Password</label>
    <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********" id="password" name="password"/>
    <button type="submit">Register</button>
</form>
<button>
  <Link to="/login">
        Already have an account? Login here.</Link>
      </button>
</div>
 </>
  );
};

