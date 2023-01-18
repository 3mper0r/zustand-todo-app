import React from 'react'
import './App.css'
import AddTodoForm from './components/AddTodoForm';
import Header from './components/Header';

function App() {  

  return (
    <div className="App">
      <Header/>
      <AddTodoForm/>
    </div>
  )
}

export default App
