import dotenv from "dotenv";
import path from "path";
import payload from "payload";
import type { InitOptions } from "payload/config";


dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

interface Params {
  initOptions?: Partial<InitOptions>;
}

export const getPayloadClient = async ({ initOptions }: Params = {}) => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error("Missing Payload Secret");
  }

  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }

  try {
    cached.client = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.client;
};
