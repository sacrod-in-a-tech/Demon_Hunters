import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import BootSequence from '../BootSequence/BootSequence'
import CyberBackground from '../CyberBackground/CyberBackground'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function Layout() {
  return (
    <div className="grain relative">
      <ScrollToTop />
      <BootSequence />
      <CyberBackground />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
