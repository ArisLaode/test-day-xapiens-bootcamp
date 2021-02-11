const express = require("express");
const {ApolloServer} = require("apollo-server-express");
const {typeDefs, resolvers} = require("./src/schema/index");
require("dotenv").config();

const app = express();
app.use(express.json());

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        endpoint: "/graphql",
    },
});

server.applyMiddleware({app});

app.listen({port: process.env.PORTAPP}, () =>
    console.log("App run to http://localhost:3000")
);