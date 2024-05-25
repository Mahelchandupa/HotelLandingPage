import HeaderImg from '../../../assests/header-image.png'
import PlayIcon from '../../../assests/play-icon.png'

const HomeHeader = () => {
    return (
        <div className=' px-[120px] pt-[120px] flex justify-between'>
            <div className=' py-[60px]'>
                <h2 className=' font-dancing text-[50px] font-semibold text-gray'>Paradise View</h2>
                <h1 className=' mt-[26px] font-raleway text-[55px] font-bold'>Hotel for every<br />moment rich in<br />emotion</h1>
                <p className=' font-raleway text-[15px] font-medium'>Every moment feels like the first time<br />in paradise view</p>
                <div className=' mt-[35px] flex gap-8'>
                    <button className='text-white bg-gray rounded-[50px] w-[165px] h-[55px] items-center font-inter font-medium'>Book now</button>
                    <div className=' flex gap-4 items-center'>
                        <img src={PlayIcon} alt="play icon" className=' w-[55px] h-[55px]' />
                        <p className=' text-[20px] font-medium'>Take a tour</p>
                    </div>
                </div>
            </div>
            <div>
                <img className=' w-full h-full text-customBlack mt-[23px]' src={HeaderImg} alt='main img'/>
            </div>
        </div>
    )
}

export default HomeHeader