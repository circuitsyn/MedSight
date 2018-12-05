// // ========= BEGIN ACCUWEATHER/GEOLOCATION CALL ========== //

$(document).ready(function() {
  var x = document.getElementById("autoLocation");
  //function to get location key from accuweather api
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(data) {
        console.log(data);
        //ajax request -- hit /weather route
        $.ajax({
          url: "/api/weather/",
          method: "POST",
          data: data.coords
        }).then(function(data) {
          console.log(data);
          $("#autoLocation").append(data.cityState);
          $("#autoHumidity").append(data.humidity);
          $("#autoPollution").append(data.airQuality);
          $("#autoPollen").append(data.pollenLevel);
        });
      });
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  getLocation();

  $(document).on("click", ".single-card", editCard);
  function editCard() {
    var currentCard = $(this).data("medsightdata");
    $(this).children().hide();
    $(this).children("input.edit").val(currentCard.text);
    $(this).children("input.edit").show();
    $(this).children("input.edit").focus();
  }
// });
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
    TimeStamp: autoTime.text()
  };

  // Add our new card
  API.saveCard(medsightdata).then(function() {
    // Goes to cards page after submission
    window.location.replace("/cards/");
    return false;
  });
};

// Add event listeners to the submit
submitBtn.on("click", handleFormSubmit);
// ---------- End of New, Edit, and Delete submissions ------------- //

// ------------------- Event Listener Section for Clickable Images ------------------------- //

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

// ---------------- Event Listener Section for Clickable Images End ------------------------- //

// ------------------------------- Edit a Card Start -----------------------------------//
// $(document).ready(function() {
//   var singleContainer = $(".single-container");

//   $(document).on("click", "#cardBlocks", editCard);
//   function editCard() {
//     var currentCard = $(this).data("medsightdata");
//     $(this).children().hide();
//     $(this).children("input.edit").val(currentCard.Notes);
//     $(this).children("input.edit").show();
//     $(this).children("input.edit").focus();
// }
});
// ------------------------------- Edit a Card End -------------------------------------//