import RoomCardImg1 from '../../../assests/home-room-card-1.png'
import RoomCardImg2 from '../../../assests/home-room-card-2.png'
import RoomCardImg3 from '../../../assests/home-room-card-3.png'

const RoomItemCardsGrid = () => {

    const RoomCards = [
        {
            heading: "Television set, Extra sheets and Breakfast",
            img: RoomCardImg1
        },
        {
            heading: "Television set, Extra sheets, Breakfast, and fireplace",
            img: RoomCardImg2
        }, 
        {
            heading: "Television set, Extra sheets, Breakfast, and fireplace, Console and bed rest",
            img: RoomCardImg3
        },
    ]

    return (
        <div className=' grid grid-cols-3 gap-14 mt-16'>
            {
                RoomCards.map(card => {
                    return (
                        <div className=' flex flex-col items-center gap-2 bg-[#fff] rounded-md w-[385px] h-[384px] pt-[27px] pl-[27px] pr-[27px]'>
                            <div className='  w-[330px] h-[285px] rounded-lg'>
                              <img className=' w-full h-full rounded-lg object-cover' src={card.img} alt="" />
                            </div>
                            <p className=' font-raleway font-normal text-[17px]'>{card.heading}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RoomItemCardsGrid