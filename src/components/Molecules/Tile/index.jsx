import React from 'react';
import styles from './index.module.scss';



function Tile({ id, children, mark, isSet }) {
    const myStyles = isSet ? styles.tileset : styles.tile;
    console.log(isSet); 
    
      return (
        <div onClick={mark} className={myStyles}>
          {children}
        </div>
      );
    }
    export default Tile;