import express from "express";
import next from "next";
import chalk from "chalk";

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

const server = express();
const app = next({ dev });

async function start() {
  try {
    await app.prepare();
    const handle = app.getRequestHandler();
    server.all("*", (req, res) => handle(req, res));
    server.listen(port, () => {
      console.log(
        chalk.white.bgGreen("서버 실행 :: "),
        `http://localhost:${port}`,
      );
    });
  } catch (err) {
    console.log(chalk.white.bgRed("서버 실행 에러 :: "), err);
  }
}

start();
