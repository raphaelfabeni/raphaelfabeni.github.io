//Score
function montaScore() {
   $(function () {

   var colors = ['#058dc7', '#f8981d', '#0b4e6a', '#915b17'],
   categories = ['WP', 'A2'],
   name = 'Site A2 Comunicação',
   data = [{
      y: 68,
      color: {
         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
         stops: [
            [0, colors[0]],
            [1, colors[2]]
         ]
      },
      drilldown: {
         name: 'WP'
      }
   }, {
      y: 83,
      color: {
         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
         stops: [
            [0, colors[1]],
            [1, colors[3]]
         ]
      },
      drilldown: {
         name: 'A2'
      }
   }];

   

   var chart = $('#score').highcharts({
      chart: {
         type: 'column',
         backgroundColor: 'transparent'
      },
      credits: {
         enabled: false
      },
      legend: {
         enabled: false
      },
      title: {
         text: 'Score YSlow',
         style: {
            color: '#fff',
            fontSize: '24px',
            fontWeight:' bold'
         }
      },
      xAxis: {
         categories: categories,
         labels: {
            y: 25,
            style: {
               color: '#fff',
               fontSize: '18px',
               fontWeight:' bold'
            }   
         }
      },
      yAxis: {
         min: 0,
         title: {
            text: 'Score',
            style: {
               color: '#fff'
            }
         },
         gridLineColor: '#fff'
      },
      plotOptions: {
         series: {
            shadow: true
         },
         column: {
            borderWidth: 0,
            dataLabels: {
               enabled: true,
               color: '#fff',
               x: 4,
               y: 150,
               style: {
                  fontWeight: 'bold',
                  fontSize: '32px'
               }
            }
         }
      },
      tooltip: {
         headerFormat: '<span class="title-graph">{point.key}</span><table>',
         pointFormat: '<tr><td style="padding:0">Score: </td>' +
         '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
         footerFormat: '</table>',
         shared: true,
         useHTML: true,
         backgroundColor: 'rgba(0, 0, 0, 0.85)'
      },
      series: [{
         name: name,
         data: data,
         color: 'white'
      }],
      exporting: {
         enabled: false
      }
   })
   .highcharts();
   });
}

Reveal.addEventListener( 'score', function() {

   setTimeout(function(){
      montaScore();
   },500);

}, false );

//Requests
function montaRequests() {
   $(function () {

   var colors = ['#058dc7', '#f8981d', '#0b4e6a', '#915b17'],
   categories = ['WP', 'A2'],
   name = 'Site A2 Comunicação',
   data = [{
      y: 67,
      color: {
         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
         stops: [
            [0, colors[0]],
            [1, colors[2]]
         ]
      },
      drilldown: {
         name: 'WP'
      }
   }, {
      y: 28,
      color: {
         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
         stops: [
            [0, colors[1]],
            [1, colors[3]]
         ]
      },
      drilldown: {
         name: 'A2'
      }
   }];

   var chart = $('#requests').highcharts({
      chart: {
         type: 'column',
         backgroundColor: 'transparent'
      },
      credits: {
         enabled: false
      },
      legend: {
         enabled: false
      },
      title: {
         text: 'Requisições',
         style: {
            color: '#fff',
            fontSize: '24px',
            fontWeight:' bold'
         }
      },
      xAxis: {
         categories: categories,
         labels: {
            y: 25,
            style: {
               color: '#fff',
               fontSize: '18px',
               fontWeight:' bold'
            }   
         }
      },
      yAxis: {
         min: 0,
         title: {
            text: 'Requisições',
            style: {
               color: '#fff'
            }
         },
         gridLineColor: '#fff'
      },
      plotOptions: {
         series: {
            shadow: true
         },
         column: {
            borderWidth: 0,
            dataLabels: {
               enabled: true,
               color: '#fff',
               x: 4,
               y: 120,
               style: {
                  fontWeight: 'bold',
                  fontSize: '32px'
               }
            }
         }
      },
      tooltip: {
         headerFormat: '<span class="title-graph">{point.key}</span><table>',
         pointFormat: '<tr><td style="padding:0">Requisições: </td>' +
         '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
         footerFormat: '</table>',
         shared: true,
         useHTML: true,
         backgroundColor: 'rgba(0, 0, 0, 0.85)'
      },
      series: [{
         name: name,
         data: data,
         color: 'white'
      }],
      exporting: {
         enabled: false
      }
   })
   .highcharts();
   });
}

Reveal.addEventListener( 'requests', function() {

   setTimeout(function(){
      montaRequests();
   },500);

}, false );

//Peso
function montaPeso() {
   $(function () {

   var colors = ['#058dc7', '#f8981d', '#0b4e6a', '#915b17'],
   categories = ['WP', 'A2'],
   name = 'Site A2 Comunicação',
   data = [{
      y: 819.8,
      color: {
         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
         stops: [
            [0, colors[0]],
            [1, colors[2]]
         ]
      },
      drilldown: {
         name: 'WP'
      }
   }, {
      y: 450.2,
      color: {
         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
         stops: [
            [0, colors[1]],
            [1, colors[3]]
         ]
      },
      drilldown: {
         name: 'A2'
      }
   }];


   var chart = $('#weight').highcharts({
      chart: {
         type: 'column',
         backgroundColor: 'transparent'
      },
      credits: {
         enabled: false
      },
      legend: {
         enabled: false
      },
      title: {
         text: 'Peso',
         style: {
            color: '#fff',
            fontSize: '24px',
            fontWeight:' bold'
         }
      },
      xAxis: {
         categories: categories,
         labels: {
            y: 25,
            style: {
               color: '#fff',
               fontSize: '18px',
               fontWeight:' bold'
            }   
         }
      },
      yAxis: {
         min: 0,
         title: {
            text: 'Peso (kb)',
            style: {
               color: '#fff'
            }
         },
         gridLineColor: '#fff'
      },
      plotOptions: {
         series: {
            shadow: true
         },
         column: {
            borderWidth: 0,
            dataLabels: {
               enabled: true,
               color: '#fff',
               x: 4,
               y: 120,
               style: {
                  fontWeight: 'bold',
                  fontSize: '32px'
               }
            }
         }
      },
      tooltip: {
         headerFormat: '<span class="title-graph">{point.key}</span><table>',
         pointFormat: '<tr><td style="padding:0">Peso: </td>' +
         '<td style="padding:0"><b>{point.y:.1f}K</b></td></tr>',
         footerFormat: '</table>',
         shared: true,
         useHTML: true,
         backgroundColor: 'rgba(0, 0, 0, 0.85)'
      },
      series: [{
         name: name,
         data: data,
         color: 'white'
      }],
      exporting: {
         enabled: false
      }
   })
   .highcharts();
   });
}

Reveal.addEventListener( 'weight', function() {

   setTimeout(function(){
      montaPeso();
   },500);

}, false );

//Estatisticas
function montaEstatisticas() {
   $(function () {

      var colors = ['#82c6e3', '#5cb5db', '#37a4d2', '#058dc7', '#0478a9', '#04638c', '#034d6d'],
      categories = ['WP', 'A2'],
      name = 'Site A2 Comunicação',
      data = [{
         name: 'HTML/Text',
         y: 51.1,
         color: colors[0],
      }, {
         name: 'JavaScript',
         y: 277.9,
         color: colors[1],
      }, {
         name: 'CSS',
         y: 69.6,
         color: colors[2],
      }, {
         name: 'IFrame',
         y: 26.1,
         color: colors[3],
      }, {
         name: 'CSS (Imagem)',
         y: 87.8,
         color: colors[4],
      }, {
         name: 'Imagem',
         y: 305.7,
         color: colors[5],
      }, {
         name: 'Favicon',
         y: 1.4,
         color: colors[6],
      }];


      var chart = $('#statistics').highcharts({
         chart: {
            backgroundColor: 'transparent'
         },
         credits: {
            enabled: false
         },
         legend: {
            enabled: false
         },
         title: {
            text: 'WP',
            style: {
               color: '#fff',
               fontSize: '24px',
               fontWeight:' bold'
            }
         },
         plotOptions: {
            pie: {
               dataLabels: {
                  enabled: true,
                  color: '#fff',
                  connectorColor: '#fff',
                  formatter: function() {
                      return '<b>'+ this.point.name +'</b>';
                  },
                  distance: 20
               },
               showInLegend: true
            }
         },
         tooltip: {
            headerFormat: '<span class="title-graph">{point.key}</span><table>',
            pointFormat: '<tr><td style="padding:0">Peso: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}K</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
            backgroundColor: 'rgba(0, 0, 0, 0.85)'
         },
         series: [{
            type: 'pie',
            data: data,
            color: 'white'
         }],
         exporting: {
            enabled: false
         }
      })
      .highcharts();
   });

   $(function () {

      var colors = ['#fbc177', '#fab256', '#f9a73f', '#f8981d', '#d38119', '#ae6b14', '#955b11'],
      categories = ['WP', 'A2'],
      name = 'Site A2 Comunicação',
      data = [{
         name: 'HTML/Text',
         y: 29.2,
         color: colors[0],
      }, {
         name: 'JavaScript',
         y: 82.1,
         color: colors[1],
      }, {
         name: 'CSS',
         y: 10.2,
         color: colors[2],
      }, {
         name: 'IFrame',
         y: 26.1,
         color: colors[3],
      }, {
         name: 'CSS (Imagem)',
         y: 115.6,
         color: colors[4],
      }, {
         name: 'Imagem',
         y: 64.5,
         color: colors[5],
      }, {
         name: 'Favicon',
         y: 1.4,
         color: colors[6],
      }, {
         name: 'XMLHttpRequest',
         y: 5.3,
         color: colors[6],
      }];


      var chart = $('#statistics2').highcharts({
         chart: {
            backgroundColor: 'transparent'
         },
         credits: {
            enabled: false
         },
         legend: {
            enabled: false
         },
         title: {
            text: 'A2',
            style: {
               color: '#fff',
               fontSize: '24px',
               fontWeight:' bold'
            }
         },
         plotOptions: {
            pie: {
               dataLabels: {
                  enabled: true,
                  color: '#fff',
                  connectorColor: '#fff',
                  formatter: function() {
                      return '<b>'+ this.point.name +'</b>';
                  },
                  distance: 20
               },
               showInLegend: true
            }
         },
         tooltip: {
            headerFormat: '<span class="title-graph">{point.key}</span><table>',
            pointFormat: '<tr><td style="padding:0">Peso: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}K</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
            backgroundColor: 'rgba(0, 0, 0, 0.85)'
         },
         series: [{
            type: 'pie',
            data: data,
            color: 'white'
         }],
         exporting: {
            enabled: false
         }
      })
      .highcharts();
   });
}

Reveal.addEventListener( 'statistics', function() {

   setTimeout(function(){
      montaEstatisticas();
   },500);

}, false );

//Comparacao Peso
function montaComparacao() {
   $(function () {

   var colors = ['#058dc7', '#f8981d', '#0b4e6a', '#915b17'],
   categories = ['HTML/text', 'JS','CSS', 'IFrame', 'CSS (Imagem)', 'Imagem', 'Favicon', 'XMLHttpRequest'],
   name = 'Site A2 Comunicação';


   var chart = $('#comparative').highcharts({
      chart: {
         type: 'column',
         backgroundColor: 'transparent'
      },
      credits: {
         enabled: false
      },
      legend: {
         enabled: false
      },
      title: {
         text: 'Comparativo Peso',
         style: {
            color: '#fff',
            fontSize: '24px',
            fontWeight:' bold'
         }
      },
      xAxis: {
         categories: categories,
         labels: {
            y: 25,
            style: {
               color: '#fff',
               fontSize: '16px',
               fontWeight:' bold'
            }   
         }
      },
      yAxis: {
         min: 0,
         title: {
            text: 'Peso (kb)',
            style: {
               color: '#fff'
            }
         },
         gridLineColor: '#fff'
      },
      plotOptions: {
         series: {
            shadow: true
         },
         column: {
            borderWidth: 0,
            dataLabels: {
               enabled: true,
               color: '#fff',
               x: 4,
               y: 5,
               style: {
                  fontWeight: 'bold',
                  fontSize: '18px'
               }
            }
         }
      },
      tooltip: {
         headerFormat: '<span class="title-graph">{point.key}</span><table>',
         pointFormat: '<tr><td style="padding:0">{series.name}: </td>' +
         '<td style="padding:0"><b>{point.y:.1f}K</b></td></tr>',
         footerFormat: '</table>',
         shared: true,
         useHTML: true,
         backgroundColor: 'rgba(0, 0, 0, 0.85)'
      },
      series: [{
         name: 'WP',
         color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
               [0, colors[0]],
               [1, colors[2]]
            ]
         },
         data: [51.1, 277.9, 69.6, 26.1, 87.8, 305.7, 1.4, 0]

         }, {
         name: 'A2',
         color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
               [0, colors[1]],
               [1, colors[3]]
            ]
         },
         data: [29.2, 83.2, 10.2, 26.1, 115.6, 179.7, 0.3, 5.3]
         }],
      exporting: {
         enabled: false
      }
   })
   .highcharts();
   });
}

Reveal.addEventListener( 'comparative', function() {

   setTimeout(function(){
      montaComparacao();
   },500);

}, false );

//Comparacao Requisicoes
function montaComparacao2() {
   $(function () {

   var colors = ['#058dc7', '#f8981d', '#0b4e6a', '#915b17'],
   categories = ['HTML/text', 'JS','CSS', 'IFrame', 'CSS (Imagem)', 'Imagem', 'Favicon', 'XMLHttpRequest'],
   name = 'Site A2 Comunicação';


   var chart = $('#comparative2').highcharts({
      chart: {
         type: 'column',
         backgroundColor: 'transparent'
      },
      credits: {
         enabled: false
      },
      legend: {
         enabled: false
      },
      title: {
         text: 'Comparativo Requisições',
         style: {
            color: '#fff',
            fontSize: '24px',
            fontWeight:' bold'
         }
      },
      xAxis: {
         categories: categories,
         labels: {
            y: 25,
            style: {
               color: '#fff',
               fontSize: '16px',
               fontWeight:' bold'
            }   
         }
      },
      yAxis: {
         min: 0,
         title: {
            text: 'Requisições',
            style: {
               color: '#fff'
            }
         },
         gridLineColor: '#fff'
      },
      plotOptions: {
         series: {
            shadow: true
         },
         column: {
            borderWidth: 0,
            dataLabels: {
               enabled: true,
               color: '#fff',
               x: 4,
               y: 5,
               style: {
                  fontWeight: 'bold',
                  fontSize: '18px'
               }
            }
         }
      },
      tooltip: {
         headerFormat: '<span class="title-graph">{point.key}</span><table>',
         pointFormat: '<tr><td style="padding:0">{series.name}: </td>' +
         '<td style="padding:0"><b>{point.y:.1f}K</b></td></tr>',
         footerFormat: '</table>',
         shared: true,
         useHTML: true,
         backgroundColor: 'rgba(0, 0, 0, 0.85)'
      },
      series: [{
         name: 'WP',
         color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
               [0, colors[0]],
               [1, colors[2]]
            ]
         },
         data: [2, 22, 8, 1, 16, 17, 1, 0]

         }, {
         name: 'A2',
         color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
               [0, colors[1]],
               [1, colors[3]]
            ]
         },
         data: [2, 8, 1, 1, 4, 8, 1, 3]
         }],
      exporting: {
         enabled: false
      }
   })
   .highcharts();
   });
}

Reveal.addEventListener( 'comparative2', function() {

   setTimeout(function(){
      montaComparacao2();
   },500);

}, false );

//Page Speed
function pageSpeed() {
   $(function () {

   var colors = ['#058dc7', '#f8981d', '#0b4e6a', '#915b17'],
   categories = ['WP', 'A2'],
   name = 'Site A2 Comunicação',
   data = [{
      y: 68,
      color: {
         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
         stops: [
            [0, colors[0]],
            [1, colors[2]]
         ]
      },
      drilldown: {
         name: 'WP'
      }
   }, {
      y: 85,
      color: {
         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
         stops: [
            [0, colors[1]],
            [1, colors[3]]
         ]
      },
      drilldown: {
         name: 'A2'
      }
   }];

   

   var chart = $('#pagespeed').highcharts({
      chart: {
         type: 'column',
         backgroundColor: 'transparent'
      },
      credits: {
         enabled: false
      },
      legend: {
         enabled: false
      },
      title: {
         text: 'Score Page Speed',
         style: {
            color: '#fff',
            fontSize: '24px',
            fontWeight:' bold'
         }
      },
      xAxis: {
         categories: categories,
         labels: {
            y: 25,
            style: {
               color: '#fff',
               fontSize: '18px',
               fontWeight:' bold'
            }   
         }
      },
      yAxis: {
         min: 0,
         title: {
            text: 'Score',
            style: {
               color: '#fff'
            }
         },
         gridLineColor: '#fff'
      },
      plotOptions: {
         series: {
            shadow: true
         },
         column: {
            borderWidth: 0,
            dataLabels: {
               enabled: true,
               color: '#fff',
               x: 4,
               y: 150,
               style: {
                  fontWeight: 'bold',
                  fontSize: '32px'
               }
            }
         }
      },
      tooltip: {
         headerFormat: '<span class="title-graph">{point.key}</span><table>',
         pointFormat: '<tr><td style="padding:0">Score: </td>' +
         '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
         footerFormat: '</table>',
         shared: true,
         useHTML: true,
         backgroundColor: 'rgba(0, 0, 0, 0.85)'
      },
      series: [{
         name: name,
         data: data,
         color: 'white'
      }],
      exporting: {
         enabled: false
      }
   })
   .highcharts();
   });
}

Reveal.addEventListener( 'pagespeed', function() {

   setTimeout(function(){
      pageSpeed();
   },500);

}, false );