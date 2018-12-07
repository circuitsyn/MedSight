var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.MedSightData.findAll({}).then(function(dbMedsightdata) {
      res.render("partials/index", {
        msg: "Welcome!",
        medsightdata: dbMedsightdata
      });
    });
  });

  // Load cards page
  app.get("/cards/", function(req, res) {
    db.MedSightData.findAll({}).then(function(dbMedsightdata) {
      res.render("partials/cards", {
        medsightdata: dbMedsightdata
      });
    });
  });
  // render dashboard handlebars page to the DOM
  app.get("/dashboard/", function(req, res) {
    db.MedSightData.findAll({}).then(function(dbMedsightdata) {
      res.render("partials/dashboard", {
        medsightdata: dbMedsightdata
      });
    });
  });
  // Load cards by stress selection
  app.get("/stress/:id", function(req, res) {
    db.MedSightData.findAll({ where: { SliderStressSlider: req.params.id } }).then(function(dbMedsightdata) {
      res.render("partials/cards", {
        medsightdata: dbMedsightdata
      });
    });
  });
  // Load cards by stress selection
  app.get("/symptom/:id", function(req, res) {
    db.MedSightData.findAll({ where: { SymptomIntensitySlider: req.params.id } }).then(function(dbMedsightdata) {
      res.render("partials/cards", {
        medsightdata: dbMedsightdata
      });
    });
  });
  // Choose cards by ID
  // app.get("/cards/:id", function(req, res) {
  //   db.MedSightData.findOne({ where: { id: req.params.id } }).then(function(dbMedsightdata) {
  //     res.render("partials/cards-single", {
  //       medsightdata: dbMedsightdata
  //     });
  //   });
  // });
  // Load Our Story page
  app.get("/ourstory/", function(req, res) {
    db.MedSightData.findAll({}).then(function(dbMedsightdata) {
      res.render("partials/story", {
        medsightdata: dbMedsightdata
      });
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("partials/404");
  });

};
