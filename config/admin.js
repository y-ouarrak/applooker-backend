module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f52298d470c05879b70aa9ad096aaa4a'),
  },
});
