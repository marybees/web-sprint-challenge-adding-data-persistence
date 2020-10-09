exports.seed = function (knex) {
  return knex("tasks")
    .truncate()
    .then(function () {
      return knex("tasks").insert([
        {
          task_id: 1,
          task_description: "Paint the walls",
          task_notes: "Use primer as a base on all walls",
          task_completed: true,
          project_id: 1,
        },
        {
          task_id: 2,
          task_description: "Clean the windshield",
          task_notes: "Use Windex and paper towels",
          task_completed: true,
          project_id: 3,
        },
        {
          task_id: 3,
          task_description: "Trim shrubs",
          task_notes: "Use the large trimmers in the garage",
          task_completed: true,
          project_id: 2,
        },
      ]);
    });
};
