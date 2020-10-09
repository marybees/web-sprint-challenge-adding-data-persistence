exports.seed = function (knex) {
  return knex("resources")
    .truncate()
    .then(function () {
      return knex("resources").insert([
        {
          resource_id: 1,
          resource_name: "Vacuum",
          resource_description: "Powerful vaccum with multiple attachments",
          project_id: 3,
        },
        {
          resource_id: 2,
          resource_name: "Bucket",
          resource_description:
            "Large bucket to hold water or paint, for example",
          project_id: 2,
        },
        {
          resource_id: 3,
          resource_name: "Paint brush",
          resource_description: "Small paint brush for trim work",
          project_id: 1,
        },
      ]);
    });
};
