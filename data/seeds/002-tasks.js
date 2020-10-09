exports.seed = function (knex) {
  return knex("tasks")
    .truncate()
    .then(function () {
      return knex("tasks").insert([
        {
          id: 1,
          task_description: "Description of Resource",
          task_notes: "Notes here",
          task_completed: true,
        },
        {
          id: 2,
          task_description: "Resource",
          task_notes: "Resource here",
          task_completed: true,
        },
        {
          id: 3,
          task_description: "Howdy",
          task_notes: "Howdy notes",
          task_completed: true,
        },
      ]);
    });
};
