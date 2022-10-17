import './App.css';
import Todo from './components/toDo';
import FormTodo from './components/Form';
import React from "react";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux'

function App() {
  const todos1 = useSelector((state) => state.ToDo)
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo/>
        <div>
          {todos1.map((todo,index) => (
            <Card>
              <Card.Body>
                <Todo
                  index={index}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
