import React from 'react'

const Timer = ({time, oclock}) => {
  return (
    <div>
    <h1 className=" font-[700] text-[38px] leading-[45.6px]">
      {time}
    </h1>
    <p className=" font-normal text-[12px] leading-[13.2px] font-mono">
      {oclock}
    </p>
  </div>
  )
}

export default Timer