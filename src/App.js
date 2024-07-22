import './App.css';
import Viz from './Viz';
import Legend from './Legend';
import rawData from './data.json';

function App() {
  const selectedData = rawData[42];
  return (
    <main className='main'>
      <div className='content'>
        <h1 className='header'>
          {selectedData['First Name']} {selectedData['Last Name']}
        </h1>
        <Viz data={selectedData} />
        <Legend />
      </div>
    </main>
  );
}

export default App;
