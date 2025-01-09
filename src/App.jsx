import React, { useState } from 'react';
import './App.css';
import Description from './components/description';
import Options from './components/options';
import Feedback from './components/feedback';

function App() {
  
  const [statistic, setStatistic] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = good + neutral + bad;


  const updateFeedback = (feedbackType) => {
    setStatistic((prevStatistic) => ({
      ...prevStatistic,
      [feedbackType]: prevStatistic[feedbackType] + 1,
    }));
  };

  return (
    <div>
      <Description /> 
      <Options onFeedback={updateFeedback} />
      <Feedback statistic={statistic} /> 
    </div>
  );
}

export default App;