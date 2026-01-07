import React from 'react'

const AddToDoFrom = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-3xl font-medium'>Manage Activities</h1>
            <div>
                <input type="text" className='border bg-transparent p-1' placeholder='Next activity' />
                <button className='text-white bg-black p-1.5 border px-3 rounded-md'>Add</button>
            </div>
        </div>
    )
}

export default AddToDoFrom
