const express = require("express");

const router = express.Router();

router.get("/shop", (req, res) => {
    res.send("hello world amirali eidivandi good");
});

module.exports = router;
