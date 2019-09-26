import React from 'react';
import Typography from '@material-ui/core/Typography';
import ToDoList from './components/ToDoList';
import './App.css';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Container>
        <Typography>Todo List</Typography>
        <ToDoList/>
      </Container>
      
    </div>
  );
}

export default App;
