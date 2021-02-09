`use strict`;

const express = require("express");
const cors = require("cors");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

const app = express();
const port = 3000;

const routers = require("./src/router");
const notFound = require("./src/middleware/notFound");
const logMorgan = require("./src/middleware/logMorgan");
const errorHandler = require("./src/middleware/errorHandler");

const loggerMiddleware = require("./src/middleware/logger");
const caching = require("./src/middleware/cacheRedis");

const dsn = process.env.dsn_key;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const logger = (res, req, next) => {
  next();
};

const logger2 = (res, req, next) => {
  next();
};

Sentry.init({
  dsn: dsn,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),

    new Tracing.Integrations.Express({ app }),
  ],

  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(cors());
app.use(logMorgan);
app.use(caching);

app.use("/api/v1", routers);
app.use(Sentry.Handlers.errorHandler());

errorHandler.forEach((handler) => app.use(handler));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
