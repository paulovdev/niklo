import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Nav/Navbar"
import Home from "./pages/Home/Home"
import { AnimatePresence } from 'motion/react';
import About from './pages/About/About';

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </AnimatePresence>
  )
}

export default App