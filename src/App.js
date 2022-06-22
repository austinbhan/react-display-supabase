// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import FruitList from './ListOne';
import GrainList from './ListTwo';

// import your arrays here'
import { getFruits, getGrains } from './services/client';

function App() {

  const [fruits, setFruits] = useState([]);
  const [grains, setGrains] = useState([]);

  async function fetchFruitsData() {
    const data = await getFruits();
    setFruits(data);
  }
  async function fetchGrainsData() {
    const data = await getGrains();
    setGrains(data);
  }

  useEffect(() => {
    fetchFruitsData();
  }, []);
  useEffect(() => {
    fetchGrainsData();
  }, []);

  return (
    <div className="App">
      <div className="Lists">
        {
          <>
            <FruitList fruits={fruits} />
            <GrainList grains={grains} />
          </>
        }
      </div>
    </div>
  );
}

export default App;
