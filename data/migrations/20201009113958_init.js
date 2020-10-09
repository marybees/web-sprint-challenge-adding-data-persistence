exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("project_name").notNullable().unique();
      tbl.string("project_description").notNullable().unique();
      tbl.boolean("project_completed").notNullable().defaultTo(false);
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.string("resource_name").notNullable();
      tbl.string("resource_description").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("task_dscription").notNullable();
      tbl.string("task_notes").notNullable();
      tbl.boolean("task_completed").notNullable().defaultTo(false);
      tbl
        .integer("task_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks");
};
