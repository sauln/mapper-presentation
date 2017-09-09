d3.json("../data/torus.json", function(data) {
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
        [12.4, 0.9],
        [-12.4, 0.9]
    ]
    var circleGreenData = [
        [11.4, 3.8],
        [-11.4, 3.8]
    ]

    function drawColoredClusters(data, color){
      console.log("WE run the cluster drawing function")
      var clusters = d3.selectAll('.'+color).select('svg').select('g')

      clusters.selectAll("clusterOutlines").data(data).enter().append("circle")
          .attr("cx", function(d) { return x(d[0]); })
          .attr("cy", function(d) { return y(d[1]); })
          .attr("r", 29)
          .attr("stroke",  color)
          .attr("stroke-width", "3")
          .attr("fill", "none")
    }

    drawColoredClusters(circleRedData, "red")
    drawColoredClusters(circleGreenData, "green")
    //
    // var clusters = d3.selectAll('.red').select('svg').select('g')
    //
    // clusters.selectAll("clusterOutlines").data(circleRedData).enter().append("circle")
    //     .attr("cx", function(d) { return x(d[0]); })
    //     .attr("cy", function(d) { return y(d[1]); })
    //     .attr("r", 30)
    //     .attr("stroke", "red")
    //     .attr("stroke-width", "3")
    //     .attr("fill", "none")
    //

      //
      // clusters = d3.selectAll('.green').select('svg').select('g')
      //
      // clusters.selectAll("clusterOutlines").data(circleGreenData).enter().append("circle")
      //     .attr("cx", function(d) { return x(d[0]); })
      //     .attr("cy", function(d) { return y(d[1]); })
      //     .attr("r", 30)
      //     .attr("stroke", function(d) { "green" })
      //     .attr("stroke-width", "3")
      //     .attr("fill", "none")
      //


        // .style("fill", "none")
        // .style("stroke-width", 5)
        // .style("stroke", "red");
    //
    //
    // .append("circle")
    //   .attr("cx", function (d) { return x(d[0]) })
    //   .attr("cy", function (d) { return y(d[1]) })
    //   .attr("r",  function (d) { return d[2] })
    //   .style("stroke", "red")
    //   .style("fill", "none")









});
