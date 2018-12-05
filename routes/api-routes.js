var db = require("../models");

module.exports = function(app) {
  // Get all cards
  app.get("/api/cards", function(req, res) {
    db.MedSightData.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new card
  app.post("/api/cards", function(req, res) {
    db.MedSightData.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete a card by id
  app.delete("/api/cards/:id", function(req, res) {
    db.MedSightData.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // PUT route for updating cards
  app.put("/api/cards/", function(req, res) {
    db.MedSightData.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
