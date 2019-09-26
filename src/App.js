import React from 'react';
import ToDoList from './components/ToDoList';
import './App.css';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Container>
        <ToDoList/>
      </Container>
      
    </div>
  );
}

export default App;
