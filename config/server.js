module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  url: env("PUBLIC_URL", "http://app.com:1337"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
