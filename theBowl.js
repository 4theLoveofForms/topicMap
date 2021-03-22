
const colorScale = d3.scaleOrdinal()
 .domain(['apple', 'lemon'])
 .range(['#c11d1d', '#eae600']);

 var svg = d3.select('svg')
 var height = +svg.attr('height');
 /* width = +svg.attr('width'); */
 /* svg.attr("width", dataArray1.length * 50 + 70 ) */

const radiusScale = d3.scaleOrdinal()
 .domain(['apple', 'lemon'])
 .range(['20', '15']) ;

const xPosition = (d, i)  =>  i * 50 + 40   ;

// export function render (data) {
//   var circles= svg.selectAll('circle').data(data, d => d.id)
//
//   circles.enter()
//      .append('circle')
//      .attr('cx', xPosition )
//      .attr('cy', height / 2)
//      .attr('r', 0)
//     .merge(circles)
//      .attr('fill', (d) => colorScale(d.type))
//     .transition().duration(1000)
//      .attr('r', (d) => radiusScale(d.type))
//      .attr('cx', xPosition  )
//
//   circles.exit()
//     .transition().duration(1000)
//      .attr('r', 35)
//     .remove()
//    console.log(data)
// }

export function render (data) {
  console.log(data)

  const groups= svg.selectAll('g').data(data);
  const groupsEnter = groups.enter().append('g');
    groupsEnter.merge(groups)
      .attr('transform', (d, i) =>
      `translate(${i * 50 + 40 },${height / 2})`
    )
      // .attr('cx', xPosition )
      // .attr('cy', height / 2)
  groups.exit().remove()

  groupsEnter
  .append('circle')
    .merge(groups.select('circle'))
     .attr('fill', (d) => colorScale(d.type))
     .attr('r', (d) => radiusScale(d.type))

  groupsEnter
     .append('text')
     .attr('y', 33)
     .attr('text-anchor', 'middle')
    .merge(groups.select('text'))
     .text(d => d.type)
}
