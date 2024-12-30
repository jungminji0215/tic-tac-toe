import { use, useState } from "react";

export default function Board() {
  console.log("========== Board 렌더링 ==========");
  const [xIsNext, setXIsNext] = useState(true); // 플레이어 결정하기 위한 불리언 값
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    // 사각형이 이미 채워져 있으면 조기 return
    if (squares[i]) {
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

  /**
   * 참고
   * 리액트에서는 주로 이벤트를 나타내는 prop 에는 onSomething 과 같은 이름을 사용하고
   * 이벤트를 처리하는 함수를 정의 할 때는 handleSomething 과 같은 이름을 사용한다.
   */
  return (
    <>
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

function Square({ value, onSquareClick }) {
  console.log("----- Square 렌더링 -----");

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
