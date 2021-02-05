"use strict";

const express = require("express");
const log_morgan = require("./src/middlewares/morganLog");
const error_handling_500 = require("./src/middlewares/errorHandling500");
const error_handling_404 = require("./src/middlewares/errorHandling404");
const cors = require("cors");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const app = express();

const PORT = 3000;
const routers = require("./src/routers");

Sentry.init({
  dsn: process.env.dsn_key,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(log_morgan);
app.use("/api/v1", routers);
app.use(Sentry.Handlers.errorHandler());
app.use(error_handling_500);
app.use(error_handling_404);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
