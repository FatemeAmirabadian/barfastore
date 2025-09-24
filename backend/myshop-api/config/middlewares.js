module.exports = [
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:1337", "http://localhost:3000"],
    },
  },
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
