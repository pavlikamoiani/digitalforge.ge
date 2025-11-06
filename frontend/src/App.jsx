import './App.css'
import { useNavigate } from 'react-router-dom';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();

  const handleLangChange = (lng) => {
    navigate(`/${lng}`);
  };

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Header onScrollToSection={handleScrollToSection} />
      <Hero onScrollToSection={handleScrollToSection} />
      <div id='about-section'>
        <About />
      </div>
      <div id='services-section'>
        <Services />
      </div>
      <div id='portfolio-section'>
        <Portfolio />
      </div>
      <div id='contact-section'>
        <Contact />
      </div>
      <div id="footer-section">
        <Footer onLanguageChange={handleLangChange} />
      </div>
    </div>
  )
}

export default App
