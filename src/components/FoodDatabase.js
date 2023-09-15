// src/components/FoodDatabase.js

import React from 'react';
import { foods } from '../data/foods';

function FoodDatabase({ addToDailyIntake }) {
  return (
    <div>
      {foods.map(food => (
        <div key={food.name}>
          {food.name} - {food.calories} cal
          <button onClick={() => addToDailyIntake(food)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default FoodDatabase;
