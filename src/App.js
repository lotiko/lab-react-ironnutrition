import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  let id = 0;
  return (
    <div className="App">
      {foods.map(food => {
        id++;
        return (
          <FoodBox {...food} key={id} />
        );
     })}
    </div>
  );
}

export default App;
