import { createSlice } from '@reduxjs/toolkit'
export const todo_reducer = createSlice({
    name: 'todos',
    initialState : [
        {
            text: "This is a sampe todo",
            isDone: false
        },
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodos = {
                text: action.payload,
                isDone: false,
            };
            console.log(newTodos);
            state.push(newTodos);
        },
        markTodo: (state, action) => {
            state[action.payload].isDone = true;
        },
        removeTodo: (state, action) => {
            state.splice(action.payload, 1);
        },
    },
})

export const { addTodo, markTodo, removeTodo } = todo_reducer.actions;

export default todo_reducer.reducer;