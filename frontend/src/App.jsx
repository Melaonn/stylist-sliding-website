import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import OurWork from './pages/OurWork'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="bg-white text-gray-800 scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <OurWork />
      <Services />
      <Blog />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App


