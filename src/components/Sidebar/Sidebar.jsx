import React, { useState } from 'react'
import { images } from '../../allimages/images'

const Sidebar = () => {
    const [extendSidebar,setExtendSidebar]=useState(false)
    const handleExtendSidebar=()=>{
        setExtendSidebar(!extendSidebar)
    }
  return (
    <div className={`transition-all duration-300  h-screen pt-[14px] pb-[72px] ${
        extendSidebar ? 'flex-[0.2]' : ''
    } px-[30px] flex flex-col justify-between`}>
     <div className='flex flex-col gap-[40px]'>
     <button className='menu-btn' onClick={handleExtendSidebar} >
        <img src={images.menu} alt='menu'/>
      </button>
      <button>
        <img src={images.plus} alt='menu'/>
      </button>
    {extendSidebar&&  <div>
       <h2 className='font-semibold'>Recent</h2>
       <div>
        <ul className='list-none'>
           {[1,2,3].map((item,index)=> <li key={index} className='flex items-center gap-2.5 font-medium text-[14px] '> <img src={images.message} className='mt-1' alt='message'/>sadfdsaf</li>)}
        </ul>
       </div>
      </div>}
     </div>

     <div className='flex flex-col gap-[28px]'>
     <div>
        <img src={images.menu} alt='menu'/>
      </div>
      <div>
        <img src={images.plus} alt='menu'/>
      </div>
      <div>
        <img src={images.plus} alt='menu'/>
      </div>
     </div>
    </div>
  )
}

export default Sidebar