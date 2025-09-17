// backend/index.js
const express = require("express");
const app = express();
app.use(express.json());

// Simple /parse stub for later (Mistral)
app.post("/parse", (req, res) => {
  const { prompt = "" } = req.body;
  console.log("[parse] prompt:", prompt);
  // Temporary simple parser: split by spaces, pick 2 words as "styles"
  const words = prompt.toLowerCase().split(/\s+/).filter(Boolean);
  const styles = words.slice(0, 2);
  res.json({ styles: styles.length ? styles : ["casual", "cool"] });
});

// /outfit returns an items[] array (dummy catalog). Later replace with Mistral+Firecrawl.
app.post("/outfit", (req, res) => {
  const { prompt = "", player } = req.body;
  console.log("[outfit] prompt:", prompt, "player:", player);

  // Fake items — use real assetId if you have one; placeholder images ok for demo
  const items = [
    {
      name: "Cyberpunk Mask",
      price: 120,
      image: "https://via.placeholder.com/180x180.png?text=Cyber+Mask",
      assetId: 12345678
    },
    {
      name: "Ninja Sword",
      price: 250,
      image: "https://via.placeholder.com/180x180.png?text=Ninja+Sword",
      assetId: 87654321
    },
    {
      name: "Stealth Boots",
      price: 75,
      image: "https://via.placeholder.com/180x180.png?text=Boots",
      assetId: 11223344
    }
  ];

  // Return as JSON payload expected by Roblox
  res.json({ items });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
