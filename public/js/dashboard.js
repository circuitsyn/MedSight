$(document).ready(function() {

    // This function grabs posts from the database and updates the view
    function getPainData() {
        $.get("/api/cards", function(data) {
        console.log("Pain Data Request", data);
        
        // }).then(function() {
        //     sympStressGraph(data);
        //   });
      });
    

    //----------------- Symp vs Stress Line Graph -------------------//
    function sympStressGraph(data){
        //build 3 functions here to get the data for stress, time, and sympt intensity to provide to the chart

        trace1 = {
            type: 'scatter',
            x: time,
            y: stressData,
            mode: 'lines',
            name: 'Red',
            line: {
            color: 'rgb(219, 64, 82)',
            width: 3
            }
        };
        
        trace2 = {
            type: 'scatter',
            x: time,
            y: symptData,
            mode: 'lines',
            name: 'Blue',
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