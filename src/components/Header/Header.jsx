import React from 'react'
import CustomDropdown from '../global/CustomDropdown/CustomDropdown'

const Header = () => {
  return (
    <div className='bg-white flex justify-between items-center px-[18px]'>
        <CustomDropdown/>
        <div>
        <div className="avatar">
  <div className="w-10 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
        </div>
    </div>
  )
}

export default Header