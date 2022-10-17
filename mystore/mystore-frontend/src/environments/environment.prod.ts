import * as dotenv from "dotenv";

dotenv.config();
export const environment = {
  production: false,
  apiServer: process.env["API_SERVER"]
  };