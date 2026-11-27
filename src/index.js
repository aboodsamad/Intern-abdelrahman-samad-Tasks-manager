import express from "express";
import router from "./routes/task.routes.js";

const app = express();
const Port = process.env.PORT || 3000;
app.use(express.json());

app.use("/tasks", router);

app.use((req, res) => {
  res.status(404).json({error : "Route Not Found"});
});

app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ message: "Invalid JSON body" });
  }
  const status = err.statusCode || 500;
  res.status(status).json({ message: err.message || "Server error" });
});
app.listen(Port, () => console.log(`Running on http://localhost:${Port}`));
