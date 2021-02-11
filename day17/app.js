`use strict`;

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

const app = express();
const port = process.env.PORTAPP;

const routers = require("./src/router");
const logMorgan = require("./src/middleware/logMorgan");
const errorHandler = require("./src/middleware/errorHandler");

const dsn = process.env.SENTRYDSN;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.use("/api/v1", routers);
app.use(express.static(__dirname + "/public/pages/index"));
app.use(Sentry.Handlers.errorHandler());

errorHandler.forEach((handler) => app.use(handler));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
