require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    host: process.env.DBHOST,
    dialect: process.env.DBDIALECT, // untuk default port 5432
    port: process.env.DBPORT, // untuk custom port
    logging: false,
  },
  test: {
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    host: process.env.DBHOST,
    dialect: process.env.DBDIALECT, // untuk default port 5432
    port: process.env.DBPORT, // untuk custom port
    logging: false,
  },
  production: {
    username: process.env.DBUSERPROD,
    password: process.env.DBPASSWORDPROD,
    database: process.env.DBNAMEPROD,
    host: process.env.DBHOSTPROD,
    dialect: process.env.DBDIALECTPROD, // untuk default port 5432
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    port: process.env.DBPORTPROD, // untuk custom port
    logging: false,
  },
};
