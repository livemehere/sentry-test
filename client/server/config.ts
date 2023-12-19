import "dotenv/config";

const config = {
  sentry: {
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },
  isDev: process.env.NODE_ENV !== "production",
  isProd: process.env.NODE_ENV === "production",
};

export default config;
