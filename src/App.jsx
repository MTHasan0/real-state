
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='  mx-auto'>

        <Outlet></Outlet>

      </div>
      <Footer></Footer>

    </>
  )
}

export default App
