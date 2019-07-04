import React from 'react';
import './App.css';
import List from './redux/connect/List';
import AntdComp from './components/AntdComp'

function App() {
  return (
    <div className="App">
      <List />
      <AntdComp />
    </div>
  );
}

export default App;
