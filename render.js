import {loadPage} from '/loadPage.js'

export const render = (selection, data) => {
  topicMap(selection, data, {height, width})
}

export function topicMap (selection, data, props) {
  const { height, width } = props;
  let topics = data.broader_topics
  let links = data.broader_links
  let thisTopic = data.current_topic

  links.forEach(function (l) {
    l.source = l.narrower_topic_id;
    l.target = l.broader_topic_id;
  });

  topics.map((obj) => {
  if (obj.id === thisTopic.id) {
    obj.fy = height + 15;
  }
  else if (obj.id === 210) {
    obj.fy = 10;
  }
})

  console.log("render: " + thisTopic.definition)
  console.log("topics: " + topics)

//remove old elipses


  //set up the simulation
  var simulation = d3.forceSimulation()
    .nodes(topics);

  //add forces
  simulation
  .force("charge_force", d3.forceManyBody())
  .force("center_force", d3.forceCenter(width / 2, height / 2));

  var nodes = selection.append("g")
    .attr("class", "nodes")
    .selectAll("ellipse").data(topics)
    .enter()
    .append("ellipse")
    // .attr("class", "nodes")
    .attr("ry", 15)
    .attr("rx", 35)
    .attr("fill", "white")
    .attr("stroke-dasharray", 2);

  //create a force for the links
  var link_force = d3.forceLink(links)
    .id(function (d) { return d.id; })

  //add link force to the simulation
  simulation.force("links", link_force)

  var link = selection.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(links)
  .enter().append("line")
  .attr("stroke-width", 2);

  var text = selection.append("g")
  .attr("class", "node-text")
  .attr("text-anchor", "middle")
  .selectAll("text")
  .data(topics)
  .enter()
  .append("text")
  .attr("id", function (d) { return "node-text" + d.id })
  .on('click', function(d) {
    console.log(d, 'click ---')
    loadPage(changableData1, d);
  })
  .text((d) => d.definition)
  // .call(wrap)
  .attr("opacity", 0.7)
  ;

  var nodeOver = selection.append("g")
    .attr("class", "nodes")
    .selectAll("ellipse")
    .data(topics)
    .enter()
    .append("a")
    // .attr("xlink:href", function (d) { return linkAddress + d.id })
    .append("ellipse")
    .attr("ry", 10)
    .attr("rx", 30)
    .attr("fill", "white")
    .attr("opacity", 0)
  .on("mouseover", function (d) {
    d3.select("#node-text" + d.id)
      // d3.select(function (d) { return "#node-text" + d.id.toString })
      .transition()
      .attr("opacity", 1)
       .attr("font-size", "130%")
      .attr("font-weight", "bold")
      ;
  })
  .on("mouseout", function (d) {
    d3.select("#node-text" + d.id)
      // d3.select(function (d) { return "#node-text" + d.id.toString })
      .transition()
      .attr("font-size", "100%")
      .attr("opacity", 0.7)
      .attr("font-weight", "normal");
  })

  //update positions each tick of the simulation
  function tickActions() {
    nodes
      .attr("cx", function (d) { return d.x; })
      .attr("cy", function (d) { return d.y; })

    link
      .attr("x1", function (d) { return d.source.x; })
      .attr("y1", function (d) { return d.source.y; })
      .attr("x2", function (d) { return d.target.x; })
      .attr("y2", function (d) { return d.target.y; });

    text
      .attr("x", function (d) { return d.x; })
      .attr("y", function (d) { return d.y + 5; });

    nodeOver
      .attr("cx", function (d) { return d.x; })
      .attr("cy", function (d) { return d.y; });
    }


  //add tick instructions:
  simulation.on("tick", tickActions);

}
