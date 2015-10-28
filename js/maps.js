$(function () {

  console.log("maps called");


    // Load the data from a Google Spreadsheet
    // https://docs.google.com/a/highsoft.com/spreadsheet/pub?hl=en_GB&hl=en_GB&key=0AoIaUO7wH1HwdFJHaFI4eUJDYlVna3k5TlpuXzZubHc&output=html
    Highcharts.data({

        googleSpreadsheetKey: '15jFojTiBpH2KmOf64wiLKFU7tZ2KGZJSLqlJQW2_5E8',

        // custom handler when the spreadsheet is parsed
        parsed: function (columns) {

            // Read the columns into the data array
            var data = [];

            $.each(columns[0], function (i, code) {
                data.push({
                    code: code.toUpperCase(),
                    value: parseFloat(columns[2][i]),
                    name: columns[1][i]
                });
            });
            console.log(data);


            // Initiate the chart
            $('#usmap2').highcharts('Map', {
                chart : {
                    borderWidth : 0,
                    backgroundColor: '#fff'
                },

                colors: ['#ffe9ed', '#f9c0ca', '#dd9eaf',
                    '#c27c94', '#a65c7a'],

                title : {
                    text : null
                },

                mapNavigation: {
                    enabled: true
                },

                legend: {
                    title: {
                        text: 'Percentage of<br />individuals<br />identifying<br />as unaffiliated',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                        }
                    },
                    align: 'right',
                    verticalAlign: 'bottom',
                    floating: true,
                    layout: 'vertical',
                    valueDecimals: 0,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.85)',
                    symbolRadius: 0,
                    symbolHeight: 14
                },

                colorAxis: {
                    dataClasses: [{
                        to: 20,
                        color: '#ffe9ed'
                    }, {
                        from: 21,
                        to: 30,
                        color: '#dd9eaf'
                    }, {
                        from: 31,
                        color: '#a65c7a'
                    }]
                },

                series : [{
                    data : data,
                    mapData: Highcharts.maps['countries/us/us-all'],
                    joinBy: ['postal-code', 'code'],
                    animation: true,
                    name: 'Percent Unaffiliated',
                    states: {
                        hover: {
                            color: '#fff'
                        }
                    },
                    tooltip: {
                        valueSuffix: '%'
                    }
                }]
            });
        },
        error: function () {
            $('#usmap1').html('<div class="loading">' +
                '<i class="icon-frown icon-large"></i> ' +
                'Error loading data from Google Spreadsheets' +
                '</div>');
        }
    });
});


$(function () {

  console.log("maps called");


    // Load the data from a Google Spreadsheet
    // https://docs.google.com/a/highsoft.com/spreadsheet/pub?hl=en_GB&hl=en_GB&key=0AoIaUO7wH1HwdFJHaFI4eUJDYlVna3k5TlpuXzZubHc&output=html
    Highcharts.data({

    googleSpreadsheetKey: '1jgeb41K8DKbCs3dbAXnvo_d4i79CGTx5wu0Q6kibD1Y',

    // custom handler when the spreadsheet is parsed
    parsed: function (columns) {

        // Read the columns into the data array
        var data = [];

        $.each(columns[0], function (i, code) {
            data.push({
                code: code.toUpperCase(),
                value: parseFloat(columns[2][i]),
                name: columns[1][i]
            });
        });
        console.log(data);


        // Initiate the chart
        $('#usmap1').highcharts('Map', {
            chart : {
                borderWidth : 0,
                backgroundColor: '#fff'
            },

            colors: ['#ffe9ed', '#f9c0ca', '#dd9eaf',
                '#c27c94', '#a65c7a'],

            title : {
                text : null
            },

            mapNavigation: {
                enabled: true
            },

            legend: {
                title: {
                    text: 'Percentage of<br />individuals<br />identifying<br />as Christian',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black',
                    }
                },
                align: 'right',
                verticalAlign: 'bottom',
                floating: true,
                layout: 'vertical',
                valueDecimals: 0,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.85)',
                symbolRadius: 0,
                symbolHeight: 14
            },

            colorAxis: {
                dataClasses: [{
                    to: 65,
                    color: '#ffe9ed'
                }, {
                    from: 66,
                    to: 80,
                    color: '#dd9eaf'
                }, {
                    from: 81,
                    color: '#a65c7a'
                }]
            },

            series : [{
                data : data,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['postal-code', 'code'],
                animation: true,
                name: 'Percent Christian',
                states: {
                    hover: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    valueSuffix: '%'
                }
            }]
        });
    },
    error: function () {
        $('#usmap1').html('<div class="loading">' +
            '<i class="icon-frown icon-large"></i> ' +
            'Error loading data from Google Spreadsheets' +
            '</div>');
    }
    });
});

var xml;
var regions = [];
var christian1 = [];
var other1 = [];
var unaffiliated1 = [];
var dontknow1 = [];

$(document).ready(function loadDataMapBar() {
  console.log("doc ready");
  $.ajax({
    url: 'data/regions.xml',
    type: 'GET',
    data: 'xml',
    success: parseDataMapBar
  })
});

function parseDataMapBar(xml){
  console.log(xml);

  $(xml).find("region").each(function(index){
    regions.push($(this).attr("name"));
    christian1.push(parseFloat($(this).find("christian1").text()));
    other1.push(parseFloat($(this).find("other1").text()));
    unaffiliated1.push(parseFloat($(this).find("unaffiliated1").text()));
    dontknow1.push(parseFloat($(this).find("dontknow1").text()));
  });

  buildMapBar();
};

function buildMapBar(){
  $('#mapbar').highcharts({
        chart: {
            backgroundColor: '#fff',
            type: 'bar'
        },
        title: {
            text: null
        },
        xAxis: {
            categories: regions,
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
        // plotOptions: {
        //     column: {
        //         pointPadding: 0.2,
        //         borderWidth: 0
        //     }
        // },
        series: [{
            name: 'Unaffiliated',
            data: unaffiliated1,
            color: '#dd9eaf'
        }, {
            name: 'Other faiths',
            data: other1,
            color: '#c27c94'
        }, {
            name: 'Christian',
            data: christian1,
            color: '#a65c7a'
        }]
    }); //end stack
};
