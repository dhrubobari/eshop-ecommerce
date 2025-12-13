const express = require('express');
const router = express.Router();
const User = require("./user.model");

// Register endpoint
router.get("/", async (req, res) => {
    res.send("Registration routes");
});

router.post("/register", async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = router;
