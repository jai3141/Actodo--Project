import React, { useState } from 'react'
import TodoItem from './TodoItem'

const ToDoList = () => {

    const[activityArr,setactivityArr] = useState([
        {
            id : 1,
            activity: "Go for a Walk"
        },
        {
            id:2,
            activity:"Have a breakfast"
        },
        {
            id:3,
            activity:"Take a Shower"
        }
    ])
    return (
        <div className='bg-[#BDB4EA] p-2 border rounded-md flex-auto'>
            <h1 className='text-2xl font-medium'>Today's Activity</h1>

            {activityArr.length===0? <p>You haven't added anything yet</p>:""}

           {
             activityArr.map(function(item,index){
                return <TodoItem id={item.id} activity={item.activity} index={index} activityArr={activityArr} setactivityArr={setactivityArr}/>
             })
           }
        </div>
    )
}

export default ToDoList
