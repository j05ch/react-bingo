import React from 'react';
import styles from './index.module.scss';



function Tile({ id, children, onToggle, isSet }) {
    const myStyles = isSet ? `styles['tile--set']` : styles.tile;
    
      return (
        <div onClick={onToggle} className={myStyles}>
          {children}
        </div>
      );
    }
    export default Tile;