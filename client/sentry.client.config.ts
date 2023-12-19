import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [new Sentry.Replay()],
  debug: true,
});
