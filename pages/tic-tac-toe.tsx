import React from "react";
import { Client } from "boardgame.io/react";
import { TicTacToe } from "../games/TicTacToe";
import { TicTacToeBoard } from "../components/TicTacToeBoard";
import { SocketIO } from "boardgame.io/multiplayer";

export const getInitialProps = () => ({
  playerID: "0"
})

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: SocketIO(),
});

const TicTacToePage: React.FunctionComponent = () => {
  return <TicTacToeClient playerID="0"/>
}

export default TicTacToePage;
