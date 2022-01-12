import express from "express";
import morgan from "morgan";
import dbConnection from "./config/dbConnection.js";
import dotenv from "dotenv";
import subRoute from "./routes/subRoutes.js"

dotenv.config();

const app = express();

dbConnection();

app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));

app.use("/api/subscribe/", subRoute);

// root route
app.get("/", (req, res) => {
  res.json({ duls_online_store: "Welcome to love-tech" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
