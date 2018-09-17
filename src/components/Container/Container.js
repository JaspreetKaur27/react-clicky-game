import React from "react";

// Main container element used to render the player cards
const Container = props =>
  <div className="container">
        {props.children}
  </div>;

export default Container;