// src/components/MacronutrientInput.js

import React, { useState } from 'react';

function MacronutrientInput({ setGoals }) {
  const [calories, setCalories] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);

  const handleSubmit = () => {
    setGoals({ calories, fat, carbs, protein });
  };

  return (
    <div>
      <input placeholder="Calories" onChange={e => setCalories(e.target.value)} />
      <input placeholder="Fat (g)" onChange={e => setFat(e.target.value)} />
      <input placeholder="Carbs (g)" onChange={e => setCarbs(e.target.value)} />
      <input placeholder="Protein (g)" onChange={e => setProtein(e.target.value)} />
      <button onClick={handleSubmit}>Set Goals</button>
    </div>
  );
}

export default MacronutrientInput;
