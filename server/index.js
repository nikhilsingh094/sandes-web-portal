// server.js
import express from "express"
import cors from  "cors"
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(cors());

app.get("/api/get-session-token", (req, res) => {
  const sessionToken = uuidv4(); // simulate session
  res.json({ sessionToken });
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});