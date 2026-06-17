
import ArrayTask from './components/ArrayTask'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


const App = () => {
  return (
<>
<BrowserRouter>
    <nav>
      link to <Link to="/">Home</Link>
      link to <Link to="/about">About</Link>
      link to <Link to="/contact">Contact</Link>
    </nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
</>
  )
}

export default App