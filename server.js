import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "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";

app.post("/chat", async (req, res) => {
  const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req.body)
  });

  const data = await r.json();
  res.json(data);
});

app.listen(10000);
