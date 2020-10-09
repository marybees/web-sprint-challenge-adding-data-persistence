exports.seed = function (knex) {
  return knex("resources")
    .truncate()
    .then(function () {
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "Resource",
          resource_description: "Description of Resource",
        },
        {
          id: 2,
          resource_name: "Mary",
          resource_description: "Description of Mary",
        },
        {
          id: 3,
          resource_name: "Will",
          resource_description: "Description of Will",
        },
      ]);
    });
};
