import { useState } from 'react'

function Square({value, onSquareClick}) {
  
  return <button className="square" onClick={onSquareClick}>
    {value}
    </button>;
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);

  let status;
  if(winner){
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClcik(i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = "X"
    } else {
      nextSquares[i] = "O"
    }
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }

  return (
    <>
    <div className='status' >{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClcik(0)}/>
        <Square  value={squares[1]} onSquareClick={() => handleClcik(1)}/>
        <Square  value={squares[2]} onSquareClick={() => handleClcik(2)}/>
      </div>
      <div className="board-row">
        <Square   value={squares[3]} onSquareClick={() => handleClcik(3)}/>
        <Square   value={squares[4]} onSquareClick={() => handleClcik(4)}/>
        <Square   value={squares[5]} onSquareClick={() => handleClcik(5)}/>
      </div>
      <div className="board-row">
        <Square   value={squares[6]} onSquareClick={() => handleClcik(6)}/>
        <Square  value={squares[7]} onSquareClick={() => handleClcik(7)}/>
        <Square  value={squares[8]} onSquareClick={() => handleClcik(8)}/>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}