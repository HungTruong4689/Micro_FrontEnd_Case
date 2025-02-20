import React from 'react';
import './index.css';
import Basket from './components/Basket';

function App() {
  const baskets = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Pineapple",
    
  ]
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-600 text-white p-4 rounded-md mb-6">
        <h1 className="text-2xl font-bold">Basket App</h1>
      </header>

    <div>
      <Basket baskets={baskets}/>
    </div>
    </div>
  );
}

export default App;
