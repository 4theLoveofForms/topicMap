import { render } from './render.js'

export function loadPage(changingData, d = "", selection, ) {
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
    document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(d.x) + "y:" + JSON.stringify(d.y);
    // d3.selectAll('text').transition(10000)
    //   .attr('opacity', 0)

    d3.selectAll('g')
      .remove()

    if (d.x) {
      selection.append('ellipse')
        .attr('class', 'animation')
        .attr('fill', 'black')
        .attr("ry", 15)
        .attr("rx", 35)
        // .attr("fill", "white")
        .attr("stroke-dasharray", 2)
        .attr("cx", () => { return d.x; })
        .attr("cy", () => { return d.y; })
      .append('text')
      .text("hellloooooo")
    }
    d3.select('.animation').transition(1000)
      .attr("ry", 25)
      .attr("rx", 45)


    setTimeout(() => {
      render(selection, data)
    }, 1000)
    // render(svg2, data)
  }
