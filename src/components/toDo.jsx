import { Button } from 'react-bootstrap';
import "./toDo.css"
import { useSelector, useDispatch } from 'react-redux'
import {markTodo,removeTodo} from '../redux/slices'

function Todo({index}) {
    const todo = useSelector((state) => state.ToDo[index]);
    const dispatch = useDispatch();
    return (
      <div
        className="todo"
        
      >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => dispatch(markTodo(index))}>✓</Button>{' '}
          <Button variant="outline-danger" onClick={() => dispatch(removeTodo(index))}>✕</Button>
        </div>
      </div>
    );
  }
export default Todo;