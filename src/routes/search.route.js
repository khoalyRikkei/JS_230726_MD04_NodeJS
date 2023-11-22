const express = require("express");

app.get("/api/search", (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: "khong tim thay" });
  }

  const results = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  res.json(results);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
