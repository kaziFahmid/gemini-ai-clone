import React from 'react'
import Cardwrapper from '../global/Cardwrapper/Cardwrapper'
import { BsGlobe } from "react-icons/bs";
const Card = () => {
  return (
    <Cardwrapper className='h-[226px] relative bg-[#DFD5EC] '>
        <h1>Generate unit tests for the following C# function</h1>
        <div className='flex bg-white w-[40px] h-[40px] rounded-full text-center justify-center items-center absolute bottom-3 right-3 '>
<BsGlobe />
        </div>
    </Cardwrapper>
  )
}

export default Card