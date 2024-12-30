import { use, useState } from "react";

export default function Board() {
  console.log("========== Board 렌더링 ==========");
  const [xIsNext, setXIsNext] = useState(true); // 플레이어 결정하기 위한 불리언 값
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    // 사각형이 이미 채워져 있으면 조기 return || 승부가 결정 났으면 return
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice(); // squares 배열의 사본 생성(불변성을 위해서)
    console.log("nextSquares :>> ", nextSquares);

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  /**
   * 참고
   * 리액트에서는 주로 이벤트를 나타내는 prop 에는 onSomething 과 같은 이름을 사용하고
   * 이벤트를 처리하는 함수를 정의 할 때는 handleSomething 과 같은 이름을 사용한다.
   */
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
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
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Square({ value, onSquareClick }) {
  console.log("----- Square 렌더링 -----");

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
