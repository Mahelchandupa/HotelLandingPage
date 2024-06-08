import Header from '../../../components/Header'
import BookNow from '../components/BookNow'
import HomeHeader from '../components/HomeHeader'
import Facilities from './Facilities'
import LuxuriousRooms from './LuxuriousRooms'
import Testimonial from './Testimonial'

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
      <Testimonial />
    </div>
  )
}

export default Home