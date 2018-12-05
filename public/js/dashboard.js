
//----------------- Pain vs Stress Line Graph -------------------//
trace1 = {
    type: 'scatter',
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'lines',
    name: 'Red',
    line: {
      color: 'rgb(219, 64, 82)',
      width: 3
    }
  };
  
  trace2 = {
    type: 'scatter',
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
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
          size: 18,
          color: '#420b56'
      }
  }
  
  Plotly.newPlot('lineGraphPainStress', data, layout);

//----------- Allergy Pie Chart Based on Pain Threshold--------------//

var data = [{
    values: [19, 26, 55],
    labels: ['Residential', 'Non-Residential', 'Utility'],
    type: 'pie'
  }];
  
  Plotly.newPlot('pieChartAllergy', data);