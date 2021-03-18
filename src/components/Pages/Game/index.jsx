import styles from './index.module.scss';
import shuffle from "shuffle-array";
import React, { useState, useEffect } from "react";
import content from '../../../Data/tileContent';
import Tile from '../../Molecules/Tile';

function Game() {
  


      
      
      
      const data = shuffle(content).reduce(
        (data, value, index) => ({ ...data, [index]: value }),
        {}
      );
  
  return (
    <div className={styles.game}>
      
      <h1>Bingo</h1>
      <div className={styles.wrapper}>
        {Object.keys(data).map(id => (
          <Tile
          >
            {data[id]}
          </Tile>
        ))}
      </div>
      <button className={styles.btn}>Reset</button>
    </div>
  );
}

export default Game;