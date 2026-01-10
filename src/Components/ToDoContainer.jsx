import React from 'react'
import AddToDoFrom from './AddToDoFrom'
import ToDoList from './ToDoList'
import { useState } from 'react'
const ToDoContainer = () => {
    const [activityArr, setactivityArr] = useState([
        {
            id: 1,
            activity: "Go for a Walk"
        },
        {
            id: 2,
            activity: "Have a breakfast"
        },
        {
            id: 3,
            activity: "Take a Shower"
        }
    ])
    return (
        <div>
            <div className='flex gap-5 flex-wrap'>
                <AddToDoFrom activityArr={activityArr} setactivityArr={setactivityArr} />
                <ToDoList activityArr={activityArr} setactivityArr={setactivityArr}/>
            </div>
        </div>
    )
}

export default ToDoContainer
