import React from "react";
import './stile.css';
import {BsFillCartFill,BsSliders} from 'react-icons/bs'
import {FontAwesomeIcon} from 'react-icons';
import { useState } from "react";
const Navbar = ({ setShow, size }) => {
  
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Store
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <BsFillCartFill></BsFillCartFill>
          </span>
          <span id="siz">{`${size}`}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;