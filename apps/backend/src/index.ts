import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => console.log(`[SERVER] : Listening on port ${PORT}`));
