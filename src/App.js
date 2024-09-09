import { useState, useEffect } from 'react';
import * as d3 from 'd3';
import './App.css';
import Viz from './Viz';
import Legend from './Legend';
import rawData from './data.json';

function App() {
  const cleanData = rawData.filter(x => x['Brooklyn Wedding'] === 'Attending');
  const distanceExtent = d3.extent(cleanData.map(x => x['Miles to get to Le Fanfare']));
  const timeKnownExtent = d3.extent(cleanData.map(x => x['Years known to bride or groom']));
  const [selectedPerson, setSelectedPerson] = useState(42);
  const selectedData = cleanData[selectedPerson];

  const options = cleanData.map((x, i) => {
    return (
      <option value={i} key={i}>
        {x['First Name']}
      </option>
    );
  });

  return (
    <>
      <select value={selectedPerson} onChange={e => setSelectedPerson(e.target.value)}>
        {options}
      </select>
      <main className='main'>
        <div className='content'>
          <h1 className='header'>
            {selectedData['First Name']} <br />
            {selectedData['Last Name']}
          </h1>
          <Viz data={selectedData} distanceExtent={distanceExtent} timeKnownExtent={timeKnownExtent} />
          <Legend />
        </div>
      </main>
    </>
  );
}

export default App;
