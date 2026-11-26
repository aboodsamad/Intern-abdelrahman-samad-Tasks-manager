import express from "express";

const app = express();
const Port = process.env.Port || 3000;
app.use(express.json());
app.get("/tasks", (req, res) => {
  res.send("hello");
});

app.listen(Port, () => console.log(`Running on http://localhost:${Port}`));
