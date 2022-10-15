import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";

const app: express.Application = express();
const address: string = "0.0.0.0:8080";
 


app.use(bodyParser.json());
app.use(cors({
  "allowedHeaders": [
    'Origin', 'X-Requested-With',
    'Content-Type', 'Accept',
    'X-Access-Token', 'Authorization', 'Access-Control-Allow-Origin',
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Methods'
  ],
  "methods": 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  "preflightContinue": true,
  "origin": '*',
}));
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

/*app.get("/", cors(), function (req: Request, res: Response) {
  res.send("API is running...");
});

*/
app.get("/", function (req: Request, res: Response) {
  res.send("API is running...");
});


app.listen(8080, function () {
  console.log(`starting app on: ${address}`);
});
