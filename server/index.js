// server.js
import express from "express"
import cors from  "cors"
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv"
dotenv.config({})

const app = express();
app.use(cors());

const PORT = process.env.PORT || 2020

app.get("/api/get-session-token", (req, res) => {
  const uuidToken = uuidv4(); 
  res.json({ uuidToken });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});