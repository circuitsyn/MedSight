var db = require("../models");

module.exports = function(app) {
  // Get all cards
  app.get("/api/cards", function(req, res) {
    db.MedSightData.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // ========= BEGIN WEATHER DATA CALL ==========
  app.post("/api/weather/", function(req, res) {
    console.log(req.body);
    var request = require("request");
    var lat = req.body.latitude;
    var lon = req.body.longitude;
    var queryUrl =
      "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=7a4dhv24Cy3KXKLaJ7jh5g0EAPhGjmit&q=" +
      lat +
      "%2C" +
      lon +
      "&details=true&toplevel=true";
    // get location key and city/state
    request(queryUrl, function(error, response, body1) {
      var body1 = JSON.parse(body1);
      console.log(body1.Key);
      var key = body1.Key;
      console.log(body1.LocalizedName);
      console.log(body1.AdministrativeArea.ID);
      var cityState = body1.LocalizedName + ", " + body1.AdministrativeArea.ID;
      var queryUrl =
        "http://dataservice.accuweather.com/forecasts/v1/daily/1day/" +
        key +
        "?apikey=7a4dhv24Cy3KXKLaJ7jh5g0EAPhGjmit&details=true&metric=true";
      request(queryUrl, function(error, response, body2) {
        var body2 = JSON.parse(body2);
        //Air Quality
        console.log(body2.DailyForecasts[0].AirAndPollen[0].Category);
        console.log(body2.DailyForecasts[0].AirAndPollen[0].CategoryValue);
        //Pollen
        console.log(body2.DailyForecasts[0].AirAndPollen[1].Category);
        console.log(body2.DailyForecasts[0].AirAndPollen[1].CategoryValue);
        //get humidity and time
        var queryUrl =
          "http://dataservice.accuweather.com/currentconditions/v1/" +
          key +
          "?apikey=7a4dhv24Cy3KXKLaJ7jh5g0EAPhGjmit&details=true";
        request(queryUrl, function(error, response, body3) {
          var body3 = JSON.parse(body3);
          console.log(body3[0].RelativeHumidity);
        
        //push data in weather object
        var weatherData = {
          cityState: cityState,
          airQuality: body2.DailyForecasts[0].AirAndPollen[0].Category,
          pollenLevel: body2.DailyForecasts[0].AirAndPollen[1].Category,
          humidity: body3[0].RelativeHumidity
        };
        res.json(weatherData);
      });
      });
    });
  });
  // ========== END WEATHER DATA CALL =========

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
