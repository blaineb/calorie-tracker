// src/components/DailyIntake.js

import React from 'react';

function DailyIntake({ intake }) {
  return (
    <div>
      {intake.map(food => (
        <div key={food.name}>
          {food.name} - {food.calories} cal
        </div>
      ))}
    </div>
  );
}

export default DailyIntake;
