import { HashRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'

import Home from './pages/Home'
import About from './pages/About'
import Divisions from './pages/Divisions'
import Hunters from './pages/Hunters'
import Research from './pages/Research'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'
import History from './pages/History'
import Contact from './pages/Contact'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/hunters" element={<Hunters />} />
          <Route path="/research" element={<Research />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogArticle />} />

          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App