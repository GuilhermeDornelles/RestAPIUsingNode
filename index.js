require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const routes = require("./routes/routes");
const games = require("./routes/games");

app.use("/api", routes, games);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
