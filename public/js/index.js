// ========= BEGIN ACCUWEATHER/GEOLOCATION CALL ========== //

$(document).ready(function() {
  var x = document.getElementById("autoLocation");
  //function to get location key from accuweather api
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(data) {
        $.ajax({
          url:
            "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=7a4dhv24Cy3KXKLaJ7jh5g0EAPhGjmit&q=" +
            data.coords.latitude +
            "%2C" +
            data.coords.longitude +
            "&details=true&toplevel=true",
          method: "GET"
        }).done(function(data) {
          console.log(data.LocalizedName);
          getCurrentConditions(data.Key);
          getAirAndPollen(data.Key);
          //append LocalizedName to page
          $("#autoLocation").append(data.LocalizedName + ", " + data.AdministrativeArea.ID);
        });
      });
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  getLocation();

  //function to get daily air and pollen conditions
  function getAirAndPollen(key) {
    return $.ajax({
      url:
        "http://dataservice.accuweather.com/forecasts/v1/daily/1day/" +
        key +
        "?apikey=7a4dhv24Cy3KXKLaJ7jh5g0EAPhGjmit&details=true&metric=true",
      method: "GET"
    }).done(function(data) {
      console.log(data.DailyForecasts[0].AirAndPollen[0].Category);
      //add pollen and air quality to html
      $("#autoPollution").append(
        data.DailyForecasts[0].AirAndPollen[0].Category
      );
      $("#autoPollen").append(data.DailyForecasts[0].AirAndPollen[1].Category);
    });
  }

  //function to get humidity and time info
  function getCurrentConditions(key) {
    $.ajax({
      url:
        "http://dataservice.accuweather.com/currentconditions/v1/" +
        key +
        "?apikey=7a4dhv24Cy3KXKLaJ7jh5g0EAPhGjmit&details=true",
      method: "GET"
    }).done(function(data) {
      var date = moment
        .unix(data[0].EpochTime)
        .format("dddd, MMMM Do, YYYY h:mm A");
      console.log(date);
      console.log(data[0].RelativeHumidity);
      //add time and humidity to page
      $("#autoTime").append(date);
      $("#autoHumidity").append(data[0].RelativeHumidity);
    });
  }
});
// ========== END ACCUWEATHER/GEOLOCATION CALL ========= //
// ---------- Beginning of New, Edit, and Delete submissions ------------- //
// Get references to page elements
var muscularQ = $("#muscularQ");
var skeletalQ = $("#skeletalQ");
var epidermisQ = $("#epidermisQ");
var dairyCheck = $("#dairyCheck");
var eggCheck = $("#eggCheck");
var seafoodCheck = $("#seafoodCheck");
var soyCheck = $("#soyCheck");
var nutsCheck = $("#nutsCheck");
var wheatCheck = $("#wheatCheck");
var sweetsCheck = $("#sweetsCheck");
var stressRange = $("#stressRange");
var symptomRange = $("#symptomRange");
var autoLocation = $("#autoLocation");
var autoHumidity = $("#autoHumidity");
var autoPollen = $("#autoPollen");
var autoPollution = $("#autoPollution");
var autoTime = $("#autoTime");
var notesInput = $("#notesInput");
var submitBtn = $("#submit");

// The API object contains methods for each kind of request we'll make
var API = {
  saveCard: function(medsightdata) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/cards",
      data: JSON.stringify(medsightdata)
    });
  },
  getCards: function() {
    return $.ajax({
      url: "api/cards",
      type: "GET"
    });
  },
  deleteCard: function(id) {
    return $.ajax({
      url: "api/cards/" + id,
      type: "DELETE"
    });
  }
};


// refreshCards gets new cards from the db and repopulates the list
// var refreshCards = function() {
//   API.getCards().then(function(data) {
//     var cards = data.map(function(medsightdata) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append(cards);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new card to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var medsightdata = {
    AllergyTriggerDairy: parseInt(dairyCheck.attr("value")),
    AllergyTriggerEggs: parseInt(eggCheck.attr("value")),
    AllergyTriggerFish: parseInt(seafoodCheck.attr("value")),
    AllergyTriggerSoy: parseInt(soyCheck.attr("value")),
    AllergyTriggerSweets: parseInt(sweetsCheck.attr("value")),
    AllergyTriggerNuts: parseInt(nutsCheck.attr("value")),
    AllergyTriggerWheat: parseInt(wheatCheck.attr("value")),
    PainLocationMuscular: muscularQ.val().trim(),
    PainLocationSkeletal: skeletalQ.val().trim(),
    PainLocationEpidermis: epidermisQ.val().trim(),
    SliderStressSlider: stressRange.val().trim(),
    SymptomIntensitySlider: symptomRange.val().trim(),
    AutoLocation: autoLocation.text(),
    Humidity: autoHumidity.text(),
    Pollen: autoPollen.text(),
    Pollution: autoPollution.text(),
    Notes: notesInput.val().trim(),
    TimeStamp: autoTime.text(),

    // ===============================
  };

  // Add our new card
  API.saveCard(medsightdata).then(function() {
    // refreshCards();
  });
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshCards();
  });
};

// Add event listeners to the submit
submitBtn.on("click", handleFormSubmit);
// ---------- End of New, Edit, and Delete submissions ------------- //
// ------------------- Event Listener Section for Clickable Images -------------------------

$(".quiz-answer").click(function() {
  event.preventDefault();
  if ($(this).attr("value") === "0") {
    $(this).toggleClass("active");
    $(this).attr("value", "1");
  } else {
    $(this).toggleClass("active");
    $(this).attr("value", "0");
  }
});

// ---------------- Event Listener Section for Clickable Images End -------------------------
