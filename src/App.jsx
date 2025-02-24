
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className=' w-[95%] mx-auto'>

        <Outlet></Outlet>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
