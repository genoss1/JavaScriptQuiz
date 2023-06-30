import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import playerRoutes from "./player.route";
import cors from "cors";
dotenv.config();

const mongoUrl = process.env.DB_URL;

mongoose.connect(mongoUrl ?? "");
const database = mongoose.connection;

database.on("error", (error: any) => {
  console.log(error);
});

database.once("connected", async () => {
  console.log("Database Connected");
});

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/player", playerRoutes);

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
