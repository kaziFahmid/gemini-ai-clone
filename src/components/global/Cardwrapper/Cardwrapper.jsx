import React from 'react'
import { cn } from '../../../utils/cn'

const Cardwrapper = ({className,children}) => {
  return (
    <div className={cn('rounded-lg bg-red-500 p-[16px]',className)}>{children}</div>
  )
}

export default Cardwrapper