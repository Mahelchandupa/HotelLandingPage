import Header from '../../components/Header'
import BookNow from './components/BookNow'
import HomeHeader from './components/HomeHeader'

const Home = () => {
  return (
    <div className=' bg-garyWhite'>
        <Header />
        <HomeHeader />
        <BookNow />
    </div>
  )
}

export default Home