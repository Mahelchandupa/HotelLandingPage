import { IoLocationSharp } from "react-icons/io5";
import { RiHotelFill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa6";

const filters = [
    {
        icon: <IoLocationSharp className=" text-[28px]"/>,
        title: "Location",
        text: `Abjua`
    },
    {
        icon: <RiHotelFill className=" text-[28px]"/>,
        title: "Room Type",
        text: "Standard"
    },
    {
        icon: <IoMdPerson className=" text-[28px]"/>,
        title: "Person",
        text: "01`"
    },
    {
        icon: <FaCalendarCheck className=" text-[28px]"/>,
        title: "Check In",
        text: `09 mar 2024`
    },
    {
        icon: <FaCalendarCheck className=" text-[28px]"/>,
        title: "Check Out",
        text: `13 mar 2024`
    },
]

const BookNow = () => {
    return (
        <div className=' px-[120px] h-[120px] bg-white absolute bottom-[40px] w-full items-center flex'>
            <div className=" px-[40px] flex items-center justify-between w-full font-poppins">
                <div className=" flex w-full gap-36">
                    {
                        filters.map(filter => {
                            return (
                                <div className=" flex gap-6">
                                    {filter.icon}
                                    <div>
                                        <h5 className=" text-[15px] font-medium">{filter.title}</h5>
                                        <p className=" flex items-center gap-1 text-[12px] text-customBlack  opacity-70">{filter.text} <FaChevronDown className="  opacity-70 text-customBlack"/></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button className=' font-medium w-[180px] h-[65px] items-center bg-gray rounded-md text-white font-poppins'>Book Now</button>
            </div>
        </div>
    )
}

export default BookNow