import React, { Activity, useState } from 'react'

const AddToDoFrom = (props) => {
      
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const[addactivity,setaddactivity] = useState("")

    const handleChange =(evt)=>{

        setaddactivity(evt.target.value)

    }

    const AddActivity = ()=>{

        setactivityArr([...activityArr,{id:activityArr.length+1,activity:addactivity}])
        setaddactivity("")
    }

    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-3xl font-medium'>Manage Activities</h1>
            <div>
                <input type="text" value={addactivity} onChange={handleChange} className='border bg-transparent p-1' placeholder='Next activity' />
                <button onClick={AddActivity} className='text-white bg-black p-1.5 border px-3 rounded-md'>Add</button>
            </div>
        </div>
    )
}

export default AddToDoFrom
