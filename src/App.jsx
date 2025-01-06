//import { useState , useEffect } from 'react'

import './App.css'
import description from './components/description';
import options from './components/options';
import feedback from './components/feedback';
  

const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0
};


function App() {
  return (
    <div>
      <Description/>

    </div>
  )  
}

export default App

