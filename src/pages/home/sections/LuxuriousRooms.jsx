import HotelRoomBg from '../../../assests/hotel-rooms-bg.png';
import MainHeading from '../../../components/MainHeading';
import SubHeading from '../../../components/SubHeading';
import RoomItemCardsGrid from '../components/RoomItemCardsGrid';

const LuxuriousRooms = () => {
    return (
        <div
            className="w-full h-[650px] mt-20 relative"
            style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${HotelRoomBg})`,
            }}
        >
            <div className='absolute w-full h-full top-0 left-0 bg-gray opacity-85'>
                <div className='absolute w-full h-full top-0 left-0 pt-[27px] px-[120px] flex flex-col items-center z-10'>
                    <div className=' flex justify-center flex-col items-center'>
                        <MainHeading txtColor="white">Luxurious Rooms</MainHeading>
                        <span className='w-[138px] h-[6px] bg-white my-2 '></span>
                        <SubHeading txtColor="white">All room are design for your comfort</SubHeading>
                    </div>
                    <RoomItemCardsGrid />
                </div>
            </div>
        </div>
    );
}

export default LuxuriousRooms;
