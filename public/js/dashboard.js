$(document).ready(function() {
    var stressArr = [];
    var sympArr = [];
    var timeArr = [];
    var allergyArr = [];
    var humidArr = [];
    var dairy = 0;
    var eggs = 0;
    var fish = 0;
    var nuts = 0;
    var soy = 0;
    var sweets = 0;
    var wheat = 0;

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
        
        for(i=0; i < data.length; i++){

            dairy += +data[i].AllergyTriggerDairy
            eggs += +data[i].AllergyTriggerEggs
            fish += +data[i].AllergyTriggerFish
            nuts += +data[i].AllergyTriggerNuts
            soy += +data[i].AllergyTriggerSoy
            sweets += +data[i].AllergyTriggerSweets
            wheat += +data[i].AllergyTriggerWheat
        }
        allergyArr.push(dairy, eggs, fish, nuts, soy, sweets, wheat);
        console.log("Allergy Sum Array: ", allergyArr);
        return allergyArr;
    }
    
    
    //function call to launch graph and kick off with an API call
    function launchSympStressGraph() {
        $.get("/api/cards", function(data) {
        console.log("Pain Data Request", data);
        buildStressSympArr(data);
        timeArrBuild(data);
        }).then(function() {
            sympStressGraph(stressArr, sympArr, timeArr);
          });
    };

    //Function to build an array for time
    function timeArrBuild(data) {
        for(i=0; i < data.length; i++){
            cutTime = data[i].TimeStamp.slice(0, 23);
            timeArr.push(cutTime);
        }
        console.log('Time Array: ', timeArr);
        return timeArr;
    };
    
    //function to build symptom and stress arrays
    function buildStressSympArr(data){
        for(i=0; i < data.length; i++){
            stressArr.push(data[i].SliderStressSlider);
        }

        for(i=0; i < data.length; i++){
            sympArr.push(data[i].SymptomIntensitySlider);
        }
        console.log('Stress Array: ', stressArr);
        console.log('Symp Array: ', sympArr);

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
              }
        }
        
        Plotly.newPlot('lineGraphPainStress', data, layout);
    }
    
    //----------- Allergy Pie Chart Based on Pain Threshold Function --------------//
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
        
    }

    Plotly.newPlot('pieChartAllergy', data, layout);

    };
 
    // --------------- Humidity Scatter Plot -------------------------- //
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
            title: 'Symptom',
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
        };
        
        Plotly.newPlot('scatterPlotHumid', data, layout);
    };
    
//Start Drawing Graphs
launchSympStressGraph();
launchAllergyPie();
launchHumidScatter();

});