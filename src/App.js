import './App.css';
import "./index.css";
import React, {useState} from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Categories from "./routes/Categories";
import Contact from "./routes/Contact";
import { Route, Routes } from 'react-router-dom';
import { Login } from './routes/Login';
import { Register } from './routes/Register';
function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  
  return (
    <>
    {/* <div className='LR'>
      {
    currentForm === "login"? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
      <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
      </Routes>
    </>
  );
}

export default App;
