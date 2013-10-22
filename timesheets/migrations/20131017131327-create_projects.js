module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("projects", {
      "id": { type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true},
      "name": DataTypes.STRING,
      "client_id": DataTypes.INTEGER
    }).then(function(){ done(); })
    done()
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done()
  }
}
