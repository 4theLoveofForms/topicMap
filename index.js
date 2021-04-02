// import * from './d3';

var svg3 = d3.select("body").append("svg")
    .attr("width", 450)
    .attr("height", 500);

svg3.append("foreignObject")
    .attr("width", 300)
    .attr("height", 500)
  .append("xhtml:body")
    .style("font", "14px 'Helvetica Neue'")
    .html("<h1>An HTML Foreign Object in SVG</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu enim quam. Quisque nisi risus, sagittis quis tempor nec, aliquam eget neque. Nulla bibendum semper lorem non ullamcorper. Nulla non ligula lorem. Praesent porttitor, tellus nec suscipit aliquam, enim elit posuere lorem, at laoreet enim ligula sed tortor. Ut sodales, urna a aliquam semper, nibh diam gravida sapien, sit amet fermentum purus lacus eget massa. Donec ac arcu vel magna consequat pretium et vel ligula. Donec sit amet erat elit. Vivamus eu metus eget est hendrerit rutrum. Curabitur vitae orci et leo interdum egestas ut sit amet dui. In varius enim ut sem posuere in tristique metus ultrices.<p>Integer mollis massa at orci porta vestibulum. Pellentesque dignissim turpis ut tortor ultricies condimentum et quis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod lorem vulputate dui pharetra luctus. Sed vulputate, nunc quis porttitor scelerisque, dui est varius ipsum, eu blandit mauris nibh pellentesque tortor. Vivamus ultricies ante eget ipsum pulvinar ac tempor turpis mollis. Morbi tortor orci, euismod vel sagittis ac, lobortis nec est. Quisque euismod venenatis felis at dapibus. Vestibulum dignissim nulla ut nisi tristique porttitor. Proin et nunc id arcu cursus dapibus non quis libero. Nunc ligula mi, bibendum non mattis nec, luctus id neque. Suspendisse ut eros lacus. Praesent eget lacus eget risus congue vestibulum. Morbi tincidunt pulvinar lacus sed faucibus. Phasellus sed vestibulum sapien.");


const changableData1 = {"broader_topics":[{"id":125,"definition":"Acting to feed ourselves","created_at":"2020-09-16T15:14:39.137Z","updated_at":"2020-09-16T15:14:39.137Z","elaboration":null},{"id":4,"definition":"Interacting with existence","created_at":"2020-03-18T19:33:15.231Z","updated_at":"2020-03-18T22:11:48.917Z","elaboration":null},{"id":66,"definition":"Choosing at some level of consciousness","created_at":"2020-04-11T08:38:37.294Z","updated_at":"2020-10-20T12:48:42.850Z","elaboration":null},{"id":210,"definition":"Existing","created_at":"2020-12-01T18:22:06.117Z","updated_at":"2020-12-01T18:22:06.117Z","elaboration":null},{"id":12,"definition":"Cultivating a crop of something living. A crop is collecting together and amassing something.","created_at":"2020-03-19T10:24:50.304Z","updated_at":"2020-12-03T18:26:27.849Z","elaboration":null}],"broader_links":[{"id":96,"broader_topic_id":4,"narrower_topic_id":125,"created_at":"2020-09-16T15:14:59.100Z","updated_at":"2020-09-16T15:14:59.100Z"},{"id":170,"broader_topic_id":66,"narrower_topic_id":4,"created_at":"2020-10-19T12:01:53.474Z","updated_at":"2020-10-19T12:01:53.474Z"},{"id":189,"broader_topic_id":210,"narrower_topic_id":66,"created_at":"2020-12-01T18:22:06.251Z","updated_at":"2020-12-01T18:22:06.251Z"},{"id":95,"broader_topic_id":125,"narrower_topic_id":12,"created_at":"2020-09-16T15:14:39.165Z","updated_at":"2020-09-16T15:14:39.165Z"}],"current_topic":{"id":12,"definition":"Cultivating a crop of something living. A crop is collecting together and amassing something.","created_at":"2020-03-19T10:24:50.304Z","updated_at":"2020-12-03T18:26:27.849Z","elaboration":null},"narrower_topics":[{"id":72,"definition":"the act of growing tea (Camellia Sinensis)","ancestry_depth":1},{"id":88,"definition":"The practice of breeding and raising animals","ancestry_depth":1},{"id":79,"definition":"Supporting the growth of pigs with the aim of harvesting product from them.","ancestry_depth":2},{"id":81,"definition":"The act of choosing the flooring provided in a pigs habitat","ancestry_depth":3},{"id":82,"definition":"Giving antibiotics to pigs ","ancestry_depth":3},{"id":80,"definition":"Selecting and/or designing the living habitat of pigs.","ancestry_depth":3},{"id":208,"definition":"Acting to care for the health and vitality of domesticated animals","ancestry_depth":2},{"id":206,"definition":"The act of giving antibiotics to domesticated animals","ancestry_depth":3},{"id":11,"definition":"Caring for workers specifically in a farm environment ","ancestry_depth":1},{"id":132,"definition":"Cultivating a crop of something living that is rooted to the ground.","ancestry_depth":1},{"id":138,"definition":"The act of cultivating a crop of wood from something living that is rooted to the ground ","ancestry_depth":2},{"id":190,"definition":"The act of growing palm trees","ancestry_depth":2},{"id":227,"definition":"Acting to protect or enhance soils fertility","ancestry_depth":2},{"id":226,"definition":"Preparing soil for growing in by mechanical agitation or lack thereof. extra text extra text extra text extra text extra text extra text extra text extra text extra text extra text extra text ","ancestry_depth":3},{"id":12,"definition":"Cultivating a crop of something living. A crop is collecting together and amassing something.","ancestry_depth":0}],"narrower_topic_links":[{"id":44,"broader_topic_id":88,"narrower_topic_id":79,"created_at":"2020-08-11T10:41:44.559Z","updated_at":"2020-08-11T10:41:44.559Z"},{"id":187,"broader_topic_id":88,"narrower_topic_id":208,"created_at":"2020-10-23T12:36:55.865Z","updated_at":"2020-10-23T12:36:55.865Z"},{"id":26,"broader_topic_id":79,"narrower_topic_id":80,"created_at":"2020-07-14T14:33:11.399Z","updated_at":"2020-07-14T14:33:11.399Z"},{"id":27,"broader_topic_id":79,"narrower_topic_id":81,"created_at":"2020-07-14T14:39:09.650Z","updated_at":"2020-07-14T14:39:09.650Z"},{"id":30,"broader_topic_id":79,"narrower_topic_id":82,"created_at":"2020-07-14T14:42:59.495Z","updated_at":"2020-07-14T14:42:59.495Z"},{"id":186,"broader_topic_id":208,"narrower_topic_id":206,"created_at":"2020-10-23T12:36:35.143Z","updated_at":"2020-10-23T12:36:35.143Z"},{"id":184,"broader_topic_id":206,"narrower_topic_id":82,"created_at":"2020-10-23T12:34:28.416Z","updated_at":"2020-10-23T12:34:28.416Z"},{"id":109,"broader_topic_id":132,"narrower_topic_id":138,"created_at":"2020-09-16T18:16:13.667Z","updated_at":"2020-09-16T18:16:13.667Z"},{"id":167,"broader_topic_id":132,"narrower_topic_id":190,"created_at":"2020-10-12T15:47:50.608Z","updated_at":"2020-10-12T15:47:50.608Z"},{"id":215,"broader_topic_id":132,"narrower_topic_id":227,"created_at":"2020-12-16T15:48:51.874Z","updated_at":"2020-12-16T15:48:51.874Z"},{"id":214,"broader_topic_id":227,"narrower_topic_id":226,"created_at":"2020-12-16T15:47:05.563Z","updated_at":"2020-12-16T15:47:05.563Z"},{"id":5,"broader_topic_id":12,"narrower_topic_id":11,"created_at":"2020-03-19T10:25:09.272Z","updated_at":"2020-03-19T10:25:09.272Z"},{"id":48,"broader_topic_id":12,"narrower_topic_id":88,"created_at":"2020-08-19T11:36:42.312Z","updated_at":"2020-08-19T11:36:42.312Z"},{"id":67,"broader_topic_id":12,"narrower_topic_id":72,"created_at":"2020-08-24T11:12:14.447Z","updated_at":"2020-08-24T11:12:14.447Z"},{"id":102,"broader_topic_id":12,"narrower_topic_id":132,"created_at":"2020-09-16T17:40:38.778Z","updated_at":"2020-09-16T17:40:38.778Z"}]}

const changableData2 = {"broader_topics":[{"id":4,"definition":"Interacting with existence","created_at":"2020-03-18T19:33:15.231Z","updated_at":"2020-03-18T22:11:48.917Z","elaboration":null},{"id":66,"definition":"Choosing at some level of consciousness","created_at":"2020-04-11T08:38:37.294Z","updated_at":"2020-10-20T12:48:42.850Z","elaboration":null},{"id":210,"definition":"Existing","created_at":"2020-12-01T18:22:06.117Z","updated_at":"2020-12-01T18:22:06.117Z","elaboration":null},{"id":219,"definition":"Doing stuff to intentionally affect the characteristics of the offspring of a living being","created_at":"2020-12-09T17:39:06.195Z","updated_at":"2020-12-09T17:39:06.195Z","elaboration":null}],"broader_links":[{"id":170,"broader_topic_id":66,"narrower_topic_id":4,"created_at":"2020-10-19T12:01:53.474Z","updated_at":"2020-10-19T12:01:53.474Z"},{"id":189,"broader_topic_id":210,"narrower_topic_id":66,"created_at":"2020-12-01T18:22:06.251Z","updated_at":"2020-12-01T18:22:06.251Z"},{"id":207,"broader_topic_id":4,"narrower_topic_id":219,"created_at":"2020-12-09T17:44:05.055Z","updated_at":"2020-12-09T17:44:05.055Z"}],"current_topic":{"id":219,"definition":"Doing stuff to intentionally affect the characteristics of the offspring of a living being","created_at":"2020-12-09T17:39:06.195Z","updated_at":"2020-12-09T17:39:06.195Z","elaboration":null},"narrower_topics":[{"id":211,"definition":"The act of coming together with the intention of breeding","ancestry_depth":1},{"id":69,"definition":"The act of giving birth ","ancestry_depth":2},{"id":70,"definition":"The act of giving birth in water","ancestry_depth":3},{"id":67,"definition":"Giving birth in the company of dolphins. So the dolphins are actually there close enough to be socially interacting.","ancestry_depth":3},{"id":220,"definition":"Selecting particular other living beings to breed","ancestry_depth":1},{"id":88,"definition":"The practice of breeding and raising animals","ancestry_depth":2},{"id":79,"definition":"Supporting the growth of pigs with the aim of harvesting product from them.","ancestry_depth":3},{"id":208,"definition":"Acting to care for the health and vitality of domesticated animals","ancestry_depth":3},{"id":217,"definition":"Manipulating an organisms genes by introducing, eliminating or rearranging specific genes using many laboratory techniques, for example, involving reactions in test tubes or using viruses added to cells but not including methods like cross-pollinating or selective breeding.","ancestry_depth":1},{"id":218,"definition":"Growing organisms that have had their genes with genetic any engineering techniques","ancestry_depth":2},{"id":216,"definition":"Growing Genetically Engineered Organisms (GMO)s  in uncontrolled environments and for consumption","ancestry_depth":3},{"id":219,"definition":"Doing stuff to intentionally affect the characteristics of the offspring of a living being","ancestry_depth":0}],"narrower_topic_links":[{"id":191,"broader_topic_id":211,"narrower_topic_id":69,"created_at":"2020-12-02T21:09:55.068Z","updated_at":"2020-12-02T21:09:55.068Z"},{"id":19,"broader_topic_id":69,"narrower_topic_id":67,"created_at":"2020-04-12T09:42:03.642Z","updated_at":"2020-04-12T09:42:03.642Z"},{"id":20,"broader_topic_id":69,"narrower_topic_id":70,"created_at":"2020-04-12T09:56:43.570Z","updated_at":"2020-04-12T09:56:43.570Z"},{"id":205,"broader_topic_id":220,"narrower_topic_id":88,"created_at":"2020-12-09T17:41:23.685Z","updated_at":"2020-12-09T17:41:23.685Z"},{"id":44,"broader_topic_id":88,"narrower_topic_id":79,"created_at":"2020-08-11T10:41:44.559Z","updated_at":"2020-08-11T10:41:44.559Z"},{"id":187,"broader_topic_id":88,"narrower_topic_id":208,"created_at":"2020-10-23T12:36:55.865Z","updated_at":"2020-10-23T12:36:55.865Z"},{"id":202,"broader_topic_id":217,"narrower_topic_id":218,"created_at":"2020-12-09T17:36:35.982Z","updated_at":"2020-12-09T17:36:35.982Z"},{"id":201,"broader_topic_id":218,"narrower_topic_id":216,"created_at":"2020-12-09T17:14:55.487Z","updated_at":"2020-12-09T17:14:55.487Z"},{"id":203,"broader_topic_id":219,"narrower_topic_id":217,"created_at":"2020-12-09T17:39:06.235Z","updated_at":"2020-12-09T17:39:06.235Z"},{"id":204,"broader_topic_id":219,"narrower_topic_id":220,"created_at":"2020-12-09T17:41:10.542Z","updated_at":"2020-12-09T17:41:10.542Z"},{"id":206,"broader_topic_id":219,"narrower_topic_id":211,"created_at":"2020-12-09T17:42:39.508Z","updated_at":"2020-12-09T17:42:39.508Z"}]}

console.log(changableData1)
// let object1 = JSON.parse(changableData1)
// console.log(object1)

d3.select('h1').append('button')
  .text('data set 1')
  .on('click', () => {
    console.log(changableData1)
    loadPage(changableData1)
  })

d3.select('h1').append('button')
  .text('data set 2')
  .on('click', () => {
    console.log(changableData2)
    loadPage(changableData2)
  })

  d3.select('h1').append('button')
    .text('clear')
    .on('click', () => {
      console.log(changableData2)
      clear()
    })

  function clear () {
    d3.selectAll('g').remove()
  }

//create somewhere to put the force directed graph
var svg1 = d3.select("svg.broader-network"),
  width = +svg1.attr("width"),
  height = +svg1.attr("height")

// var raduis = 15

var svg2 = d3.select("svg.narrower-network")

loadPage(changableData1)

function loadPage(changingData, d = "") {
  // var xhttp = new XMLHttpRequest();
  // xhttp.open("GET", "/center_node.json?&id=" + id , true);
  // xhttp.send();
  // xhttp.onreadystatechange = (e) => {
  //   console.log(xhttp.responseText)
  // }
  // xhttp.onload = function() {
    // const data = JSON.parse(xhttp.responseText);
    var data = changingData
    console.log()
    // document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(data.current_topic.definition);
    document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(d) + "y:" + JSON.stringify(d.y);
    // d3.selectAll('text').transition(10000)
    //   .attr('opacity', 0)


    document.getElementById("linkBroaderForm").action = "/topics/"+ changingData.current_topic.id + "/create_linked";
    document.getElementById("linksLink").href = "/where/" + changingData.current_topic.id

//remove old elipses
    d3.selectAll('g')
      .remove();
      // .attr('hidden', true);

    d3.select('div.oval')
      .attr("hidden",true);
      // .remove()
    // .attr('opacity', 0);

    d3.select('svg#oval')
      .attr('opacity', 0)
      .attr("ry", 0)
      .attr("rx", 0);

  console.log("loadPage clicked: is it narrower? " + d.narrower)
  let selection = ""
  if (d.narrower == false) {
    selection = svg1
  }
  else {
    selection = svg2
  }

  // Draw a new oval in the same pasition as the clicked one.
  // if there is an x position to draw the allow (i dont know how to say that)
  if (d.x ) {
    console.log('animate')
    selection.append('ellipse')
    .attr('class', 'animation')
    .attr("fill", "yellow")
    .attr("stroke", 'black')
    .attr("stroke-width", "2")
    .attr("ry", 15)
    .attr("rx", 35)
    // .attr("fill", "white")
    .attr("stroke-dasharray", 2)
    .attr("cx", () => { return d.x; })
    .attr("cy", () => { return d.y; })
  }


  // wait a moment then animate it growing and moving down or up
    setTimeout(() => {
      d3.select('.animation').transition(500)
        .attr("ry", 15 * 5)
        .attr("rx", 35 * 5)
        // .attr("cx", (d.narrower) ? height : "0px")
        .attr("cx", width / 2)
        .attr("cy", (d.narrower == false) ? height + 100 : -100)
        .remove()
    }, 50)

  // wait a moment then bring the big oval back in and render the map
    setTimeout(() => {
      d3.select('div.oval').attr("hidden",null);
      d3.select('svg#oval')
        .transition(10)
        .attr('opacity', 1)
        .attr("ry", 15 * 5)
        .attr("rx", 35 * 5)
        render(svg1, data)
        render(svg2, data)
    }, 90)
  }
// }

function render (selection, data) {

  let topics = []
  let links = []
  let thisTopic = data.current_topic

  if (selection == svg1) {
    console.log("selection is svg1")
    topics = data.broader_topics
    links = data.broader_links
    // console.log(links[0].broader_topic_id)
    topics.forEach(function (t) {
      t.narrower = false;
    });
  }
  else {
    topics = data.narrower_topics
    links = data.narrower_topic_links
    console.log("selection is svg2")
    topics.forEach(function (t) {
      t.narrower = true;
    });
  }
 console.log(topics[0].narrower)

// i think this changes the name of the key to what d3 wants it to be
  links.forEach(function (l) {
    l.source = l.narrower_topic_id;
    l.target = l.broader_topic_id;
  });

// this sets important nodes (existing and current topis) at the fixed positions at the top and bottom
  topics.map((topic) => {
  if (topic.id === thisTopic.id && selection == svg1) {
    topic.fy = height + 15;
  }
  else if (topic.id === thisTopic.id && selection == svg2) {
    topic.fy = - 15;
  }
  else if (topic.id === 210) {
    topic.fy = 10;
  }
})

  console.log("render: " + thisTopic.definition)
  console.log("topics: " + topics)


  //set up the simulation
  var simulation = d3.forceSimulation()
    .nodes(topics);

  //add forces
  // simulation
  // .force("charge_force", d3.forceManyBody().distanceMax(30))
  // .force("center_force", d3.forceCenter(width / 2, height / 2))

  if (selection == svg1) {
    // alternative forces (ment for top only)
    simulation
      .force("charge_force", d3.forceManyBody().strength(-300))
      // .force("center_force", d3.forceCenter(width / 2, height / 2))
      .force('x', d3.forceX().x(width / 2).strength(0.1))
      .force('y', d3.forceY().y(height / 2).strength(0.015))
  }
  else if (selection == svg2) {
    // alternative forces (ment for bottom only)
    simulation
    .force("charge_force", d3.forceManyBody().strength(-100))
    .force('x', d3.forceX().x(width / 2).strength(0.1))
    .force('y', d3.forceY().y(height - 50).strength(0.025))
    // .force('collision', d3.forceCollide().radius(10))
    // ;
  }

  // alternative forces (ment for top only)
  // simulation
  //   .force("charge_force", d3.forceManyBody().strength(-300))
  //   // .force("center_force", d3.forceCenter(width / 2, height / 2))
  //   .force('x', d3.forceX().x(width / 2).strength(0.1))
  //   .force('y', d3.forceY().y(height / 2).strength(0.015))
  // alternative forces (ment for bottom only)
  // simulation
  // .force("charge_force", d3.forceManyBody().strength(-100))
  // .force('x', d3.forceX().x(width / 2).strength(0.1))
  // .force('y', d3.forceY().y(height - 50).strength(0.025))
  // // .force('collision', d3.forceCollide().radius(10))
  // ;

  var nodes = selection.append("g")
    .attr("class", "nodes")
    .selectAll("ellipse").data(topics)
    .enter()
    .append("ellipse")
    .attr("id", function (d) { return "node" + d.id })
    // .attr("class", "nodes")
    .attr("ry", function (d) {
        if (d.ancestry_depth > 0)
          { return 15 / d.ancestry_depth }
        else
          { return 15 }
      })
    .attr("rx", function (d) {
        if (d.ancestry_depth > 0)
          { return 35 / d.ancestry_depth }
        else
          { return 35 }
      })
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
  .text((d) => d.definition)
  // .call(wrap)
  .attr("opacity", 0.5)
  .attr("dy", 0)

  ;

  var nodeOver = selection.append("g")
    .attr("class", "nodes")
    .selectAll("ellipse")
    .data(topics)
    .enter()
    // .append("a")
    // .attr("xlink:href", function (d) { return linkAddress + d.id })
    .append("ellipse")
    .attr("ry", function (d) {
        if (d.ancestry_depth > 0)
          { return 15 / d.ancestry_depth }
        else
          { return 15 }
      })
    .attr("rx", function (d) {
        if (d.ancestry_depth > 0)
          { return 35 / d.ancestry_depth }
        else
          { return 35 }
      })
    .attr("fill", "white")
    .attr("opacity", 0)
    .on('click', function(d) {
      console.log(d, 'click ---')
      loadPage(changableData1, d);
    })
  .on("mouseover", function (d) {
    d3.select("#node-text" + d.id)
      // d3.select(function (d) { return "#node-text" + d.id.toString })
      .transition()
      .attr("opacity", 1)
      .attr("font-size", "130%")
      .attr("font-weight", "bold")
      .call(wrap, 300)
      .attr('class', 'over-text')
      // .call(wrap())
      ;
    d3.select("#node" + d.id)
      .attr("fill", 'yellow');
    document.getElementById('quickDetails').innerHTML = d.definition;

  })
  .on("mouseout", function (d) {
    d3.select("#node-text" + d.id)
      // d3.select(function (d) { return "#node-text" + d.id.toString })
      .transition()
      .attr("font-size", "100%")
      .attr("opacity", 0.5)
      .attr("font-weight", "normal")
      .text(d.definition);
    d3.select("#node" + d.id)
      .transition()
      .attr("fill", 'white') ;
      document.getElementById('quickDetails').innerHTML = ""

    // d3.select('.over-text').remove()
  })

  //update positions each tick of the simulation
  function tickActions() {
    nodes
      .attr("cx", function (d) { return d.x; })
      .attr("cy", function (d) { return d.y; })
    // nodes
    //   .attr("cx", function(d) { return d.x = Math.max(radius, Math.min(width - radius, d.x)); })
    //   .attr("cy", function(d) { return d.y = Math.max(radius, Math.min(height - radius, d.y)); });

  // tells one end of the line to follow one node around
  //and the other end of the line to follow the other node around
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

      // dragable nodes
    var drag_handler = d3.drag()
    .on("start", drag_start)
    .on("drag", drag_drag)
    .on("end", drag_end);

    function drag_start(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    // d.fy = d.x;
    // d.fy = d.x;
    }

    function drag_drag(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
    }

    function drag_end(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = d.x;
    d.fy = d.y;
    }

    drag_handler(nodeOver)



  function wrap(text, width) {
  	/* console.log(text[0]) */
  	  text.each(function() {
  	    var text = d3.select(this),
  	        words = text.text().split(/\s+/).reverse(),
  	        word,
  	        line = [],
  	        lineNumber = 0,
  	        lineHeight = 1.1, // ems
            y = text.attr("y"),
  	        x = text.attr("x"),
  	        dy = parseFloat(text.attr("dy")),
  	        tspan = text.text(null)
  	              .append("tspan")
  	              .attr("x", x)
  	              .attr("y", y)
  	              .attr("dy", dy + "em");
  	    while (word = words.pop()) {
  	      line.push(word);
  	      tspan.text(line.join(" "));
          console.log(dy)
  	      if (tspan.node().getComputedTextLength() > width) {
  	        line.pop();
  	        tspan.text(line.join(" "));
  	        line = [word];
  	        tspan = text.append("tspan")
            						.attr("x", x)
                        .attr("y", y)
                        .attr("dy", ++lineNumber * lineHeight + dy + "em")
                        .text(word);
  	      }
  	    }
  	  });
  }


// Here in case i want to go back to full page reloads...
// var linkAddress =
// // "https://bubble-proto-272875.herokuapp.com/topics/"  // makes the topic page the main PRODUCTION
// // "http://hostbubble.org:3000/topics/"  // makes the topic page the main DEVELOPMENT
// // "https://bubble-proto-272875.herokuapp.com/?topic_id="  // this one make the home page the one that works PRODUCTION
// "http://hostbubble.org:3000/?topic_id="  // this one make the home page the one that works DEVELOPMENT
// ;

// code ment to clean bad items out of the JSON
// i cleaned it up in the controller instead.  I left this incase i of other issues
// // preserve newlines, etc - use valid JSON
// let jsBroaderTopicsJSON = jsBroaderTopicsJSONraw.replace(/\\n/g, "\\n")
//                .replace(/\\'/g, "\\'")
//                .replace(/\\"/g, '\\"')
//                .replace(/\\&/g, "\\&")
//                .replace(/\\r/g, "\\r")
//                .replace(/\\t/g, "\\t")
//                .replace(/\\b/g, "\\b")
//                .replace(/\\f/g, "\\f");
// // remove non-printable and other non-valid JSON chars
// jsBroaderTopicsJSON = jsBroaderTopicsJSON.replace(/[\u0000-\u0019]+/g,"");
}
