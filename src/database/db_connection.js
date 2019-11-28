const { Pool } = require("pg");

require("env2")("./config.env");

const connectionString = process.env.DATABASE_URL2;

if (!connectionString) {
  throw new Error("Set a DATABASE_URL env variable");
}

module.exports = new Pool({
  connectionString,
  ssl: !connectionString.includes("localhost")
});
