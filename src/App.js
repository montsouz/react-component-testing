import React from 'react';
import './App.css';
import Calculator from './Calculator/Calculator'
import SimpleForm from './SimpleForm/SimpleForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h2>COMPONENT 01</h2>
          <Calculator/>
          <h2>COMPONENT 02</h2>
          <SimpleForm/>
      </header>
    </div>
  );
}

export default App;
