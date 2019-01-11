
// ------------Create charts
//Chart Pantalones
var chart = Highcharts.chart('chart', {
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
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Ventas'
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
            "drilldown": "Chrome"
          },
          {
            "name": "February",
            "y": 800,
            "drilldown": "Firefox"
          },
          {
            "name": "March",
            "y": 200,
            "drilldown": "Internet Explorer"
          },
          {
            "name": "April",
            "y": 350,
            "drilldown": "Safari"
          }
        ]
      }
    ],
    "drilldown": {
      "series": [
        {
          "name": "Chrome",
          "id": "Chrome",
          "data": [
            [
              "v65.0",
              0.1
            ],
            [
              "v64.0",
              1.3
            ],
            [
              "v63.0",
              53.02
            ],
            [
              "v62.0",
              1.4
            ],
            [
              "v61.0",
              0.88
            ],
            [
              "v60.0",
              0.56
            ],
            [
              "v59.0",
              0.45
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
            ],
            [
              "v55.0",
              0.79
            ],
            [
              "v54.0",
              0.18
            ],
            [
              "v51.0",
              0.13
            ],
            [
              "v49.0",
              2.16
            ],
            [
              "v48.0",
              0.13
            ],
            [
              "v47.0",
              0.11
            ],
            [
              "v43.0",
              0.17
            ],
            [
              "v29.0",
              0.26
            ]
          ]
        },
        {
          "name": "Firefox",
          "id": "Firefox",
          "data": [
            [
              "v58.0",
              1.02
            ],
            [
              "v57.0",
              7.36
            ],
            [
              "v56.0",
              0.35
            ],
            [
              "v55.0",
              0.11
            ],
            [
              "v54.0",
              0.1
            ],
            [
              "v52.0",
              0.95
            ],
            [
              "v51.0",
              0.15
            ],
            [
              "v50.0",
              0.1
            ],
            [
              "v48.0",
              0.31
            ],
            [
              "v47.0",
              0.12
            ]
          ]
        },
        {
          "name": "Internet Explorer",
          "id": "Internet Explorer",
          "data": [
            [
              "v11.0",
              6.2
            ],
            [
              "v10.0",
              0.29
            ],
            [
              "v9.0",
              0.27
            ],
            [
              "v8.0",
              0.47
            ]
          ]
        },
        {
          "name": "Safari",
          "id": "Safari",
          "data": [
            [
              "v11.0",
              3.39
            ],
            [
              "v10.1",
              0.96
            ],
            [
              "v10.0",
              0.36
            ],
            [
              "v9.1",
              0.54
            ],
            [
              "v9.0",
              0.13
            ],
            [
              "v5.1",
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
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Ventas'
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
            "drilldown": "Chrome"
          },
          {
            "name": "February",
            "y": 300,
            "drilldown": "Firefox"
          },
          {
            "name": "March",
            "y": 900,
            "drilldown": "Internet Explorer"
          },
          {
            "name": "April",
            "y": 350,
            "drilldown": "Safari"
          }
        ]
      }
    ],
    "drilldown": {
      "series": [
        {
          "name": "Chrome",
          "id": "Chrome",
          "data": [
            [
              "v65.0",
              0.1
            ],
            [
              "v64.0",
              1.3
            ],
            [
              "v63.0",
              53.02
            ],
            [
              "v62.0",
              1.4
            ],
            [
              "v61.0",
              0.88
            ],
            [
              "v60.0",
              0.56
            ],
            [
              "v59.0",
              0.45
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
            ],
            [
              "v55.0",
              0.79
            ],
            [
              "v54.0",
              0.18
            ],
            [
              "v51.0",
              0.13
            ],
            [
              "v49.0",
              2.16
            ],
            [
              "v48.0",
              0.13
            ],
            [
              "v47.0",
              0.11
            ],
            [
              "v43.0",
              0.17
            ],
            [
              "v29.0",
              0.26
            ]
          ]
        },
        {
          "name": "Firefox",
          "id": "Firefox",
          "data": [
            [
              "v58.0",
              1.02
            ],
            [
              "v57.0",
              7.36
            ],
            [
              "v56.0",
              0.35
            ],
            [
              "v55.0",
              0.11
            ],
            [
              "v54.0",
              0.1
            ],
            [
              "v52.0",
              0.95
            ],
            [
              "v51.0",
              0.15
            ],
            [
              "v50.0",
              0.1
            ],
            [
              "v48.0",
              0.31
            ],
            [
              "v47.0",
              0.12
            ]
          ]
        },
        {
          "name": "Internet Explorer",
          "id": "Internet Explorer",
          "data": [
            [
              "v11.0",
              6.2
            ],
            [
              "v10.0",
              0.29
            ],
            [
              "v9.0",
              0.27
            ],
            [
              "v8.0",
              0.47
            ]
          ]
        },
        {
          "name": "Safari",
          "id": "Safari",
          "data": [
            [
              "v11.0",
              3.39
            ],
            [
              "v10.1",
              0.96
            ],
            [
              "v10.0",
              0.36
            ],
            [
              "v9.1",
              0.54
            ],
            [
              "v9.0",
              0.13
            ],
            [
              "v5.1",
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

//Chart Pantalones Skinnys
var chart3 = Highcharts.chart('chart', {
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
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Ventas'
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
            "y": 450,
            "drilldown": "Chrome"
          },
          {
            "name": "February",
            "y": 200,
            "drilldown": "Firefox"
          },
          {
            "name": "March",
            "y": 100,
            "drilldown": "Internet Explorer"
          },
          {
            "name": "April",
            "y": 250,
            "drilldown": "Safari"
          }
        ]
      }
    ],
    "drilldown": {
      "series": [
        {
          "name": "Chrome",
          "id": "Chrome",
          "data": [
            [
              "v65.0",
              0.1
            ],
            [
              "v64.0",
              1.3
            ],
            [
              "v63.0",
              53.02
            ],
            [
              "v62.0",
              1.4
            ],
            [
              "v61.0",
              0.88
            ],
            [
              "v60.0",
              0.56
            ],
            [
              "v59.0",
              0.45
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
            ],
            [
              "v55.0",
              0.79
            ],
            [
              "v54.0",
              0.18
            ],
            [
              "v51.0",
              0.13
            ],
            [
              "v49.0",
              2.16
            ],
            [
              "v48.0",
              0.13
            ],
            [
              "v47.0",
              0.11
            ],
            [
              "v43.0",
              0.17
            ],
            [
              "v29.0",
              0.26
            ]
          ]
        },
        {
          "name": "Firefox",
          "id": "Firefox",
          "data": [
            [
              "v58.0",
              1.02
            ],
            [
              "v57.0",
              7.36
            ],
            [
              "v56.0",
              0.35
            ],
            [
              "v55.0",
              0.11
            ],
            [
              "v54.0",
              0.1
            ],
            [
              "v52.0",
              0.95
            ],
            [
              "v51.0",
              0.15
            ],
            [
              "v50.0",
              0.1
            ],
            [
              "v48.0",
              0.31
            ],
            [
              "v47.0",
              0.12
            ]
          ]
        },
        {
          "name": "Internet Explorer",
          "id": "Internet Explorer",
          "data": [
            [
              "v11.0",
              6.2
            ],
            [
              "v10.0",
              0.29
            ],
            [
              "v9.0",
              0.27
            ],
            [
              "v8.0",
              0.47
            ]
          ]
        },
        {
          "name": "Safari",
          "id": "Safari",
          "data": [
            [
              "v11.0",
              3.39
            ],
            [
              "v10.1",
              0.96
            ],
            [
              "v10.0",
              0.36
            ],
            [
              "v9.1",
              0.54
            ],
            [
              "v9.0",
              0.13
            ],
            [
              "v5.1",
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
//Chart Pantalones Slimns
var chart4 = Highcharts.chart('chart2', {
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
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Ventas'
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
            "y": 600,
            "drilldown": "Chrome"
          },
          {
            "name": "February",
            "y": 400,
            "drilldown": "Firefox"
          },
          {
            "name": "March",
            "y": 250,
            "drilldown": "Internet Explorer"
          },
          {
            "name": "April",
            "y": 400,
            "drilldown": "Safari"
          }
        ]
      }
    ],
    "drilldown": {
      "series": [
        {
          "name": "Chrome",
          "id": "Chrome",
          "data": [
            [
              "v65.0",
              0.1
            ],
            [
              "v64.0",
              1.3
            ],
            [
              "v63.0",
              53.02
            ],
            [
              "v62.0",
              1.4
            ],
            [
              "v61.0",
              0.88
            ],
            [
              "v60.0",
              0.56
            ],
            [
              "v59.0",
              0.45
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
            ],
            [
              "v55.0",
              0.79
            ],
            [
              "v54.0",
              0.18
            ],
            [
              "v51.0",
              0.13
            ],
            [
              "v49.0",
              2.16
            ],
            [
              "v48.0",
              0.13
            ],
            [
              "v47.0",
              0.11
            ],
            [
              "v43.0",
              0.17
            ],
            [
              "v29.0",
              0.26
            ]
          ]
        },
        {
          "name": "Firefox",
          "id": "Firefox",
          "data": [
            [
              "v58.0",
              1.02
            ],
            [
              "v57.0",
              7.36
            ],
            [
              "v56.0",
              0.35
            ],
            [
              "v55.0",
              0.11
            ],
            [
              "v54.0",
              0.1
            ],
            [
              "v52.0",
              0.95
            ],
            [
              "v51.0",
              0.15
            ],
            [
              "v50.0",
              0.1
            ],
            [
              "v48.0",
              0.31
            ],
            [
              "v47.0",
              0.12
            ]
          ]
        },
        {
          "name": "Internet Explorer",
          "id": "Internet Explorer",
          "data": [
            [
              "v11.0",
              6.2
            ],
            [
              "v10.0",
              0.29
            ],
            [
              "v9.0",
              0.27
            ],
            [
              "v8.0",
              0.47
            ]
          ]
        },
        {
          "name": "Safari",
          "id": "Safari",
          "data": [
            [
              "v11.0",
              3.39
            ],
            [
              "v10.1",
              0.96
            ],
            [
              "v10.0",
              0.36
            ],
            [
              "v9.1",
              0.54
            ],
            [
              "v9.0",
              0.13
            ],
            [
              "v5.1",
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

// Modify type of chart
  $('#plain').click(function () {
    chart.update({
      chart: {
        inverted: false,
        polar: false
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
        inverted: true,
        polar: false
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
        polar: true
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