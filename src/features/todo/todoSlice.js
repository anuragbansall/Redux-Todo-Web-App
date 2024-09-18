import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                completed: false,
            }
            state.todos.push(newTodo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id!== action.payload)
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
        }
    }
})

export const {addTodo, deleteTodo, toggleTodo} = todoSlice.actions
export default todoSlice.reducer