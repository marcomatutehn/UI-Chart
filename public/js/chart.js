
// ------------Create charts-----------
//Chart Pantalones
var chart = Highcharts.chart('chart', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Sales by month for: '
    },
    subtitle: {
      text: 'Sales Report'
    },
    xAxis: {
      type: 'Category'
    },
    yAxis: {
      title: {
        text: 'Sales'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}'
        }
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> total of sales.<br/>'
    },
  
    "series": [
      {
        "name": "Months",
        "colorByPoint": true,
        "data": [
          {
            "name": "January",
            "y": 700,
            "drilldown": "January"
          },
          {
            "name": "February",
            "y": 800,
            "drilldown": "February"
          },
          {
            "name": "March",
            "y": 200,
            "drilldown": "March"
          },
          {
            "name": "April",
            "y": 350,
            "drilldown": "April"
          }
        ]
      }
    ],
    "drilldown": {
      "series": [
        {
          "name": "January",
          "id": "January",
          "data": [
            [
              "Semana 1",
              0.13
            ],
            [
              "Semana 2",
              0.11
            ],
            [
              "Semana 3",
              0.17
            ],
            [
              "Semana 4",
              0.26
            ]
          ]
        },
        {
          "name": "February",
          "id": "February",
          "data": [
            
            [
              "Semana 1",
              0.1
            ],
            [
              "Semana 2",
              0.15
            ],
            [
              "Semana 3",
              0.1
            ],
            [
              "Semana 4",
              0.31
            ]
          ]
        },
        {
          "name": "March",
          "id": "March",
          "data": [
            [
              "Semana 1",
              6.2
            ],
            [
              "Semana 2",
              0.29
            ],
            [
              "Semana 3",
              0.27
            ],
            [
              "Semana 4",
              0.47
            ]
          ]
        },
        {
          "name": "April",
          "id": "April",
          "data": [
            [
              "Semana 1",
              0.36
            ],
            [
              "Semana 2",
              0.54
            ],
            [
              "Semana 3",
              0.13
            ],
            [
              "Semana 4",
              0.2
            ]
          ]
        },
        {
          "name": "Edge",
          "id": "Edge",
          "data": [
            [
              "v16",
              2.6
            ],
            [
              "v15",
              0.92
            ],
            [
              "v14",
              0.4
            ],
            [
              "v13",
              0.1
            ]
          ]
        },
        {
          "name": "Opera",
          "id": "Opera",
          "data": [
            [
              "v50.0",
              0.96
            ],
            [
              "v49.0",
              0.82
            ],
            [
              "v12.1",
              0.14
            ]
          ]
        }
      ]
    }
  });
//Chart Camisas
var chart2 = Highcharts.chart('chart2', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Sales by month for: '
    },
    subtitle: {
      text: 'Sales by Month'
    },
    xAxis: {
      type: 'Category'
    },
    yAxis: {
      title: {
        text: 'Sales'
      }
  
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}'
        }
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> total of sales.<br/>'
    },
  
    "series": [
      {
        "name": "Months",
        "colorByPoint": true,
        "data": [
          {
            "name": "January",
            "y": 200,
            "drilldown": "January"
          },
          {
            "name": "February",
            "y": 300,
            "drilldown": "February"
          },
          {
            "name": "March",
            "y": 900,
            "drilldown": "March"
          },
          {
            "name": "April",
            "y": 350,
            "drilldown": "April"
          }
        ]
      }
    ],
    "drilldown": {
      "series": [
        {
          "name": "January",
          "id": "January",
          "data": [
            [
              "v61.0",
              0.88
            ],
            [
              "v58.0",
              0.49
            ],
            [
              "v57.0",
              0.32
            ],
            [
              "v56.0",
              0.29
            ]
          ]
        },
        {
          "name": "February",
          "id": "February",
          "data": [
            [
              "Semana 1",
              1.02
            ],
            [
              "Semana 2",
              0.1
            ],
            [
              "Semana 3",
              0.31
            ],
            [
              "Semana 4",
              0.12
            ]
          ]
        },
        {
          "name": "March",
          "id": "March",
          "data": [
            [
              "Semana 1",
              6.2
            ],
            [
              "Semana 2",
              0.29
            ],
            [
              "Semana 3",
              0.27
            ],
            [
              "Semana 4",
              0.47
            ]
          ]
        },
        {
          "name": "April",
          "id": "April",
          "data": [
            [
              "Semana 1",
              0.36
            ],
            [
              "Semana 2",
              0.54
            ],
            [
              "Semana 3",
              0.13
            ],
            [
              "Semana 4",
              0.2
            ]
          ]
        },
        {
          "name": "Edge",
          "id": "Edge",
          "data": [
            [
              "Semana 1",
              2.6
            ],
            [
              "",
              0.92
            ],
            [
              "v14",
              0.4
            ],
            [
              "v13",
              0.1
            ]
          ]
        },
        {
          "name": "Opera",
          "id": "Opera",
          "data": [
            [
              "v50.0",
              0.96
            ],
            [
              "v49.0",
              0.82
            ],
            [
              "v12.1",
              0.14
            ]
          ]
        }
      ]
    }
  });



// Modify type of chart
  $('#plain').click(function () {
    chart.update({
      chart: {
        inverted: false,
        polar: false,
        type: 'bar'
      },
      subtitle: {
        text: 'Plain'
      }
    });


  });
  $('#plain2').click(function () {
    chart2.update({
        chart: {
          inverted: false,
          polar: false
        },
        subtitle: {
          text: 'Plain'
        }
      });

  });
  
  $('#inverted').click(function () {
    chart.update({
      chart: {
        inverted: false,
        polar: false,
        type: 'bar'
      },
      subtitle: {
        text: 'Inverted'
      }
    });
    
  });
  $('#inverted2').click(function () {
    chart2.update({
        chart: {
          inverted: true,
          polar: false
        },
        subtitle: {
          text: 'Inverted'
        }
      });
  });

  $('#polar').click(function () {
    chart.update({
      chart: {
        inverted: false,
        polar: true,
        type: column
      },
      subtitle: {
        text: 'Polar'
      }
    });
  });
  $('#polar2').click(function () {
    chart2.update({
        chart: {
          inverted: false,
          polar: true
        },
        subtitle: {
          text: 'Polar'
        }
      });
  });

  $('#pie').click(function () {
    chart.update({
  
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      subtitle: {
        text: 'Pie'
      }
    });
  });
  $('#pie2').click(function () {
    chart.update({
  
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      subtitle: {
        text: 'Pie'
      }
    });
  });
