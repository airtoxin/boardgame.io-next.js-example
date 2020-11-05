import Link from 'next/link'
import Layout from '../components/Layout'
import { Lobby } from "boardgame.io/react";
import { TicTacToe } from "../games/TicTacToe";
import { TicTacToeBoard } from "../components/TicTacToeBoard";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <Lobby
      gameServer={`http://localhost:8000`}
      lobbyServer={`http://localhost:8000`}
      gameComponents={[
        { game: TicTacToe, board: TicTacToeBoard }
      ]}
    />;
  </Layout>
)

export default IndexPage
