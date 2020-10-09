const express = require("express");

const Projects = require("./project-model.js");

const router = express.Router();

// Projects

router.get("/projects", (req, res) => {
  Projects.getAll()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/projects/:id", (req, res) => {
  const { id } = req.params;

  Projects.getById(id)
    .then((project) => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get project" });
    });
});

router.post("/projects", (req, res) => {
  const projectData = req.body;

  Projects.add(projectData)
    .then((project) => {
      res.status(201).json({ created: project });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

router.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.update(id, changes)
    .then((count) => {
      if (count) {
        res.json({ update: count });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update project" });
    });
});

router.delete("/porjects/:id", (req, res) => {
  const { id } = req.params;

  Projects.remove(id)
    .then((count) => {
      if (count) {
        res.json({ removed: count });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete project" });
    });
});

// Resources

router.get("/resources", (req, res) => {
  Projects.getAllResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

router.get("/projects/:id/resources", (req, res) => {
  Projects.getProjectResources(req.params.id)
    .then((resources) => {
      res.status(200).json({ data: resources });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/resources", (req, res) => {
  const resourceData = req.body;

  Projects.addResource(resourceData)
    .then((resource) => {
      res.status(201).json({ created: resource });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

// Tasks

router.get("/tasks", (req, res) => {
  Projects.getAllTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

router.get("/projects/:id/tasks", (req, res) => {
  Projects.getProjectTasks(req.params.id)
    .then((tasks) => {
      res.status(200).json({ data: tasks });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/tasks", (req, res) => {
  const taskData = req.body;

  Projects.addTask(taskData)
    .then((task) => {
      res.status(201).json({ created: task });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

module.exports = router;
