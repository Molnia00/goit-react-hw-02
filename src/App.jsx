import React, { useState } from 'react';
import './App.css';
import Description from './components/description';
import Options from './components/options';
import Feedback from './components/feedback';
import Notification from './components/Notification'

function App() {

  
  
  const [statistic, setStatistic] = useState(() => {
        const savedFeedback = window.localStorage.getItem("saved-feedback");
        if (savedFeedback !== null) {
            return JSON.parse(savedFeedback);
        }
        return { good: 0, neutral: 0, bad: 0 };
  });
  

  
  
  
  const sumFeedback = statistic.good + statistic.neutral + statistic.bad;
  const totalFeedback = sumFeedback > 0;
  const positiveFeedback = Math.round((statistic.good / sumFeedback) * 100);


  function resetOptions() {
    setStatistic({
    good: 0,
    neutral: 0,
      bad: 0,
    })
  }

  const updateFeedback = (feedbackType) => {
    setStatistic((prevStatistic) => ({
      ...prevStatistic,
      [feedbackType]: prevStatistic[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(statistic));
  }, [statistic]);


  return (
    <>
      <Description /> 
      <Options onFeedback={updateFeedback}
        onReset={ resetOptions} />
      
      {totalFeedback ?
        (<Feedback
          statistic={statistic}
          totalFeedback={sumFeedback}
          positive={positiveFeedback}
        />) :
        <Notification/>
      }
       
      

    </>
  );
}

export default App;