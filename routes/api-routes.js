var db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;
var nodemailer = require('nodemailer');

module.exports = function(app) {
  // Get all cards
  app.get("/api/cards", function(req, res) {
    db.MedSightData.findAll({}).then(function(dbMedsightdata) {
      res.json(dbMedsightdata);
    });
  });

  // ========= BEGIN WEATHER DATA CALL ==========
  app.post("/api/weather/", function(req, res) {
    var request = require("request");
    var moment = require("moment");
    var apiKey = process.env.ACCUWEATHER_KEY;
    var lat = req.body.latitude;
    var lon = req.body.longitude;

    //First api call, feeds lat/lon data to retreieve location
    var queryUrl = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" +
      apiKey + "&q=" + lat + "%2C" + lon + "&details=true&toplevel=true";

    request(queryUrl, function(error, response, body1) {
      var body1 = JSON.parse(body1);
      console.log("body1:", body1);
      var key = body1.Key;
      var cityState = body1.LocalizedName + ", " + body1.AdministrativeArea.ID;
      console.log("Location:", cityState);

    //Second api call, feeds location key to retrieve air quality and pollen data
    var queryUrl = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/" +
      key + "?apikey=" + apiKey + "&details=true&metric=true";

    request(queryUrl, function(error, response, body2) {
      var body2 = JSON.parse(body2);

      //Air Quality
      console.log("Air Quality:", body2.DailyForecasts[0].AirAndPollen[0].Category);
      console.log("Air Quality value:", body2.DailyForecasts[0].AirAndPollen[0].CategoryValue);
      
      //Pollen
      console.log("Pollen level:", body2.DailyForecasts[0].AirAndPollen[1].Category);
      console.log("Pollen level value:", body2.DailyForecasts[0].AirAndPollen[1].CategoryValue);

      //Third api call, feeds location key to retrieve humidity and time
      var queryUrl = "http://dataservice.accuweather.com/currentconditions/v1/" +
        key + "?apikey=" + apiKey + "&details=true";

      request(queryUrl, function(error, response, body3) {
        var body3 = JSON.parse(body3);
        console.log("Humidity:", body3[0].RelativeHumidity);
        var date = moment(body3[0].LocalObservationDateTime).format("dddd, MMMM Do, YYYY h:mm A");

        console.log("Sampled Data Time:", date);

        //push data into weather object for posting to index page
        var weatherData = {
          location: cityState,
          airQuality: body2.DailyForecasts[0].AirAndPollen[0].Category,
          airQualityValue: body2.DailyForecasts[0].AirAndPollen[0].CategoryValue,
          pollenLevel: body2.DailyForecasts[0].AirAndPollen[1].Category,
          pollenLevelValue: body2.DailyForecasts[0].AirAndPollen[1].CategoryValue,
          humidity: body3[0].RelativeHumidity,
          sampledDataTime: date};
          
        res.json(weatherData);
        });
      });
    });
  });
  // ========== END WEATHER DATA CALL =========

  // Create a new card
  app.post("/api/cards", function(req, res) {
    db.MedSightData.create(req.body).then(function(dbMedsightdata) {
      res.json(dbMedsightdata);
    });
  });

  //------------------- Dashboard API Routes ------------------------//
  app.get("/api/cards/:id", function(req, res) {
    db.MedSightData.findAll({ where: { SymptomIntensitySlider: {[Op.gt]: req.params.id}} }).then(function(dbMedsightdata) {
      res.json(dbMedsightdata);
      });
    
  });
  //------------------- Email Routes ------------------------//
  app.post('/ourstory/', function (req, res) {
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS
      }
    });
    mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email + '&gt;',
      to: process.env.USER,
      subject: 'New message from contact form at Medsight',
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
      if(error){
          console.log(error);
          res.end("error");
        }else{
          console.log("Message sent: " + response.message);
          res.render("partials/story");
        }
    });
  });
};