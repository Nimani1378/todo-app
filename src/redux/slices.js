import { createSlice } from '@reduxjs/toolkit';
let counter = 2;
export const todo_reducer = createSlice({
    name: 'todos',
    initialState: [
        {
            title: "This is a sampe todo",
            index: 0,
            status: 'todo',
            des: 'This is a sampe todo des'
        },
        {
            title: "This is a sampe todo This is a sampe todo",
            index: 1,
            status: 'todo',
            des: 'This is a sampe todo des This is a sampe todo des This is a sampe todo des'
        },
    ],
    reducers: {
        addTodo: (state, action) => {
            action.payload.index = counter;
            counter = counter + 1;
            console.log('in slice : ', action.payload);
            state.push(action.payload);
        },
        
        removeTodo: (state, action) => {
            let finedIndex = state.findIndex((element)=>element.index===action.payload)
            state.splice(finedIndex, 1);
        },
        editStatus: (state, action) => {
            console.log(action.payload);
            let finedIndex = state.findIndex((element)=>element.index===action.payload.index)
            console.log('index is : ',action.payload.index,'befor : ',state[finedIndex]);
            state[finedIndex] = Object.assign(state[finedIndex],action.payload);
            console.log('index is : ',action.payload.index,'after : ',state[finedIndex]);

        }
    },
})

export const { addTodo, removeTodo, editStatus } = todo_reducer.actions;

export default todo_reducer.reducer;