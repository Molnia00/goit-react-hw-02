//, useEffect
import { useState , useEffect } from 'react'
import React from 'react';
import './App.css'; 
import Description from './components/description'; 
import Options from './components/options'; 
import Feedback from './components/feedback'; 

function App() {

  const [statistic, setStatistic] = useState({
      good: 0,
      neutral: 0,
      bad: 0
  });

  function updateFeedback(feedbackType) {
    setStatistic((prevStatistic) => ({
      ...prevStatistic,
      [feedbackType]: prevStatistic[feedbackType] + 1, 
    }));
    
  }

  return (
    <div>
      <Description /> 
      <Options updateFeedback={statistic} /> 
      <Feedback statistic={statistic}  /> 
    </div>
  );
}

export default App;