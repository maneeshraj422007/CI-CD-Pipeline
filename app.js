const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("CI/CD Pipeline is Working Successfully!");
});

app.get("/health", (req, res) => {
    res.json({
        status: "success",
        message: "Application is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});