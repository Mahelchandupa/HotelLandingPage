import Header from '../../../components/Header'
import BookNow from '../components/BookNow'
import HomeHeader from '../components/HomeHeader'
import Facilities from './Facilities'
import LuxuriousRooms from './LuxuriousRooms'

const Home = () => {
  return (
    <div className=' bg-garyWhite'>
      <div>
        {/* <Header /> */}
        <HomeHeader />
        <BookNow />
      </div>
      <Facilities />
      <LuxuriousRooms />
    </div>
  )
}

export default Home