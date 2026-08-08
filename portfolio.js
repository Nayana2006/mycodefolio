const express = require("express");

const router = express.Router();

router.get("/portfolio", (req, res) => {
  res.json({
    message: "Portfolio API Working"
  });
});

module.exports = router;