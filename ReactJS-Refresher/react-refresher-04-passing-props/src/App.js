import React from 'react';

import GoalList from './components/GoalList';
import './App.css';

const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'},
  ];

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;

// Renders the list in console log, but not on the screen. Why? Because we forgot to return the JSX in GoalList.js. We need to add a return statement there to render the list on the screen.