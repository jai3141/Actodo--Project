import React from 'react'

const TodoItem = (props) => {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const hadledelet = (deleteid) => {

        let temparr = activityArr.filter(function (item) {
            if (item.id === deleteid) {
                return false
            }
            else {
                return true
            }
        })
        setactivityArr(temparr)
    }

    return (
        <div className='flex justify-between'>
            <p>{props.index + 1}.{props.activity}</p>
            <button className='text-red-500' onClick={() => hadledelet(props.id)}>Delete</button>
        </div>
    )
}

export default TodoItem
