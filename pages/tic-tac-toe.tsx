import { Client } from "boardgame.io/react";
import { TicTacToe } from "../games/TicTacToe";
import { TicTacToeBoard } from "../components/TicTacToeBoard";

export default Client({ game: TicTacToe, board: TicTacToeBoard, });
