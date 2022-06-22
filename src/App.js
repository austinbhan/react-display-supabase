// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import FruitList from './ListOne';

// import your arrays here'
import { getFruits } from './services/client';

function App() {

  const [fruits, setFruits] = useState([]);

  async function fetchFruitsData() {
    const data = await getFruits();
    setFruits(data);
  }
  
  useEffect(() => {
    fetchFruitsData();
  }, []);

  return (
    <div className="App">
      <div className="Fruits">
        {
          <FruitList fruits={fruits} />
        }
      </div>
    </div>
  );
}

export default App;
