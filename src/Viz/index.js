import './viz.css';
import * as d3 from 'd3';

function Viz({ data }) {
  console.log(data);
  return (
    <div className='svg-holder'>
      <svg viewBox='0 0 250 250'>
        <g transform='translate(1,1)'>
          <g className='rings'>
            <circle cx='50%' cy='50%' r='40%' className='outer'></circle>
            <circle cx='50%' cy='50%' r='35%' className='middle'></circle>
            <circle cx='50%' cy='50%' r='30%' className='inner'></circle>
          </g>
          <g>
            <circle cx='50%' cy='50%' r='10%' className='middle'></circle>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Viz;
