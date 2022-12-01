import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import Grid from "./components/Grid";
import Overlay from "./components/Overlay";

export default function App() {
  let [gridSize, setGridSize] = useState(2);
  let [curColumn, setColumn] = useState(0);
  let [curRow, setRow] = useState(0);
  let [noOfMoves, setMoves] = useState(0);
  let [movedTo, setMovedTo] = useState('');

  let [gameStarted, setStartGame] = useState(false);
  let [winner, setWinner] = useState(false);

  useEffect(() => {
    setStartGame(false);
    setColumn(0);
    setRow(0);
    setMoves(0)
  }, [gridSize]);

  useEffect(() => {
    console.log([curRow, curColumn]);
    setMovedTo(`The player jumped to [${curRow}, ${curColumn}]`);
    if (curRow === gridSize - 1 && curColumn === gridSize - 1) {
      console.log("winner", curRow, curColumn);
      document.removeEventListener("keydown", onKeyDown);
      setWinner(true);
    }
  }, [curRow, curColumn]);

  const startGame = () => {
    setStartGame(true);
    setColumn(0);
    setRow(0);
    setMoves(0);
    setWinner(false)
    document.addEventListener("keydown", onKeyDown);
  };
  const onKeyDown = (e) => {
    let key = e.keyCode;
    if (['37', '38', '39', '40', 37, 38, 39, 40].includes(key)) {
      // if left - 37
      if (key == "37" && curColumn !== 0) {
        setColumn((col) => col - 1);
      }
      // if up - 38
      else if (key == "38" && curRow !== 0) {
        setRow((row) => row - 1);
      }

      // if right - 39
      else if (key == "39" && curColumn !== gridSize - 1) {
        setColumn((col) => col + 1);
      }

      // if down - 40
      else if (key == "40" && curRow !== gridSize - 1) {
        setRow((row) => row + 1);
      };
      setMoves(moves => moves + 1)
    }
  };
  const onSelectGridSize = (e) => {
    setGridSize(e.target.value);
  };
  return (
    <div className="App">
      <Dropdown onChange={onSelectGridSize} />

      <button onClick={startGame}>Start Game</button>

      {gameStarted && (
        <> <Grid gridSize={gridSize} curRow={curRow} curColumn={curColumn} />
          <p className="moves">{movedTo}</p>
          <p className="">Moves: {noOfMoves}</p>

          {!winner && <p className="pop">Winner</p>}</>
      )}

    </div>
  );
}
