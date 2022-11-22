import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { useDispatch } from 'react-redux';
import { editStatus,removeTodo } from '../../redux/slices'
import '../styles/toDo.css'
function SingleItem({ item, setpopup }) {
    const dispatch = useDispatch();
    const iconRender = () => {
        if (item.status === 'todo') {

            return (
                <span className="pointer-cursor" onClick={() => {
                    let newObj = Object.assign({}, item);
                    newObj.status = 'doing';
                    dispatch(editStatus(newObj));
                }}>
                    <Button variant="warning" size="sm">Doing</Button>
                </span>
            )
        }
        else if (item.status === 'doing') {
            return (
                <>
                    <span className="pointer-cursor" onClick={() => {
                        let newObj = Object.assign({}, item);
                        newObj.status = 'todo';
                        dispatch(editStatus(newObj));
                    }}>
                        <Button variant="dark" size="sm">Todo</Button>
                    </span>
                    <span className="pointer-cursor" onClick={() => {
                        let newObj = Object.assign({}, item);
                        newObj.status = 'done';
                        dispatch(editStatus(newObj));
                    }}>
                        <Button variant="success" size="sm">Done</Button>
                    </span>
                </>
            )
        }
        else if (item.status === 'done') {
            return (
                <span className="pointer-cursor" onClick={() => {
                    let newObj = Object.assign({}, item);
                    newObj.status = 'doing';
                    dispatch(editStatus(newObj));
                }}>
                    <Button variant="warning" size="sm">Doing</Button>
                </span>

            )
        }
    }
    return (
        <div class="card" id='card' key={item.index}>
            <Card.Body className='d-flex flex-column justify-content-between gap-2'>
                <Stack>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className='d-none d-md-block'>{item.des}</Card.Text>
                </Stack>
                <div className="todo">
                    {/* <div className='title-container'>{item.title}</div> */}
                    <div className='icon-container'>
                        <span className="pointer-cursor" onClick={() => setpopup({
                            show: true,
                            mode: 'edit',
                            value: {
                                'index': item.index,
                                'title': item.title,
                                'des': item.des
                            }
                        })}>
                            <Button variant='secondary' size="sm">Edit</Button>
                        </span>
                        {iconRender()}
                    </div>
                    <div>
                        <Button onClick={()=>dispatch((removeTodo(item.index)))} variant='danger' size='sm'>Delete</Button>
                    </div>
                </div>
            </Card.Body>

        </div>
    )
}

export default SingleItem;
