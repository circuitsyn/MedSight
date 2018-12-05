var db = require("../models");

module.exports = function(app) {
  // Get all cards
  app.get("/api/cards", function(req, res) {
    db.MedSightData.findAll({}).then(function(dbMedsightdata) {
      res.json(dbMedsightdata);
    });
  });
  // Create a new card
  app.post("/api/cards", function(req, res) {
    db.MedSightData.create(req.body).then(function(dbMedsightdata) {
      res.json(dbMedsightdata);
    });
  });
};