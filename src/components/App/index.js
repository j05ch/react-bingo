
import './app.scss';
import shuffle from "shuffle-array";
import React, { useState, useEffect } from "react";

function App() {
    function Tile({ id, children, onToggle, isSet }) {
        return (
          <div onClick={onToggle} className={`tile ${isSet ? "tile--set" : ""}`}>
            {children}
          </div>
        );
      }
      
      const content = [
        "Great success",
        "User engagement",
        "Kodiak",
        "Huge kudos to X",
        "Suboptimal",
        "Learning experience ",
        "Personalized learning",
        "Super excited ",
        "Funnel",
        "OKRs",
        "Highest company priority ",
        "It’s only a test",
        "Operate like a startup",
        "Keeping the momentum",
        "The results look promising",
        "Initial signals",
        "Can’t wait to share results ",
        "Significant increase ",
        "High quality content",
        "Keep product consistent ",
        "Data driven ",
        "Glorious X team",
        "Allocate resources ",
        "Alignment between X and Y",
        "Happy to announce"
      ];
      
      const data = shuffle(content).reduce(
        (data, value, index) => ({ ...data, [index]: value }),
        {}
      );
  
  return (
    <div className="App">
      
      <h1>Bingo</h1>
      <div className="wrapper">
        {Object.keys(data).map(id => (
          <Tile
          >
            {data[id]}
          </Tile>
        ))}
      </div>
      <button className='btn'>Reset</button>
    </div>
  );
}

export default App;