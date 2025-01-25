import React from 'react'
import run from '../../../config/gemini'

const PromptSearch = () => {
    let handleClick=async()=>{
const result= await run('what is jsx')
console.log(result)
    }
  return (
    <div onClick={handleClick} className='bg-red-800 max-w-4xl mx-auto absolute bottom-9 w-full left-0 right-0 rounded-full py-[12px] px-[17px] '>
        <input type='text' placeholder='Enter Prompt here' className='bg-transparent border-none outline-none '/>
        <div>

        </div>
    </div>
  )
}

export default PromptSearch