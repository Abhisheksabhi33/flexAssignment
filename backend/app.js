import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connection from "./database/config.js";
import cors from "cors";
import { userRouter } from "./routes/user.js";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use('/v1/user', userRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Example app listening on port", PORT);
});
