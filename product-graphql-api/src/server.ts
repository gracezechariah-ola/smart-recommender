import { ApolloServer } from "@apollo/server";

import express, { type Express } from "express";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import bodyParser from "body-parser";

import { config } from "./config/config";
import { typeDefs } from "./graphs/schema";
import { resolvers } from "./graphs/resolvers";


async function StartGQLServer() {
  const app: Express = express();


  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true
  });


  await server.start();


  // CORS config: allow frontend origin
  app.use(
    "/graphql",
    cors({
      origin: "http://localhost:3000",
      credentials: true
    }),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ req })
    })
  );

  const PORT = 4000;    //config.server.port;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });



}


StartGQLServer();


