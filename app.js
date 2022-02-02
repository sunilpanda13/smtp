const express = require("express");
const { port } = require("./config/env.config");
const app = express();

app.use(express.json());

app.use("/api", require("./routes/routes"));

app.use("/", () => {
    console.log("Listening on port: " + port); 
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});