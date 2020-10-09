const db = require("../data/db-config.js");

module.exports = {
  getAll,
  add,
  getById,
  update,
  remove,
  getProjectResources,
  getProjectTasks,
  getAllTasks,
  addTask,
  getTaskById,
  getAllResources,
  addResource,
  getResourceById,
};

// Projects

function getAll() {
  return db("projects");
}

function getById(id) {
  return db("projects").where({ id }).first();
}

function add(project) {
  return db("projects")
    .insert(project, "id")
    .then((ids) => {
      const id = ids[0];
      return getById(id);
    });
}

function update(id, changes) {
  return db("projects").where({ id }).update(changes);
}

function remove(id) {
  return db("projects").where({ id }).del();
}

// Resources

function getAllResources() {
  return db("resources");
}

function getProjectResources(id) {
  return db("resources").where("resource_id", id);
}

function getResourceById(id) {
  return db("resources").where({ id }).first();
}

function addResource(resource) {
  return db("resources")
    .insert(resource, "id")
    .then((ids) => {
      const id = ids[0];
      return getResourceById(id);
    });
}

// Tasks

function getAllTasks() {
  return db("tasks");
}

function getProjectTasks(id) {
  return db("tasks").where("task_id", id);
}

function getTaskById(id) {
  return db("tasks").where({ id }).first();
}

function addTask(task) {
  return db("tasks")
    .insert(task, "id")
    .then((ids) => {
      const id = ids[0];
      return getTaskById(id);
    });
}
