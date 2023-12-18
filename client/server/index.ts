import express from "express";
import next from "next";
import chalk from "chalk";

/* Sentry */
import * as Sentry from "@sentry/node";
import config from "./config";
Sentry.init({
  dsn: config.sentry.dsn,
  debug: true,
});

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

const server = express();
const app = next({ dev });

async function start() {
  try {
    await app.prepare();
    const handle = app.getRequestHandler();

    server.get("/error", (req, res, next) => {
      throw new Error("GET /error");
    });

    server.use((req, res, next) => {
      console.log(chalk.white.bgGreen("미들웨어 :: "), req.url);
      next();
    });

    /* Next 기본동작 */
    server.all("*", (req, res) => handle(req, res));

    /* 라우터에서 catch 되지 않은 모든 에러가 여기로 넘어옴 */
    server.use((err, req, res, next) => {
      console.log(chalk.white.bgRed("최종 에러 핸들러 :: "), err.message);
      Sentry.captureException(err);
      res.status(500).send("에러가 발생했어요 500");
    });

    server.listen(port, () => {
      console.log(
        chalk.white.bgGreen("서버 실행 :: "),
        `http://localhost:${port}`,
      );
    });

    process.on("beforeExit", () => {
      console.log(chalk.white.bgRed("beforeExit :: "), "서버 종료 전 callback");
    });

    process.on("exit", () => {
      console.log(chalk.white.bgRed("exit :: "), "서버 종료");
    });

    process.on("SIGINT", () => {
      console.log(chalk.white.bgRed("SIGINT :: "), "서버 수동 종료");
    });

    /* Node 에서 catch 되지 않은 모든 에러 event trigger */
    process.on("uncaughtException", (error) => {
      console.log(chalk.white.bgRed("uncaughtException :: "), error);
    });
  } catch (err) {
    console.log(chalk.white.bgRed("서버 실행 에러 :: "), err);
    process.exit(1);
  }
}

start();
