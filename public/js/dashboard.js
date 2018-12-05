$(document).ready(function() {
    var stressArr = [];
    var sympArr = [];
    var timeArr = [];

    // This function grabs posts from the database and updates the view
    function getPainData() {
        $.get("/api/cards", function(data) {
        console.log("Pain Data Request", data);
        buildStressSympArr(data);
        timeArrBuild(data);
        }).then(function() {
            sympStressGraph(stressArr, sympArr, timeArr);
          });
      
    };

    //function to build an array for time
    function timeArrBuild(data) {
        for(i=0; i < data.length; i++){
            timeArr.push(data[i].TimeStamp);
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
                }
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
    function allergyPie(){
        
    var data = [{
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
    }];
    
    Plotly.newPlot('pieChartAllergy', data);

    };
 
    
//Start Drawing Graphs
getPainData();

});