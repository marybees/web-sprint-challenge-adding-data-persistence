const db = require("../data/db-config.js");

module.exports = {
  getAll,
  add,
  getById,
  update,
  remove,
  getProjectResources,
  getProjectTasks,
};

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

function getProjectResources(id) {
  return db("resources").where("resource_id", id);
}

function getProjectTasks(id) {
  return db("tasks").where("task_id", id);
}
