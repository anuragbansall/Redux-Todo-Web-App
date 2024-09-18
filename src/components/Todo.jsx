import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddTodo from './AddTodo';
import { deleteTodo, toggleTodo } from '../features/todo/todoSlice';

function todo() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleTodoToggle = (id) => {
    dispatch(toggleTodo(id))
  }

  return (
    <div className='min-h-screen bg-zinc-900 text-white p-5 flex  justify-center items-center flex-col gap-y-8'>
        <h2 className='text-3xl font-semibold text-center'>Manage Your Todos</h2>
        <AddTodo />
        <ul>
          {
            todos.map((item, index) => (
              <li key={index} className={`flex flex-col sm:flex-row gap-4 mb-4 ${item.completed && "opacity-50"}`}>
                <p className={`text-2xl text-center ${item.completed && "line-through"}`}>{item.task}</p>
                <button className='bg-zinc-700 px-8 py-2 rounded-md' onClick={() => handleDeleteTodo(item.id)} >Delete</button>
                <button className='bg-zinc-700 px-8 py-2 rounded-md' onClick={() => handleTodoToggle(item.id)} >{item.completed ? "Marks as Not Done" : "Marks as Done"}</button>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default todo