module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("clients", {
      "id": { type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true},
      "name": DataTypes.STRING,
      "email": DataTypes.STRING
    }).then(function(){ done(); })
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done()
  }
}
