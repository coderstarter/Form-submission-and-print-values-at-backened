const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8800;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cors());

app.get("/form", (req, res) => {
    console.log(req.query);
    console.log(req.url);
    res.end("Received");
})

app.post("/form", (req, res) => {
    console.log(req.body);
    res.end("Received");
})

app.listen(port, () => {
    console.log(`app listening at given port number : http://localhost:${port}`);
})