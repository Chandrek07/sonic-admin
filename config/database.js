// path: ./config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "dpg-d2bmscvdiees73etu700-a.oregon-postgres.render.com"
      ),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "renderdb_cmii"),
      user: env("DATABASE_USERNAME", "renderdb_cmii_user"),
      password: env("DATABASE_PASSWORD", "fMZyH8CYLPKITgIFDe1kxufQUFajl3dz"),
      ssl: env.bool("DATABASE_SSL", true)
        ? { rejectUnauthorized: false }
        : false,
    },
  },
});
