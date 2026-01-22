import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let workouts = [];
let proteins = [];

/* WORKOUT */
app.post("/api/workouts", (req, res) => {
  workouts.push(req.body);
  res.json({ success: true });
});

app.get("/api/workouts", (req, res) => {
  res.json(workouts);
});

/* PROTEIN */
app.post("/api/protein", (req, res) => {
  proteins.push(req.body);
  res.json({ success: true });
});

app.get("/api/protein", (req, res) => {
  res.json(proteins);
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
