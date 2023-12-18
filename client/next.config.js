/** @type{import('next').NextConfig} */
module.exports = {
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
