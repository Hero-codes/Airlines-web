import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Feedback from './pages/Feedback/Feedback'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import About from './components/About/About'
import Contact from './pages/Contact/Contact'
import Flights from './pages/Flights/Flights'
import Booking from './pages/Booking/Booking'
import NotFound from './pages/NotFound/NotFound'

function App() {

  const [isAuth, setIsAuth] = React.useState(false);

  return (
    <>
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register setIsAuth={setIsAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/feedback' element={<Feedback isAuth={isAuth} />} />
        <Route path='/contact-us' element={<Contact isAuth={isAuth} />} />
        <Route path='/flights' element={<Flights isAuth={isAuth} />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App;