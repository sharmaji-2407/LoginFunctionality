import React,{useEffect, useState, useRef} from 'react';
import '../scss/Component.css';
import * as d3 from 'd3';


const D3dashboard = () => {
    let data = [
        {id: "0", count: 150},
        {id: "1", count: 75},
        {id: "2", count: 135},
        {id: "3", count: 240},
      ]

    const [dataSet, setdataSet] = useState(data);
    
    useEffect(() => {

        // Create a dataset of pets and the amount of people that own them
        
        // Generate a p tag for each element in the dataSet with the text: Subject: Count 
        
        
        // Bar Chart:
          const getMax = () => { // Calculate the maximum value in the DataSet
            let max = 0
            dataSet.forEach((dt) => {
                if(dt.count > max) {max = dt.count}
            })
            return max
          }
       
          
          // Create each of the bars and then set them all to have the same height(Which is the max value)
          d3.select('#BarChart').selectAll('div').data(dataSet) 
          .enter().append('div').classed('bar', true).style('height', `${getMax()}px`)
      
          //Transition the bars into having a height based on their corresponding count value
          d3.select('#BarChart').selectAll('.bar')
          .transition().duration(1000).style('height', bar => `${bar.count}px`)
            .style('width', '80px').style('margin-right', '10px').delay(300) // Fix their width and margin
          
          
          
      }, [dataSet])
  
      const changeData = () => {
        let tempState = [...dataSet];

         for (var i = 0; i < dataSet.length; i++) {
            let tempElem = {...tempState[i]};
            console.log(tempElem.count);
            tempElem.count = Math.random() * (250 - 70) + 70;
            console.log(tempElem.count + "updated");
            tempState[i] = tempElem;
         }
         setdataSet(tempState);
        //   dataSet.forEach((val, i)=>{
        //     var objIndex = dataSet.findIndex((obj => obj.id == i ));
        //     const arrayObj = dataSet[objIndex]
        //     console.log(arrayObj);
            
        //   })
      }

        // for (var i = 0; i < dataSet.length; i++) {
        //     console.log(dataSet[i]);
        //     var objIndex = dataSet.findIndex((obj => obj.id === i ));
        //     dataSet[objIndex].count = 250;

        //   } 
      

    return (
      <div className = "Component">

      <div className="Component__holder">
      </div>
        <div id="BarChart" />

        <button className='btn' onClick={changeData}>Shuffle</button>

      </div>

    );
  }

//     const [data, setdata] = useState([105,247,500,369,458]);
//     const svgRef = useRef();

//     useEffect(()=>{
        
//             drawChart();
        
//     },[data]);
   
//    const drawChart= () => {
//         const w = 400;
//         const h = 300;
//         console.log(69);
//         const svg = d3.select(svgRef.current)
//             .attr('width', w)
//             .attr('height',h)
//             .style('overflow', 'visible')
//             .style('margin-top','75px');

//         const xScale = d3.scaleBand()
//             .domain(data.map((val, i)=>i))
//             .range([0,w])
//             .padding(0.5);
        
//         const yScale = d3.scaleLinear()
//             .domain([0,h])
//             .range([h,0]);

//         const xAxis = d3.axisBottom(xScale)
//             .ticks(data.length);

//         const yAxis = d3.axisLeft(yScale)
//             .ticks(5);

//         svg.append('g')
//             .call(xAxis)
//             .attr('transform' , `translate(0, ${h})`);
//         svg.append('g')
//             .call(yAxis);
        
//         svg.select('.bar')
//             .selectAll('rect')
//             .enter().append("rect")
//             .data(data)
//             .attr('x', (v,i)=> xScale(i))
//                 .attr('y', yScale)
//                 .attr('width', xScale.bandwidth())
//                 .attr('height', val => h - yScale(val));

//     }

//     const changeData = () => {

//     }
   

    

//   return (
//     <div className='Component'>
//         <svg ref={svgRef}></svg>
//         <button onClick={changeData}>Shuffle</button>
//     </div>
//   )
// }

export default D3dashboard;