import './viz.css';
import * as d3 from 'd3';

function Viz({ data, timeKnownExtent, distanceExtent }) {
  console.log(data);
  const width = 250;
  const height = 250;
  const isBridesSide = data?.["Bride's side"];
  const isGroomSide = data?.["Groom's side"];
  const both = data?.["Bride's side"] && data?.["Groom's side"];
  // const fillColor = data?.["Bride's side"] ? 'red' : data?.["Groom's side"] ? 'black' : 'green';
  const timeScale = d3.scaleLinear(timeKnownExtent, [height / 2 + height * 0.13, height]);
  const distanceScale = d3.scaleLinear(distanceExtent, [height / 2 + height * 0.13, height]);

  return (
    <div className='svg-holder'>
      <svg viewBox={`0 0 ${width} ${height}`}>
        <g transform='translate(1,1)'>
          <line
            x1={'50%'}
            y1={'50%'}
            x2={'50%'}
            y2={distanceScale(data['Miles to get to Le Fanfare'])}
            className='line'
          ></line>
          <line
            x1={'50%'}
            y1={'50%'}
            x2={timeScale(data['Years known to bride or groom'])}
            y2={'0%'}
            className='distance-line'
          ></line>
          <g className='rings'>
            <circle cx='50%' cy='50%' r={width / 2 - 2} className='outer'></circle>
            <circle cx='50%' cy='50%' r={width / 2.5 - 2} className='middle'></circle>
            <circle cx='50%' cy='50%' r={width / 3.5 - 2} className='inner'></circle>
            <circle cx='50%' cy='50%' r={width / 5.5 - 2} className='inner'></circle>
          </g>
          <g>
            {isBridesSide && <circle cx='50%' cy='50%' r='10px' className='middle' fillOpacity={0.5}></circle>}
            {isGroomSide && (
              <rect x='50%' y='50%' width='10px' height='10px' className='middle' fillOpacity={0.5}></rect>
            )}
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Viz;
