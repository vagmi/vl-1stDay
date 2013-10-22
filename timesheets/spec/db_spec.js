var dbModule = require('../db').db;
var seed = require('../db/seed').seed;

describe("DB", function(){
  beforeEach(function(){
    db.resetSchema();
  })
  it("should setup seeds", function(){
    seed();
    expect(db.clients.length).toEqual(1);
    var client = db.clients[0];
    expect(client.getProjects().length).toEqual(2);
    expect(db.projects.length).toEqual(2);
  })
})
