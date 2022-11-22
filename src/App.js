import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoListItems from './components/TodoItems/TodoListItems';
import AddEdit from './components/AddItem-Dialog/Add_Edit'
import { useState } from "react";
import DoingList from './components/DoingItems/DoingList'
import DoneItems from './components/DoneItems/DoneItems'

function App() {
  const [popup, setpopup] = useState({
    show: false,
    mode: null,
    value: null
  })
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4" id='logo'>TODO LIST</h1>
        <div className='d-flex flex-column gap-3' id='logo' direction="horizontal">
          <ToDoListItems setpopup={setpopup} />
          <DoingList setpopup={setpopup} />
          <DoneItems setpopup={setpopup} />
        </div>
      </div>
      <AddEdit setpopup={setpopup} popup={popup} />
    </div>
  );
}

export default App;
