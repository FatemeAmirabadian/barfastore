// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
// });
module.exports = ({ env }) => {
  const port = env.int('PORT') || 1337; // اگر متغیر محیطی نبود، پیش‌فرض لوکال
  const host = '0.0.0.0';

  console.log('🚀 Strapi will run on port:', port);

  return {
    host,
    port,
    app: {
      keys: env.array('APP_KEYS'),
    },
  };
};
