const { withSentryConfig } = require("@sentry/nextjs");

/** @type{import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: "/ourfield",
        destination: "/ourfield/social-ground",
        permanent: false,
      },
    ];
  },
};

const SentryWebpackPluginOptions = {};

module.exports = withSentryConfig(nextConfig, SentryWebpackPluginOptions);
