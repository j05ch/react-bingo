import styles from './index.module.scss';
import shuffle from "shuffle-array";
import React, {useState, useEffect} from "react";
import content from '../../../data/tileContent';
import Tile from '../../molecules/tile';
import {M, UM, checkForWin, MIDDLE} from "../../../utils/checker";
import Button from "../../atoms/button";

function Game() {
    const [markedTiles, setMarkedTiles] = useState(Array(25).fill(UM));
    const [data, setData] = useState(shuffle(content).reduce(
        (data, value, index) => ({...data, [index]: value}),
        {}
    ));
    const [state, setState] = useState(3);
    const [bingos, setBingos] = useState([]);

    useEffect(() => {
        const tempArr = [...markedTiles];
        tempArr[MIDDLE] = M;
        setMarkedTiles(tempArr);
        setData({...data, [MIDDLE]: 'Some text'})
    }, []);

    useEffect(() => {
            const checked = checkForWin(markedTiles);
            // If there is a new bingo you should fire your confetti or whatever
            console.log("NEW BINGO: ", !arrayEquals(checked, bingos));
            setBingos(checked);
        }
        , [markedTiles]);

    function arrayEquals(a, b) {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

    function mark(id) {
        const marked = [...markedTiles];
        marked[id] = 'marked';
        setMarkedTiles(marked);
    }

    function resetGame() {
        const tempArr = Array(25).fill(UM);
        tempArr[MIDDLE] = M;
        setMarkedTiles(tempArr);
        const tempData = shuffle(content).reduce(
            (data, value, index) => ({...data, [index]: value}),
            {}
        );
        setData({...tempData, [MIDDLE]: 'Some text'});
        setBingos([]);
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

            <Button label={"Reset"} onClick={resetGame}/>
        </div>
    );
}

export default Game;
