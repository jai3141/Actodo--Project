import React from 'react'
import Header from './Components/Header'
import Card from './Components/Card'
import ToDoContainer from './Components/ToDoContainer'

const App = () => {
  return (
    <div>
      <div className='bg-black p-16'>
        <div className='bg-[#EFEFEF] p-10 border rounded-md '>
          <Header />
          <div className='flex justify-between gap-7 my-5 flex-wrap'>
            <Card bgcolor={'#8272DA'} title={"23"} subtitle={"Chennai"}/>
            <Card bgcolor={'#FD666D'} title={"December"} subtitle={"14:03:34"}/>
            <Card bgcolor={'#FCA201'} title={"Built using"} subtitle={"React"} />
          </div>
          <ToDoContainer/>
        </div>
      </div>
    </div>
  )
}

export default App
