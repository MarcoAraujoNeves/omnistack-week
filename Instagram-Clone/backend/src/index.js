const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const routes = require("./routes");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect(
    "INSERT_MONGODB_CONNECTION",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use((request, response, next) => {
    request.io = io;
    next();
});

app.use(cors());
app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);
app.use(routes);

server.listen(3333);
