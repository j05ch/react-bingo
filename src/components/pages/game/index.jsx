import styles from './index.module.scss';
import shuffle from "shuffle-array";
import React, {useState, useEffect} from "react";
import content from '../../../data/tileContent';
import Tile from '../../molecules/tile';
import {M, UM, checkForWin, MIDDLE} from "../../../utils/checker";
import Button from "../../atoms/button";

function Game() {
    const [markedTiles, setMarkedTiles] = useState(Array(25).fill(UM));

    useEffect(() => {
        mark(MIDDLE);
    }, []);

    useEffect(() => {
        // check here for win and do something with it:
            console.log("WINNER: ", checkForWin(markedTiles));
        }
        , [markedTiles]);

    const [data, setData] = useState(shuffle(content).reduce(
        (data, value, index) => ({...data, [index]: value}),
        {}
    ));

    function mark(id) {
        const marked = [...markedTiles];
        marked[id] = 'marked';
        setMarkedTiles(marked);
    }

    function resetGame() {
        setMarkedTiles(Array(25).fill(UM));
    }

    return (
        <div className={styles.game}>

            <h1>Bingo</h1>
            <div className={styles.wrapper}>
                {Object.keys(data).map(id => {
                        const isSet = id === MIDDLE.toString() || markedTiles[id] === M;
                        return <Tile key={id + data} id={id} mark={mark} isSet={isSet}
                        >
                            {data[id]}
                        </Tile>
                    }
                )}
            </div>

            <Button label={"Reset"} onClick={resetGame} />
            {/*<button className={styles.btn}>Reset</button>*/}
        </div>
    );
}

export default Game;
