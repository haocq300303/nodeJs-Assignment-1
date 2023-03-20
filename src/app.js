import express from "express";
import dotenv from "dotenv";
import routerUser from "./routes/users.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api", routerUser);

app.listen(process.env.PORT, () => {
  console.log(`listening to port ${process.env.PORT}`);
});
