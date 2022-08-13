import express, { json } from "express"
import { router } from "./routes/router";

const app = express();

app.use(json());

app.use(router);

app.listen("3000", ()=> console.log("server is running at http://localhost:3000"))