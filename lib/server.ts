import express from "express";
import { getPayloadClient } from "./payload";
import { nextApp, nextHandler } from "./next-utils";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "../trpc";

const app = express();

const PORT = Number(process.env.PORT) || 3000;

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({ req, res });

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: { 
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin url ${cms.getAdminURL()}`);
      },
    },
  });

  app.use((req, res) => nextHandler(req, res));

  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext
    })
  );

  nextApp.prepare().then(() => {
    payload.logger.info("Next.js started");
  });

  app.listen(PORT, async () => {
    payload.logger.info(`NEXT.JS URL ${process.env.PUBLIC_NEXT_SERVER_URL}`);
  });
};

start();
