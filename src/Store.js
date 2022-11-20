import React, { useState } from "react";
import list from "./data";
import Cards from "./Card";
import './stile.css'
import {BsSliders} from 'react-icons/bs'

const Amazon = ({ handleClick }) => {
  const[search,setSearch]=useState('')
  return (
    <section>
      <div id="input"> <label> <input type="text" placeholder="search for books" onChange={(e)=>setSearch(e.target.value)}/><BsSliders id="filter"></BsSliders></label></div> 
      {list.filter(items=>items.title.includes(search)).map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      )
      )
        
      }
    </section>
  );
};

export default Amazon;