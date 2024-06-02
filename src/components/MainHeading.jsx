import React from 'react'

const MainHeading = ({children, txtColor}) => {
    console.log(txtColor)
  return (
    <div className={` text-[40px] text-center font-poppins font-medium ${txtColor === "white" ? 'text-[#fff]' : 'text-[#000]'} `}>{children}</div>
  )
}

export default MainHeading