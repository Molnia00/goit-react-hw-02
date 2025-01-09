//, useEffect
import { useState , useEffect } from 'react'
import React from 'react';
import './App.css'; 
import Description from './components/description'; 
import Options from './components/options'; 
import Feedback from './components/feedback'; 







function App() {

  
  const [statictic, setStatictic] = useState(() => {
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

const updateFeedback = feedbackType => {
  if (feedbackType === "good") {
    setStatictic({
      ...statictic,
      good: statictic.good + 1,
    });
  }
}
  return (
    <div>
      <Description /> 
      <Options /> 
      <Feedback /> 

    </div>
  );
}

export default App;