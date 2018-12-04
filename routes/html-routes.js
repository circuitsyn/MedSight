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
  // Load cards page
  app.get("/cards/", function(req, res) {
    db.MedSightData.findAll({}).then(function(dbExamples) {
      res.render("partials/cards", {
        medsightdata: dbExamples
      });
    });
  });

  // render dashboard handlebars page to the DOM
  app.get("/dashboard/", function(req, res) {
    db.MedSightData.findAll({}).then(function(dbExamples) {
      res.render("partials/dashboard", {
        medsightdata: dbExamples
      });
    });
  });

  // Choose cards by ID
  app.get("/cards/:id", function(req, res) {
    db.MedSightData.findOne({ where: { id: req.params.id } }).then(function(dbExamples) {
      res.render("partials/cards-single", {
        medsightdata: dbExamples
      });
    });
  });
  // Load Our Story page
  app.get("/ourstory/", function(req, res) {
    db.MedSightData.findAll({}).then(function(dbExamples) {
      res.render("partials/story", {
        msg: "Welcome!",
        medsightdata: dbExamples
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("partials/404");
  });
};
