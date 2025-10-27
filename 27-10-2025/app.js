const express = require("express");
const app = express();
app.use(express.json());

let data = {};

// GET all accounts
app.get("/account", (req, res) => res.json(data));

// POST add account
app.post("/addaccount", (req, res) => {
  const body = req.body;
  data[body.id] = body;
  res.json({ message: "Account added", data });
});

// PUT update account
app.put("/account/:id", (req, res) => {
  const id = req.params.id;
  if (!data[id]) return res.status(404).json({ error: "Not found" });
  data[id] = req.body;
  res.json({ message: "Account updated", data });
});

// DELETE account
app.delete("/account/:id", (req, res) => {
  const id = req.params.id;
  delete data[id];
  res.json({ message: "Deleted", data });
});

app.listen(3000, () => console.log("API running on port 3000"));
