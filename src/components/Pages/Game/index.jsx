import styles from './index.module.scss';
import shuffle from "shuffle-array";
import React, { useState, useEffect } from "react";
import content from '../../../Data/tileContent';
import Tile from '../../Molecules/Tile';

function Game() {
  
  const [markedTiles, setMarkedTiles] = useState([]);
  const [data, setData]=useState(shuffle(content).reduce(
    (data, value, index) => ({ ...data, [index]: value }),
    {}
  ));

  function mark(id) {
    const marked = [...markedTiles];
    marked[id] = 'marked';
    setMarkedTiles(marked);
}
    
      
  
  
  return (
    <div className={styles.game}>
      
      <h1>Bingo</h1>
      <div className={styles.wrapper}>
      {Object.keys(data).map(id => {
                    const isSet = markedTiles[id] === 'marked';
                    return <Tile key={id + data} id={id} mark={mark} isSet={isSet}
                    >
                        {data[id]}
                    </Tile>
                }
                )}
      </div>
      
      <button className={styles.btn}>Reset</button>
    </div>
  );
  
}

export default Game;