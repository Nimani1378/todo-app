import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import {editStatus,addTodo} from '../../redux/slices'


function AddEdit({ setpopup,popup  }) {
  const dispatch = useDispatch();
  const [form,setForm] = useState({
    title : '',
    des : ''
  });
  useEffect (()=>{
    if(popup['mode'] === 'edit'){
      console.log('editmode');
      setForm({
        title : popup.value.title,
        des : popup.value.des
      })
    }
    else{
      setForm({
        title : '',
        des : ''
      })
    }
  },[popup])
  const handleClose = () => setpopup({...popup,show:false});
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    if(popup.mode === 'edit'){
      dispatch(editStatus({
        ...form,
        index : popup.value.index,
        status : popup.value.status
        
      }))
      handleClose();
    }
    else{
      console.log("in handle" , {
        ...form,
        status : popup.mode
      });
      dispatch(addTodo({
        ...form,
        status : popup.mode
      }))
      handleClose();
    }
  }
  //console.log(popup);
  return (
    <>
      <Modal show={popup.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name='title'
                autoFocus
                value={form.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Describtion</Form.Label>
              <Form.Control as="textarea" rows={3} value={form.des} name='des' onChange={handleChange}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {popup.mode==='edit' ? 'Edit' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEdit;
