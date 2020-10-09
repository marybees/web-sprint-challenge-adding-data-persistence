exports.seed = function (knex) {
  return knex("projects")
    .truncate()
    .then(function () {
      return knex("projects").insert([
        {
          project_name: "Remodel the house",
          project_description: "Gut and remodel the bathrooms and kitchen",
          project_completed: 0,
        },
        {
          project_name: "Landscape the yard",
          project_description: "Plant shrubbery, trees and gardens in the yard",
          project_completed: 0,
        },
        {
          project_name: "Clean the car",
          project_description:
            "Wash the exterior and vacuum the interior of the car",
          project_completed: 1,
        },
      ]);
    });
};
