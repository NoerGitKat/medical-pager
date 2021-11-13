import express, { Application, ErrorRequestHandler } from "express";
import { getIndex } from "./controllers/index/get-index";

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", getIndex);

try {
  app.listen(PORT, (): void => {
    console.log(`Application is running on  port: ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
