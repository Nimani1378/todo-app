import React from "react";
import "../styles/toDo.css";
import { useSelector, useDispatch } from 'react-redux'

import { Stack } from "react-bootstrap";
import SingleItem from '../SingleItem/SingleItem'

function DoneList({setpopup}) {
    const todos = useSelector((state) => state.ToDo);
    const handleDialog = () => {
        setpopup({
            show:true,
            mode: 'done',
            value : null
        });
    }
    return (
        <Stack className="rounded-2 p-4 shadow-sm" id="list-containers" gap={2}>
            <Stack><p className="display-6">Done</p></Stack>
            <div className="d-flex flex-wrap gap-3" gap={2}>
                {todos.filter(filteredtodo => filteredtodo.status === 'done').map((todo) => {
                    return (
                        <SingleItem item={todo} setpopup={setpopup}/>
                    )
                })}
            </div>
            <Stack className="flex-row justify-content-center">
                <span onClick={()=>handleDialog()} className="pointer-cursor add-button">
                    <i className="bi bi-file-plus" style={{ fontSize: '30px', color: '#ffff' }}></i>
                </span>
            </Stack>
        </Stack>
       
    )
}
export default DoneList;