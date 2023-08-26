import React from 'react'
import './Textsec.css';
// import {Login}  from '../routes/Login';
// import {Register } from '../routes/Register';
import { Link } from "react-router-dom";
import home1 from '../HomepageImages/cat.jpg';
import home2 from '../HomepageImages/fish.jpg';
import home4 from '../HomepageImages/dog.jpg';
import home3 from '../HomepageImages/petShop.avif';
const Textarea = () => {
  return (
    <>
    <div className='text'>
      <h1>Lovely</h1>
      <h1> Aquarium </h1>
      <h1>and Pet Shop</h1>
    </div>

      <div className='LR'>
        <li className="e1">
         <Link to="/login">Login</Link>
       </li>
       <li className="e1">
       <Link to="/register">Register</Link>
       </li>
      </div>
    <div className='ImgBox'>
      <div className='ImgBox1'>
        <img id='img1'src={home1} alt="HOME1" />
        <img id='img2'src={home2} alt="HOME2" />
        </div>
        <div className="ImgBox2">
        <img id='img3'src={home3} alt="HOME3" />
        <img id='img4'src={home4} alt="HOME4" />
        </div>
        </div>
 
    </>
  );
};

export default Textarea;
