/* Sentry */
import * as Sentry from "@sentry/node";
import config from "./config";
import { Request } from "express";

console.log(typeof window === "undefined" ? "server" : "client", "sentry init");

Sentry.init({
  dsn: config.sentry.dsn,
  debug: config.isDev,
  environment: process.env.NODE_ENV,
  beforeSend(event) {
    console.log("@@@ beforeSend @@@");
    return event;
  },
});
export function captureException(err: Error, req: Request) {
  Sentry.withScope((scope) => {
    // scope.setExtra("req", req);
    scope.setUser({
      username: "kong",
    });
    scope.setLevel("warning");
    scope.setTags({
      url: req.url,
      method: req.method,
    });

    scope.setContext("character", {
      id: 1,
      username: "KING-KONG",
      email: "livemehere@gmail.com",
      job: "developer",
    });

    // scope.addAttachment({
    //   filename: "error.txt",
    //   data: "error data",
    // });

    Sentry.captureException(err);
  });
}
