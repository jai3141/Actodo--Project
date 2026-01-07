import React from 'react'
import AddToDoFrom from './AddToDoFrom'
import ToDoList from './ToDoList'

const ToDoContainer = () => {
    return (
        <div>
            <div className='flex gap-5 flex-wrap'>
                <AddToDoFrom/>
                <ToDoList/>
            </div>
        </div>
    )
}

export default ToDoContainer
