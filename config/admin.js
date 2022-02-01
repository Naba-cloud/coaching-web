module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '87e98ea8ca30c00cd7c8f7b1a9329051'),
  },
});
