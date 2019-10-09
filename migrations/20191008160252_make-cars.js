
exports.up = function(knex) {
    return knex.schema.createTable('cars', function(tbl){
        tbl.increments('id');
        tbl.string('VIN', [17]).notNullable();
        tbl.string('Make').notNullable();
        tbl.string('Model').notNullable();
        tbl.integer('Mileage').notNullable();
        tbl.unique('VIN');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIFExists('cars')
};
