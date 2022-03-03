const express = require("express");

const router = express.Router();

router.get("/shop", (req, res) => {
    res.send("hello welcome to shop");
});

module.exports = router;
