import styles from './index.module.scss';
import shuffle from "shuffle-array";
import React, { useState, useEffect } from "react";
import content from '../../../Data/tileContent';
import Tile from '../../Molecules/Tile';

function Game() {
 
  
 // const [markedTiles, setMarkedTiles] = useState([]);
  const m = 'marked';

  
  
  const markedTiles = Array(25).fill('unmarked');
  
  markedTiles[5] = m;
  markedTiles[6] = m;
  markedTiles[7] = m;
  markedTiles[8] = m;
  markedTiles[9] = m;
  
  function checkForWin(arr) {
      return checkHorizontal(arr)
              || checkVertical(arr)
              || checkDiagonal(arr);
  }
  
  function checkHorizontal(arr) {
      let win = false;
      for(let i = 0; i < 21; i = i + 5) {
          if (
              arr[i] === m 
              && arr[i + 1] === m 
              && arr[i + 2] === m 
              && arr[i + 3] === m 
              && arr[i + 4] === m
              ) {
                  win = true;
              }
      }
  
      return win;
  }
  
  function checkVertical(arr) {
      let win = false;
      for(let i = 0; i < 5; i++) {
          if (
              arr[i] === m 
              && arr[i + 5] === m 
              && arr[i + 10] === m 
              && arr[i + 15] === m 
              && arr[i + 20] === m
              ) {
                  win = true;
              }
      }
  
      return win;
  }
  
  function checkDiagonal(arr) {
      return (
              arr[0] === m 
              && arr[6] === m 
              && arr[12] === m 
              && arr[18] === m 
              && arr[24] === m
              )
              || (
                  arr[4] === m 
                  && arr[8] === m 
                  && arr[12] === m 
                  && arr[16] === m 
                  && arr[20] === m
                  )
  }
  
  
  const [data, setData]=useState(shuffle(content).reduce(
    (data, value, index) => ({ ...data, [index]: value }),
    {}
  ));

  function mark(id) {
    const marked = [...markedTiles];
    marked[id] = 'marked';
    
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