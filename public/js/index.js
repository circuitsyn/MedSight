// Get references to page elements
var muscularQ = $("#muscularQ");
var skeletalQ = $("#skeletalQ");
var epidermisQ = $("#epidermisQ");
var dairyCheck = $("#dairyCheck");
var eggCheck = $("#eggCheck");
var seafoodCheck = $("#seafoodCheck");
var soyCheck = $("#soyCheck");
var sweetsCheck = $("#sweetsCheck");
var nutsCheck = $("#nutsCheck");
var wheatCheck = $("#wheatCheck");
var stressRange = $("#stressRange");
var symptomRange = $("#symptomRange");
var notesInput = $("#notesInput");
var submitBtn = $("#submit");
var exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(medsightdata) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(medsightdata)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
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
//     $exampleList.append($examples);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var medsightdata = {
    AllergyTriggerDairy: dairyCheck.val().trim(),
    AllergyTriggerEggs: eggCheck.val().trim(),
    AllergyTriggerFish: seafoodCheck.val().trim(),
    AllergyTriggerSoy: soyCheck.val().trim(),
    AllergyTriggerSweets: sweetsCheck.val().trim(),
    AllergyTriggerNuts: nutsCheck.val().trim(),
    AllergyTriggerWheat: wheatCheck.val().trim(),
    PainLocationMuscular: muscularQ.val().trim(),
    PainLocationSkeletal: skeletalQ.val().trim(),
    PainLocationEpidermis: epidermisQ.val().trim(),
    SliderStressSlider: stressRange.val().trim(),
    SymptomIntensitySlider: symptomRange.val().trim()
    // LocationLat:
    // LocationLong:
    // Humidity: 
    // Pollen: 
    // Pollution: 
    // Notes: 
    // TimeStamp: 

    // ===============================
  };

  // if (!(example.text && example.description)) {
  //   alert("You must enter an example text and description!");
  //   return;
  // }

  API.saveExample(medsightdata).then(function() {
    // refreshExamples();
  });
  // dairyCheck.val("");
  // eggCheck.val("");
  // seafoodCheck.val("");
  // soyCheck.val("");
  // sweetsCheck.val("");
  // nutsCheck.val("");
  // wheatCheck.val("");
  // muscularQ.val("");
  // skeletalQ.val("");
  // epidermisQ.val("");
  // stressRange.val("");
  // symptomRange.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
submitBtn.on("click", handleFormSubmit);
exampleList.on("click", ".delete", handleDeleteBtnClick);
