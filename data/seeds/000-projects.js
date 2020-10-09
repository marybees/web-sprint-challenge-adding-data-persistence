exports.seed = function (knex) {
  return knex("projects")
    .truncate()
    .then(function () {
      return knex("projects").insert([
        {
          id: 1,
          project_name: "Bleh",
          project_description: "Blah",
          project_completed: true,
        },
        {
          id: 2,
          project_name: "Hi",
          project_description: "Bye",
          project_completed: true,
        },
        {
          id: 3,
          project_name: "He",
          project_description: "She",
          project_completed: true,
        },
      ]);
    });
};
