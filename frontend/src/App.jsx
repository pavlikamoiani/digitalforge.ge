import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Header onAboutClick={handleScrollToAbout} />
      <Hero />
      <About />
    </div>
  )
}

export default App
