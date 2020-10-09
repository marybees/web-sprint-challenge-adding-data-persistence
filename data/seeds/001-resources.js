exports.seed = function (knex) {
  return knex("resources")
    .truncate()
    .then(function () {
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "Vacuum",
          resource_description: "Powerful vaccum with multiple attachments",
        },
        {
          id: 2,
          resource_name: "Bucket",
          resource_description:
            "Large bucket to hold water or paint, for example",
        },
        {
          id: 3,
          resource_name: "Paint brush",
          resource_description: "Small paint brush for trim work",
        },
      ]);
    });
};
