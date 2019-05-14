$(document).ready(function() {
    var stressArr = [];
    var sympArr = [];
    var timeArr = [];
    var allergyArr = [];
    var humidArr = [];
    var pollArr = [];
    var airArr = [];
    var dairy = 0;
    var eggs = 0;
    var fish = 0;
    var nuts = 0;
    var soy = 0;
    var sweets = 0;
    var wheat = 0;

    //function to animate the change in pie chart data once update is clicked
    function pieChartShift() {
        getRefinedAllergyData(allergyArr);
        
        Plotly.animate('pieChartAllergy', {
          data: [{values: allergyArr}],
          traces: [0],
          layout: {}
        }, {
          transition: {
            duration: 500,
            easing: 'cubic-in-out'
          },
          frame: {
            duration: 500
          }
        })
      };

    //function to get refined pie chart allergy data
    function getRefinedAllergyData(allergyArr){
        
        var value = $('#symptomRange').val().trim();
        
    $.get("/api/cards/" + value, function(data) {
        buildAllergyArr(data);
        });
        return allergyArr;
    };

    //function to get data and launch air quality and pollen bar graph
    function launchAirPollenGraph(){
        $.get("/api/cards", function(data) {
            buildStressSympArr(data);
            buildPollAirArr(data);
            }).then(function() {
                pollAirBarGraph(sympArr, pollArr, airArr);
                });
    };

    //function to build pollen and air quality value arrays
    function buildPollAirArr(data){
        //reset if called again
        pollArr = [];
        airArr = [];

        //for loop to build stress data array
        for(i=0; i < data.length; i++){
            pollArr.push(data[i].PollenIndex);
        }

        //loop to build symptom intensity data array
        for(i=0; i < data.length; i++){
            airArr.push(data[i].AirQualityIndex);
        }

        return pollArr, airArr;
    };

    //function to get data and launch humid scatter plot
    function launchHumidScatter() {
        $.get("/api/cards", function(data) {
            buildStressSympArr(data);
            buildHumidArr(data);
            }).then(function() {
                humidScatter(sympArr, humidArr);
                });
    };

    //function to build humidity array
    function buildHumidArr(data){
        for(i=0; i < data.length; i++){
            humidArr.push(data[i].Humidity);
        }
        return humidArr;
    };

    // This function grabs posts from the database and updates the view
    function launchAllergyPie(){
        $.get("/api/cards", function(data) {
            buildAllergyArr(data);
            }).then(function() {
                allergyPie(allergyArr);
                });
        };

    //function to build allergy trigger totals for pie chart
    function buildAllergyArr(data){
        //reset allergy array on each call
        dairy = 0;
        eggs = 0;
        fish = 0;
        nuts = 0;
        soy = 0;
        sweets = 0; 
        wheat = 0;
        allergyArr = [];

        for(i=0; i < data.length; i++){

            dairy += +(data[i].AllergyTriggerDairy);
            eggs += +(data[i].AllergyTriggerEggs);
            fish += +(data[i].AllergyTriggerFish);
            nuts += +(data[i].AllergyTriggerNuts);
            soy += +(data[i].AllergyTriggerSoy);
            sweets += +(data[i].AllergyTriggerSweets);
            wheat += +(data[i].AllergyTriggerWheat);
        }
        allergyArr.push(dairy, eggs, fish, nuts, soy, sweets, wheat);
        
        return allergyArr;
    }
    
    
    //function call to launch graph and kick off with an API call
    function launchSympStressGraph() {
        $.get("/api/cards", function(data) {
        
        buildStressSympArr(data);
        timeArrBuild(data);
        }).then(function() {
            sympStressGraph(stressArr, sympArr, timeArr);
          });
    };

    //Function to build an array for time
    function timeArrBuild(data) {
        //reset if called again
        timeArr = [];
    
        for(i=0; i < data.length; i++){
            cutTime = data[i].TimeStamp.slice(0, 23);
            timeArr.push(cutTime);
        }
        return timeArr;
    };
    
    //function to build symptom and stress arrays
    function buildStressSympArr(data){

        //reset if called again
        stressArr = [];
        sympArr = [];

        //for loop to build stress data array
        for(i=0; i < data.length; i++){
            stressArr.push(data[i].SliderStressSlider);
        }

        //loop to build symptom intensity data array
        for(i=0; i < data.length; i++){
            sympArr.push(data[i].SymptomIntensitySlider);
        }

        return sympArr, stressArr;
    };

    

    //----------------- Symp vs Stress Line Graph -------------------//
    function sympStressGraph(stressArr, sympArr, timeArr){
        //build 3 functions here to get the data for stress, time, and sympt intensity to provide to the chart

        trace1 = {
            type: 'scatter',
            x: timeArr,
            y: stressArr,
            mode: 'lines',
            name: 'Stress',
            line: {
            color: 'rgb(219, 64, 82)',
            width: 3
            }
        };
        
        trace2 = {
            type: 'scatter',
            x: timeArr,
            y: sympArr,
            mode: 'lines',
            name: 'Symptom',
            line: {
            color: 'rgb(55, 128, 191)',
            width: 1
            }
        };
        
        var data = [trace1, trace2];
    
        var layout = {
            title: 'Pain vs Stress Over Time',
            titlefont: {
                family: 'MedSight Font, monospace',
                size: 25,
                color: '#420b56'
            },
            xaxis: {
                title: 'Time',
                titlefont: {
                  family: 'MedSight Font, monospace',
                  size: 18,
                  color: '#420b56'
                },
                showticklabels: false
              },
              yaxis: {
                title: 'Stress and Symptom Intensity',
                titlefont: {
                  family: 'MedSight Font, monospace',
                  size: 18,
                  color: '#420b56'
                }
              },
              showlegend: true,
              legend: {x: 0,
                y: 0,
              "orientation": "h"},
              
        }
        
        Plotly.newPlot('lineGraphPainStress', data, layout, {responsive: true, displayModeBar: false});
    };
        
    //-------- Allergy Pie Chart Based on Pain Threshold Function --------------//
    function allergyPie(allergyArr){
        
    var data = [{
        values: allergyArr,
        labels: ['Dairy', 'Eggs', 'Seafood','Nuts','Soy','Sweets','Wheat'],
        type: 'pie'
    }];
    
    var layout = {
        title: 'Total Allergy Triggers Over Time',
        titlefont: {
            family: 'MedSight Font, monospace',
            size: 25,
            color: '#420b56'
        },  
        showlegend: true,
        legend: {x: 0.15,
            y: -0.1,
            "orientation": "h",}
    }

    Plotly.newPlot('pieChartAllergy', data, layout, {responsive: true, displayModeBar: false});
};
    
    //------------ Humidity Scatter Plot -------------------------- //
    function humidScatter(sympArr, humidArr) {
        var trace1 = {
            x: sympArr,
            y: humidArr,
            mode: 'markers',
            type: 'scatter',
            name: 'Humidity',
            marker: { size: 12 }
        };
        
        // var trace2 = {
        //     x: sympArr,
        //     y: sympArr,
        //     mode: 'markers',
        //     type: 'scatter',
        //     name: 'Team B',
        //     marker: { size: 12 }
        // };
        
        var data = [ trace1 ];
        
        var layout = {
            xaxis: {
            range: [ 0, 10 ],
            
            title: 'Symptom Intensity',
                titlefont: {
                  family: 'MedSight Font, monospace',
                  size: 18,
                  color: '#420b56'
                },
            },
            yaxis: {
            range: [0, 100],
            title: 'Humidity',
                titlefont: {
                  family: 'MedSight Font, monospace',
                  size: 18,
                  color: '#420b56'
                },
            },
            title: 'Humidity vs. Symptom Intensity',
            titlefont: {
                family: 'MedSight Font, monospace',
                size: 25,
                color: '#420b56'
            },
            showlegend: true,
            legend: {x: 0.44,
                y: -0.05,
            "orientation": "h",}
            };
        
        
        Plotly.newPlot('scatterPlotHumid', data, layout, {responsive: true, displayModeBar: false});
    };
        //------------------ Pollen and Air Quality Dual Bar Graph ---------------- //

    function pollAirBarGraph(sympArr, pollArr, airArr){
        var trace1 = {
            x: sympArr,
            y: airArr,
            name: 'Air Quality',
            marker: {color: 'rgb(55, 83, 109)'},
            type: 'bar'
        };
        
        var trace2 = {
            x: sympArr,
            y: pollArr,
            name: 'Pollen Count',
            marker: {color: 'rgb(26, 118, 255)'},
            type: 'bar'
        };
        
        var data = [trace1, trace2];
        
        var layout = {
            title: 'Air Quality and Pollen Count vs Symptom Intensity',
            titlefont: {
                family: 'MedSight Font, monospace',
                size: 18,
                color: '#420b56'
                },
            xaxis: {
                title: 'Symptom Intensity',
                titlefont: {
                    family: 'MedSight Font, monospace',
                    size: 18,
                    color: '#420b56'
                },
            },
            yaxis: {
            title: 'Pollen & Air Quality',
            titlefont: {
                family: 'MedSight Font, monospace',
                size: 18,
                color: '#420b56'
            },
            tickfont: {
                size: 14,
                color: 'rgb(107, 107, 107)'
            }
            },
            showlegend: true,
            legend: {x: 0.37,
                y: -0.03,
            "orientation": "h",
            bgcolor: 'rgba(255, 255, 255, 0)',
            bordercolor: 'rgba(255, 255, 255, 0)'
            },
            barmode: 'group',
            bargap: 0.5,
            bargroupgap: 0.1
        };
        
        Plotly.newPlot('airQualVsSymp', data, layout, {responsive: true, displayModeBar: false});
    };

    //Start Drawing Graphs
    launchSympStressGraph();
    launchAllergyPie();
    launchHumidScatter();
    launchAirPollenGraph();

    //--------------------- Button listeners Start ------------------------- //
    //Pie Chart Update Button Listener
    $('#pieUpdate').on("click", function(e){
        e.preventDefault();
        pieChartShift();
      });

    //--------------------- Button listeners End ------------------------- //
   });
