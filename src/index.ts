import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Database connected")); //db connection

const app = express(); //initialize a server
app.use(express.json()); //to convert the request body of api's into json
app.use(cors());

app.get("/health", (req: Request, res: Response) => {
  res.send({ message: "Health OK!" });
});

app.use("/api/my/user", myUserRoute);

app.listen(8000, () => console.log("Server started on localhost: 8000")); //to listen the server
