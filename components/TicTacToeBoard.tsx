import React, { useMemo } from 'react';
import { BoardProps } from "boardgame.io/react";
import { TicTacToeState } from "../games/TicTacToe";
import { range } from "../utils";

export const TicTacToeBoard: React.FunctionComponent<BoardProps<TicTacToeState>> = (props) => {
  const winner = useMemo(() => {
    if (props.ctx.gameover) {
      return props.ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {props.ctx.gameover.winner}</div>
        ) : (
          <div id="winner">Draw!</div>
        );
    }
  }, [props.ctx.gameover]);

  return (
    <div>
      <table id="board">
        <tbody>
        {range(3).map((i) => (
          <tr key={i}>{range(3).map((j) => {
            const id = i * 3 + j;
            return <td key={j} style={{
              border: '1px solid #555',
              width: '50px',
              height: '50px',
              lineHeight: '50px',
              textAlign: 'center',
            }} onClick={() => props.moves.clickCell(id)}>{(props.G.cells as TicTacToeState["cells"])[id]}</td>;
          })}</tr>
        ))}
        </tbody>
      </table>
      {winner}
    </div>
  );
}
