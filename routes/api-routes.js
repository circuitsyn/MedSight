var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/cards", function(req, res) {
    db.MedSightData.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/cards", function(req, res) {
    db.MedSightData.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/cards/:id", function(req, res) {
    db.MedSightData.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
