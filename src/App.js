// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import FruitList from './ListOne';
import GrainList from './ListTwo';
import VegetableList from './ListThree';

// import your arrays here'
import { getFruits, getGrains, getVegetables } from './services/client';

function App() {

  const [fruits, setFruits] = useState([]);
  const [grains, setGrains] = useState([]);
  const [vegetables, setVegetables] = useState([]);

  async function fetchFruitsData() {
    const data = await getFruits();
    setFruits(data);
  }
  async function fetchGrainsData() {
    const data = await getGrains();
    setGrains(data);
  }
  async function fetchVegetablesData() {
    const data = await getVegetables();
    setVegetables(data);
  }

  useEffect(() => {
    fetchFruitsData();
  }, []);
  useEffect(() => {
    fetchGrainsData();
  }, []);
  useEffect(() => {
    fetchVegetablesData();
  }, []);

  return (
    <div className="App">
      <div className="Lists">
        {
          <>
            <FruitList fruits={fruits} />
            <GrainList grains={grains} />
            <VegetableList vegetables={vegetables} />
          </>
        }
      </div>
    </div>
  );
}

export default App;
