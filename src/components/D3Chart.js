import {useEffect, useRef, useState} from 'react';
import debounce from 'lodash/debounce';
import * as d3 from 'd3'

export const Circles = ({data, color}) => {
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (data.title)
      configD3()
  }, [data, color])

  const formatDatasets = () => {
    let datasets = data.dataSets
    let valuesArray = datasets.map(dataset => dataset.value)
    let total = [...valuesArray].reduce((a, b) => a + b, 0);
    return data.dataSets.map(dataset => ((dataset.value * 100) / total))
  }

  const formatNumbers = (number) => {
    return Math.round(number * 100) / 100
  }


  const configD3 = () => {

    let svg = d3.select(containerRef.current)
    let arcData = d3.pie()(formatDatasets());
    let arcGenerator = d3.arc().innerRadius(95).outerRadius(100);
    d3.selectAll("g > *").remove()
    d3.selectAll("text").remove()
    svg.select('g')
      .selectAll('path')
      .data(arcData)
      .enter()
      .append('path')
      .style("fill", (d, i) => {
        console.log(d, i, `hsl( ${color} , 100%, ${d.value} %)`)
        return d3.color(`hsl(${color},80%,${d.value}%)`)
      })
      .attr('d', arcGenerator);

    svg.append("text")
      .attr("text-anchor", "middle")
      .attr('font-size', '1.3em')
      .attr('color', 'blue')
      .attr('y', 100)
      .attr('x', 300)
      .text(data.title)
      .style('fill', 'darkgrey')


    svg.append("text")
      .attr("text-anchor", "middle")
      .attr('font-size', '2em')
      .attr('y', 140)
      .attr('x', 300)
      .text(data.subtitle)
      .style('fill', 'grey')


    svg.append("text")
      .attr("text-anchor", "middle")
      .attr('font-size', '2em')
      .attr('x', 70)
      .attr('y', 370)
      .text(data.dataSets[0].label)
      .style('fill', 'grey')


    svg.append("text")
      .attr("text-anchor", "middle")
      .attr('font-size', '1.3em')
      .attr('color', 'blue')
      .attr('x', 50)
      .attr('y', 400)
      .text(`${formatNumbers(formatDatasets()[0])}%`)
      .style('fill', 'darkgrey')

    svg.append("text")
      .attr("text-anchor", "middle")
      .attr('font-size', '1.3em')
      .attr('color', 'blue')
      .attr('x', 170)
      .attr('y', 400)
      .text(formatNumbers(data.dataSets[0].value))
      .style('fill', 'darkgrey')


    svg.append("text")
      .attr("text-anchor", "middle")
      .attr('font-size', '2em')
      .attr('x', 500)
      .attr('y', 370)
      .text(data.dataSets[1].label)
      .style('fill', 'grey')

    svg.append("text")
      .attr("text-anchor", "middle")
      .attr('font-size', '1.3em')
      .attr('color', 'blue')
      .attr('x', 450)
      .attr('y', 400)
      .text(formatNumbers(data.dataSets[1].value))
      .style('fill', 'darkgrey')

    svg.append("text")
      .attr("text-anchor", "middle")
      .attr('font-size', '1.3em')
      .attr('color', 'blue')
      .attr('x', 550)
      .attr('y', 400)
      .text(`${formatNumbers(formatDatasets()[1])}%`)
      .style('fill', 'darkgrey')


  }


  return (
    <svg width="100%" height="100%" ref={containerRef}>
      <g transform="translate(300, 110)"/>
    </svg>
  );
};
