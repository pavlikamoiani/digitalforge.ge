import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'

function App() {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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
    </div>
  )
}

export default App
