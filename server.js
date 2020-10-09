const express = require("express");
const helmet = require("helmet");

const db = require("../data/db-config.js");
const ProjectRouter = require("../projects/project-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectRouter);

server.get("/api/tasks", (req, res) => {
    db("tasks")
        .join("")
        .select("")
        .then(tasks => {
            res.status(200).json({ data: tasks });
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
});

module.exports = server;
