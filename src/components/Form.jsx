import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import {addTodo} from '../redux/slices'
function FormTodo() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      dispatch(addTodo(value));
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary mb-3 mt-3" type="submit">
        Submit
      </Button>
    </Form>
    );
  }
  export default FormTodo;