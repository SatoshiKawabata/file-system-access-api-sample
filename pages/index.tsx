import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "@mui/material";
import { App } from "../src/components/App";

/**
 * ファイルの読み込み
 * 新規作成
 * 更新
 * 削除
 * @returns
 */

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>File System Access API Sample</title>
        <meta name="description" content="File System Access API Sample" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container maxWidth="lg">
          <div>
            <App />
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Home;
