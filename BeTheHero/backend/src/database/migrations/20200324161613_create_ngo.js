
exports.up = function (knex) {
    return knex.schema.createTable("ngo", function (table) {
        table.string("id").primary();
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.string("whatsapp").notNullable();
        table.string("city").notNullable();
        table.string("fu").notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("ngo");
};