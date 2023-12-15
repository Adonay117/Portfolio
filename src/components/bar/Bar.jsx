import React from "react";
import './Bar.css';

export default function Bar(){
    return(
<>
  <input type="checkbox" id="checkbox" />
  <label htmlFor="checkbox" className="toggle">
    <div className="bar bar--top"></div>
    <div className="bar bar--middle"></div>
    <div className="bar bar--bottom"></div>
  </label>
</>



    )
}