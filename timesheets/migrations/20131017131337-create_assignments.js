module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("assignments", {
      "id": { type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true },
      "project_id": DataTypes.INTEGER,
      "user_id": DataTypes.INTEGER
    }).then(function(){ done(); })
    done()
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done()
  }
}
