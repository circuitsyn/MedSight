var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.MedSightData.findAll({}).then(function(dbExamples) {
      res.render("partials/index", {
        msg: "Welcome!",
        medsightdata: dbExamples
      });
    });
  });

  app.get("/cards/", function(req, res) {
    db.MedSightData.findAll({}).then(function(dbExamples) {
      res.render("partials/cards", {
        medsightdata: dbExamples
      });
    });
  });

  app.get("/cards/:id", function(req, res) {
    db.MedSightData.findOne({ where: { id: req.params.id } }).then(function(dbExamples) {
      res.render("partials/cards-single", {
        medsightdata: dbExamples
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
