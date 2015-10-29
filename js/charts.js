var xml;
var generalreligions = [];
var specificreligions = [];
var seveng = [];
var fourteeng = [];
var sevens = [];
var fourteens = [];
var importants = [];
var seven = [];
var fourteen = [];
var generations = [];
var christian = [];
var other = [];
var unaffiliated = [];
var dontknow = [];

// bar charts
$(document).ready(function loadDataBar() {
  console.log("doc ready");
  $.ajax({
    url: 'data/barchartdata.xml',
    type: 'GET',
    data: 'xml',
    success: parseDataBar
  })
});

function parseDataBar(xml){
  console.log(xml);
  $(xml).find("generalreligion").each(function(index){
    generalreligions.push($(this).attr("name"));
    seveng.push(parseFloat($(this).find("seveng").text()));
    fourteeng.push(parseFloat($(this).find("fourteeng").text()));
  });
  $(xml).find("specificreligion").each(function(index){
    specificreligions.push($(this).attr("name"));
    sevens.push(parseFloat($(this).find("sevens").text()));
    fourteens.push(parseFloat($(this).find("fourteens").text()));
  });
  $(xml).find("generation").each(function(index){
    generations.push($(this).attr("name"));
    christian.push(parseFloat($(this).find("christian").text()));
    other.push(parseFloat($(this).find("other").text()));
    unaffiliated.push(parseFloat($(this).find("unaffiliated").text()));
    dontknow.push(parseFloat($(this).find("dontknow").text()));
  });

  buildBar();
  buildStack();
};

function buildBar(){
$('#bar1').highcharts({

          chart: {
  backgroundColor: '#ffffff',
              type: 'column'
          },

          title: {
              text: '',
  style: {
   color: '#a65c7a',
   font: '20px Titillium+Web',
   fontWeight: 400
  },
          },

    subtitle: {
              text: '',
  style: {
   color: '#a65c7a',

   font: '14px Titillium+Web'
  },
              x: -10,
  y:34
          },

          xAxis: {
              categories: generalreligions,
              title: {
                  text: 'Religion',
                  style: {
                  color: '#000',
                  font: '14px Titillium+Web',
                  fontWeight: '700'
                },
              },
  labels: {
          style: {
              color: '#000',
              font: '12px Titillium+Web'
               },
       }

          },

          yAxis: {
              allowDecimals: false,
              min: 0,
              max: 80,
              tickInterval: 5,
              title: {
                  text: 'Percent who identify',
                  style: {
                  color: '#000',
                  font: '14px Titillium+Web',
                  fontWeight:700,
                },
              },

  labels: {
          style: {
              color: '#000',
              font: '12px Titillium+Web'
               },
       }
          },

          tooltip: {
          //  style: {
          //   color: '#a65c7a',
          //   fontSize: '15px',
          //   fontFamily: 'Titillium+Web'
          // },
          //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          //     pointFormat: '<tr><td style="color:#a65c7a;padding:0">{series.name}: </td>' +
          //         '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
          //     footerFormat: '</table>',
          //     shared: true,
          //     useHTML: true
          },
          plotOptions: {
              column: {
                  pointPadding: 0.2,
                  borderWidth: 0
              }
          },

          series: [{
              name: '2007',
              data: seveng,
              color: '#c27c94'
          }, {
              name: '2014',
              data: fourteeng,
              color: '#a65c7a'
          }]//ends series
      })//ends bar1

      $('#bar2').highcharts({

                chart: {
                  backgroundColor: '#ffffff',
                    type: 'column'
                },

                title: {
                    text: '',
        style: {
         color: '#000',
         font: '20px Titillium+Web',
         fontWeight: 400
        },
                },

          subtitle: {
                    text: '',
        style: {
         color: '#000',

         font: '14px Titillium+Web'
        },
                    x: -10,
                    y:34
                },

                xAxis: {
                    categories: specificreligions,
                    title: {
                        text: 'Religion',
            style: {
            color: '#000',
            font: '14px Titillium+Web',
            fontWeight: '700'
          },
                    },
        labels: {
                style: {
                    color: '#000',
                    font: '12px Titillium+Web'
                     },
             }

                },

                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    max: 55,
                    tickInterval: 5,
                    title: {
                        text: 'Percent who identify',
                        style: {
                        color: '#000',
                        font: '14px Titillium+Web',
                        fontWeight: '700'
          },
                    },

        labels: {
                style: {
                    color: '#000',
                    font: '12px Titillium+Web'
                     },
             }
                },

                tooltip: {
                   style: {
                    color: '#c27c94',
                    fontSize: '15px',
                    fontFamily: 'Titillium+Web'
        },
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:#c27c94;padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },

                series: [{
                    name: '2007',
                    data: sevens,
                    color: '#c27c94'
                }, {
                    name: '2014',
                    data: fourteens,
                    color: '#a65c7a'
                }]//ends series
            })//ends bar2
    };

// end bar charts

function buildStack(){
  $('#stackgraph').highcharts({
        chart: {
            backgroundColor: '#f5f5f5',
            type: 'bar'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: generations,
            labels: {
                    style: {
                        color: '#000',
                        font: '12px Titillium+Web'
                         },
                 }
        },
        yAxis: {
          allowDecimals: false,
          min: 0,
          max: 100,
          tickInterval: 10,
                    title: {
                        text: 'Percent who identify',
            style: {
            color: '#000',
            font: '14px Titillium+Web',
            fontWeight: '700'
          },
                    },

          labels: {
                style: {
                    color: '#000',
                    font: '12px Titillium+Web'
                     },
             }
                },

        legend: {
            reversed: true
        },
        tooltip: {
           style: {
            color: '#a65c7a',
            fontSize: '15px',
            fontFamily: 'Titillium+Web'
},
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:#a65c7a;padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            series: {
                stacking: 'normal',
            }
        },
        series: [{
            name: "Don't know/refused",
            data: dontknow,
            color: '#ffe9ed'
        }, {
            name: 'Unaffiliated',
            data: unaffiliated,
            color: '#dd9eaf'
        }, {
            name: 'Other faiths',
            data: other,
            color: '#c27c94'
        }, {
            name: 'Christian',
            data: christian,
            color: '#a65c7a'
        }]
    }); //end stack
};

//pie chart
$(document).ready(function loadDataPie() {
  console.log("doc ready");
  $.ajax({
    url: 'data/piechartdata.xml',
    type: 'GET',
    data: 'xml',
    success: parseDataPie
  })
});

function parseDataPie(xml){
  console.log(xml);
  $(xml).find("important").each(function(index){
    importants.push($(this).attr("name"));
    seven.push(parseFloat($(this).find("seven").text()));
    fourteen.push(parseFloat($(this).find("fourteen").text()));
  });

  buildPie();
};

function buildPie(){
  $('#pie1').highcharts({
            chart: {
                backgroundColor: '#f5f5f5',
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: "",
                colorByPoint: true,
                data: [{
                    name: "Very important",
                    y: 56,
                    color: '#a65c7a'
                }, {
                    name: "Somewhat important",
                    y: 26,
                    color: '#c27c94'
                }, {
                    name: "Not too important",
                    y: 9,
                    color: '#dd9eaf'
                }, {
                    name: "Not at all important",
                    y: 7,
                    color: '#ffe9ed'
                }, {
                    name: "Don't know/refused",
                    y: 1,
                    color: '#ffffff'
                }]
            }]
        });
        $('#pie2').highcharts({
                  chart: {
                      backgroundColor: '#f5f5f5',
                      plotBorderWidth: null,
                      plotShadow: false,
                      type: 'pie'
                  },
                  title: {
                      text: ''
                  },
                  tooltip: {
                      pointFormat: '<b>{point.percentage:.1f}%</b>'
                  },
                  plotOptions: {
                      pie: {
                          allowPointSelect: true,
                          cursor: 'pointer',
                          dataLabels: {
                              enabled: false
                          },
                          showInLegend: true
                      }
                  },
                  series: [{
                      name: "",
                      colorByPoint: true,
                      data: [{
                          name: "Very important",
                          y: 53,
                          color: '#a65c7a'
                      }, {
                          name: "Somewhat important",
                          y: 24,
                          color: '#c27c94'
                      }, {
                          name: "Not too important",
                          y: 11,
                          color: '#dd9eaf'
                      }, {
                          name: "Not at all important",
                          y: 11,
                          color: '#ffe9ed'
                      }, {
                          name: "Don't know/refused",
                          y: 1,
                          color: '#ffffff'
                      }]
                  }]
              });
      }
//end pie chart

//begin table
$(document).ready(function() {
    $('#table').DataTable( {
        "ajax": 'data/tabledata.js'
    } );
} );
//end table
