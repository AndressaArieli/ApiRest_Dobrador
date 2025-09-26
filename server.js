import express, { json, request, response } from "express";

const app = express();
app.use(express.json());
app.use("/dubleviewREST", express.static("public"));

let numbers = [];

app.post("/numbers", (req, res) => {
  const { value } = req.body;
  const dubled = value * 2;
  const id = numbers.length + 1;
  const item = { id, original: value, dubled };
  numbers.push(item);

  res.status(201).json(item);
});

app.get("/numbers", (req, res) => {
  res.json(numbers);
});

app.get("/numbers/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = numbers.find((n) => n.id == id);
  res.json(item);
});

app.listen(3000);
