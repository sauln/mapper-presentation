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
      return d[0];
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

  g.selectAll("scatter-dots").data(data).enter().append("svg:circle").attr("cx", function(d, i) {
    return x(d[0]);
  }).attr("cy", function(d) {
    return y(d[1]);
  }).attr("r", 4);



  /// Add connected component overlay

  var crossSectionData = [
    [
      [-15,0],
    [15, 0]
  ],
    [
      [-15, 5],
    [15, 5]
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
      .style("fill", "red");


  /// Add level sets overlay
  var levels = d3.selectAll('#level_sets').select('svg').select('g')

  levels.selectAll("crossSections").data(crossSectionData).enter().append("path")
    .attr("d", crossSectionFunction)
    .attr("stroke", "green")
    .attr("stroke-width", 8)
    .attr("stroke-opacity", 0.3)
    .attr("fill", "none");



});
