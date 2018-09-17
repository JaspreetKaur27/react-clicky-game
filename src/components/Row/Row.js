import React from "react";


const Row = props =>
  
  <div className={`row justify-content-center animated ${props.gameOver ? "shake" : ""}`}>
    {props.children}
  </div>;

export default Row;