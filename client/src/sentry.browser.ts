import * as Sentry from "@sentry/react";
import config from "@/config";
export function sentryBrowserInit() {
  Sentry.init({
    dsn: config.sentry.dsn,
    integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
    debug: true,
  });

  Sentry.configureScope((scop) => {
    scop.setUser({
      username: "HA",
    });
  });
}
