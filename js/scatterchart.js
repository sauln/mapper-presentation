d3.json("data/torus.json", function(data) {
  console.log(data[0]);

  var margin = {
      top: 20,
      right: 15,
      bottom: 60,
      left: 60
    },
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  var x = d3.scale.linear().domain([
    d3.min(data, function(d) {
      return d[0];
    }),
    d3.max(data, function(d) {
      return d[0]+4;
    })
  ]).range([0, width]);

  var y = d3.scale.linear().domain([
    d3.min(data, function(d) {
      return d[1];
    }),
    d3.max(data, function(d) {
      return d[1];
    })
  ]).range([height, 0]);

  var chart = d3.selectAll('.scatter-plot')
    .append('svg:svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .attr('class', 'chart')

  var main = chart.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'main')

  var g = main.append("svg:g");

  g.selectAll("scatter-dots").data(data).enter().append("svg:circle")
  .attr("cx", function(d, i) {return x(d[0]);})
  .attr("cy", function(d) {  return y(d[1]);  })
  .attr("r", 4)
  .attr("fill", "steelblue")
  ;



  /// Add connected component overlay

  var crossSectionData = [
    [
      [-15,0], [15, 0]
    ],
    [
      [-15, 5], [15, 5]
    ]
  ]

  var crossSectionFunction = d3.svg.line()
    .x(function(d) { return x(d[0]); })
    .y(function(d) { return y(d[1]); })
    .interpolate("linear");

  var connected = d3.selectAll('#connected_components').select('svg').select('g')

  connected.selectAll("scatter-dots").data(data).enter().append("svg:circle")
      .filter(function(d) {
        return Math.random() < 0.1;  //2< d[1] && d[1] < 4 ;
      })
      .attr("cx", function(d, i) {
        return x(d[0]);
      })
      .attr("cy", function(d) {
        return y(d[1]);
      })
      .attr("r", 4)
      .attr("fill", "red");


  /// Add level sets overlay
  var levels = d3.selectAll('#level_sets').select('svg').select('g')

  levels.selectAll("crossSections").data(crossSectionData).enter().append("path")
    .attr("d", crossSectionFunction)
    .attr("stroke", "green")
    .attr("stroke-width", 8)
    .attr("stroke-opacity", 0.3)
    .attr("fill", "none");


    /// Add level sets overlay

    var rectData = []
    for ( i= -4; i< 6; i++) {
      var mod = Math.abs(i%2);
      rectData.push( [-(16+mod), 3*i, mod]);
    }

    console.log("Interval Data: " + JSON.stringify(rectData));

    // var rectFunc = d3.svg.line()
    //   .x(function(d) { return x(d[0]); })
    //   .y(function(d) { return y(d[1]); })
    //   .interpolate("linear");

    var colorFunction = (d) => {
      if (d[2] == 1) { return "red"}
      else {return "green"}
    }


    var intervals = d3.selectAll('.intervals').select('svg').select('g')

    intervals.selectAll("crossSections").data(rectData).enter().append("rect")
    .attr("x", function(d) { return x(d[0]); })
    .attr("y", function(d) { return y(d[1]); })
    .attr("width", 320)
    .attr("height", 50)
    .attr("opacity", 0.3)
    .attr("stroke", function(d) { return d[2]; })
    .attr("stroke-width", "3")
    .attr("fill", colorFunction)




      // .attr("d", intervalFunction)
      // .attr("stroke", colorFunction)
      // .attr("stroke-width", 8)
      // .attr("stroke-opacity", 0.3)
      // .attr("fill", "none");


    var circleRedData = [
      {
        "x": 0,
        "y": -11,
        "rx": 100,
        "color": "red"
      },
      {
        "x": 10.4,
        "y": -5,
        "color": "red"
      },
      {
        "x": -10.4,
        "y": -5,
        "color": "red"
      },

        {
          "x": 12.4,
          "y": 0.9,
          "color": "red"
        },
        {
          "x": -12.4,
          "y": 0.9,
          "color": "red"
        },
        {
          "x": 10.5,
          "y": 6.5,
          "color": "red"
        },
        {
          "x": -10.5,
          "y": 6.5,
          "color": "red"
        },
        {
          "x": 0,
          "y": 12.7,
          "rx": 100,
          "color": "red"
        }
    ]
    var circleGreenData = [
      {
        "x": 0,
        "y": -13.5,
        "rx": 80,
        "ry": 10,
        "color": "green"
      },
      {
        "x":8.4,
        "y": -8.5,
        "rx": 40,
        "color": "green"
      },
      {
        "x": -8.4,
        "y": -8.5,
        "rx": 40,
        "color": "green"
      },

      {
        "x":11.4,
        "y": -2,
        "color": "green"
      },
      {
        "x": -11.4,
        "y": -2,
        "color": "green"
      },
        {
          "x":11.4,
          "y": 3.8,
          "color": "green"
        },
        {
          "x": -11.4,
          "y": 3.8,
          "color": "green"
        },
        {
          "x": -7.4,
          "y": 10,
          "rx": 60,
          "color": "green"
        },
        {
          "x": 7.4,
          "y": 10,
          "rx": 60,
          "color": "green"
        }


    ]

    function drawColoredClusters(data, color){
      console.log("WE run the cluster drawing function")
      var clusters = d3.selectAll('.'+color).select('svg').select('g')

      clusters.selectAll("clusterOutlines").data(data).enter().append("ellipse")
          .attr("cx", function(d) { return x(d.x); })
          .attr("cy", function(d) { return y(d.y); })
          .attr("rx", function(d) { return d.rx ? d.rx : 30})
          .attr("ry", function(d) { return d.ry ? d.ry : 25})
          .attr("stroke",  function(d) {return d.color; })
          .attr("stroke-width", "3")
          .attr("fill", "none")
    }

    drawColoredClusters(circleRedData, "red")
    drawColoredClusters(circleGreenData, "green")

    var vertices = circleGreenData.concat(circleRedData)
    console.log("The vertices for the complex: " + JSON.stringify(vertices))

    var complex = d3.selectAll('.complex')
      .append('svg:svg')
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom)
      .attr('class', 'chart')

    var mainComplex = complex.append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'main');

    var gComplex = mainComplex.append("svg:g");

    gComplex.selectAll("scatter-dots").data(vertices).enter().append("svg:circle")
      .attr("cx", function(d) { return x(d.x); })
      .attr("cy", function(d) { return y(d.y); })
      .attr("r", 7)
      .attr("fill", function(d) { return d.color; })
      ;

      /// map our random points to edges
    var edges = [
      [circleRedData[0], circleGreenData[0]],
      [circleRedData[0], circleGreenData[1]],
      [circleRedData[0], circleGreenData[2]],
      [circleRedData[1], circleGreenData[1]],
      [circleRedData[1], circleGreenData[3]],
      [circleRedData[2], circleGreenData[2]],
      [circleRedData[2], circleGreenData[4]],

      [circleRedData[3], circleGreenData[3]],
      [circleRedData[3], circleGreenData[5]],
      [circleRedData[4], circleGreenData[4]],

      [circleRedData[4], circleGreenData[6]],
      [circleRedData[5], circleGreenData[5]],
      [circleRedData[5], circleGreenData[8]],
      [circleRedData[6], circleGreenData[6]],

      [circleRedData[6], circleGreenData[7]],
      [circleRedData[7], circleGreenData[7]],
      [circleRedData[7], circleGreenData[8]]
    ]


    var edgeFunction = d3.svg.line()
      .x(function(d) { return x(d.x); })
      .y(function(d) { return y(d.y); })
      .interpolate("linear");

    var edgesG = d3.selectAll('.edges').select('svg').select('g')

    edgesG.selectAll("edge").data(edges).enter().append("path")
      .attr("d", edgeFunction)
      .attr("stroke", "steelblue")
      .attr("stroke-width", 5)
      .attr("stroke-opacity", 0.7)
      .attr("fill", "none");






});
