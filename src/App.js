import React, { useState } from 'react';
import MacronutrientInput from './components/MacronutrientInput';
import FoodDatabase from './components/FoodDatabase';
import DailyIntake from './components/DailyIntake';
import ProgressDisplay from './components/ProgressDisplay';

function App() {
  const [goals, setGoals] = useState({});
  const [intake, setIntake] = useState([]);

  const addToDailyIntake = (food) => {
    setIntake([...intake, food]);
  };

  return (
    <div className="App">
      <MacronutrientInput setGoals={setGoals} />
      <FoodDatabase addToDailyIntake={addToDailyIntake} />
      <DailyIntake intake={intake} />
      <ProgressDisplay intake={intake} goals={goals} />
    </div>
  );
}

export default App;
