import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [task, setTask] = useState("")
    const dispatch = useDispatch()

    const handleAddTask = (event) => {
        event.preventDefault()
        if(task.trim()){
          dispatch(addTodo(task))
        }
        
        setTask("")
    }

  return (
    <div className='max-w-full'>
        <form className='flex flex-col sm:flex-row gap-2' onSubmit={handleAddTask}>
            <input type="text" className='px-4 py-2 max-w-full bg-zinc-700 border border-zinc-500 outline-none' value={task} onChange={(event) => setTask(event.target.value)} placeholder='Enter task here...' />
            <button className='bg-zinc-700 px-8 max-w-full py-2'>Add</button>
        </form>
    </div>
  )
}

export default AddTodo