import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import data from './components/data.js'

import './App.css';

function App() {
  const dataJournal = data.map((item)=>{
    return (
      <Section 
        
        item={item}
      
      />
    )
  })
  return (
    <div className="App">
     <Navbar />
     {dataJournal}
    
    </div>
  );
}

export default App;
