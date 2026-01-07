import React from 'react'

const Card = (props) => {
  return (
    <div style={{backgroundColor: props.bgcolor}} className='px-20 py-5 text-center border rounded-md flex-auto'>
        <h1 className='text-2xl font-medium'>{props.title}</h1>
        <p>{props.subtitle}</p>
      
    </div>
  )
}

export default Card
