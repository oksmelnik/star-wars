import React, { useEffect } from 'react';
import List from './components/List.js'
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchPeople } from './actions/actions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPeople)
  });

  return (
    <div className="App">
      <div className="list">
        <List />
      </div>
    </div>
  );
}

export default App
