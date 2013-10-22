module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("time_entries", {
      "id": { type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true},
      "project_id": DataTypes.INTEGER,
      "user_id": DataTypes.INTEGER,
      "description": DataTypes.TEXT,
      "minutes": DataTypes.INTEGER,
      "billable": DataTypes.BOOLEAN
    }).then(function(){ done(); })
    done()
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done()
  }
}
