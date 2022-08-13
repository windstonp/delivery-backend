import express, { json, NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes/router";

const app = express();

app.use(json());

app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction)=>{
  console.log(error);
  if(error instanceof Error){
    return response.status(400).json({
      message: error.message
    })
  }

  return response.status(500).json({
    message: "Internal server error!"
  })
})

app.listen("3000", ()=> console.log("server is running at http://localhost:3000"))