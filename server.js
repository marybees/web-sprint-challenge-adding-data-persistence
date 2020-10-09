const express = require("express");
const helmet = require("helmet");

const db = require("./data/db-config.js");
const ProjectRouter = require("./projects/project-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api", ProjectRouter);

server.get("/api", (req, res) => {
  db("projects")
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// server.get("/api/projects/:id/resources", (req, res) => {
//   db("resources")
//     .then((resources) => {
//       res.status(200).json(resources);
//     })
//     .catch((error) => {
//       res.status(500).json(error);
//     });
// });

// server.get("/api/projects/:id/tasks", (req, res) => {
//   db("tasks")
//     .then((tasks) => {
//       res.status(200).json(tasks);
//     })
//     .catch((error) => {
//       res.status(500).json(error);
//     });
// });

module.exports = server;
