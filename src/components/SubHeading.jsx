import React from 'react'

const SubHeading = ({ children, txtColor }) => {
  return (
    <p className={` text-[15px] font-medium mt-[12px] text-center font-poppins ${txtColor === "white" ? 'text-[#fff]' : 'text-[#000]'}`}>{children}</p>
  )
}

export default SubHeading