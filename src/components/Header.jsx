import logo from '../assests/logo.png'

const Header = () => {

  const links = ["Home", "Explore", "Rooms", "About", "Contact"]  

  return (
    <div className=' w-full fixed top-0 flex px-[120px] justify-between items-center h-[120px] py-[33px] font-poppins'>
       <img src={logo} alt='logo'/>  
       <ul className=' flex gap-[60px] font-semibold'>
         {
            links.map((link) => {
                return (
                    <li>{link}</li>
                )
            })
         } 
       </ul> 
       <button className=' font-medium px-[46px] py-[16px] bg-gray rounded-md text-white'>Book Now</button>
    </div>
  )
}

export default Header