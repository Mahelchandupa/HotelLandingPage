import { TbSwimming } from "react-icons/tb";
import { FaWifi } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { IoGameController } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { MdLocalLaundryService } from "react-icons/md";
import { MdLocalParking } from "react-icons/md";

const FacilitiesGrid = () => {
  return (
    <div className=" flex justify-center items-center">
    <div className=" grid grid-cols-4 gap-14 mt-[50px]">
      {
        facilityList.map((item, key) => {
            return (
                <div key={ key } className=" w-[280px] h-[250px] flex flex-col justify-center items-center text-gray rounded-md hover:bg-gray hover:text-white transition-colors duration-300">
                    { item.icon }
                    <h5 className=" font-poppins text-[20px]font-medium ">{ item.title }</h5>
                </div>
            )
        })
      }
    </div>
    </div>
  )
}

export default FacilitiesGrid

const IconStyle = "text-[60px] mb-[10px]";

const facilityList = [
    {
      title: "Swimming Pool",
      icon: <TbSwimming className={ IconStyle }/>
    },
    {
        title: "Wifi",
        icon: <FaWifi className={ IconStyle }/>
    },
    {
        title: "Breakfast",
        icon: <GiChickenOven className={ IconStyle }/>
    },
    {
        title: "Gym",
        icon: <CgGym className={ IconStyle }/>
    },
    {
        title: "Came Center",
        icon: <IoGameController className={ IconStyle }/>
    },
    {
        title: "24/7 Light",
        icon: <MdOutlineLightMode className={ IconStyle }/>
    },
    {
        title: "Laundry Service",
        icon: <MdLocalLaundryService className={ IconStyle }/>
    },
    {
        title: "Parking Space",
        icon: <MdLocalParking className={ IconStyle }/>
    }
]