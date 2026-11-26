import express from "express";
import router from "./routes/task.routes.js";

const app = express();
const Port = process.env.Port || 3000;
app.use(express.json());

app.use("/tasks", router);

app.use((req, res, next )=>{
  res.send("you entered a wrong link");
});

app.listen(Port, () => console.log(`Running on http://localhost:${Port}`));
