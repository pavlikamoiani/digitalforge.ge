import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Hero from './components/Hero'


function App() {
  return (
    <Router>
      <div style={{ background: "#000", minHeight: "100vh" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
