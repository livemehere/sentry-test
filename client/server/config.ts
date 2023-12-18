import "dotenv/config";

const config = {
  sentry: {
    dsn: process.env.SENTRY_DSN,
  },
};

export default config;
