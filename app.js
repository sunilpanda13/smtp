const express = require("express");
const { port } = require("./config/env.config");
const app = express();

app.use(express.json());

app.use("/api", require("./routes/routes"));

app.use("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the API"
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});