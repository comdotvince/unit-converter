import express from "express";
import convertRouter from "./routes/convert.js";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/api", convertRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
