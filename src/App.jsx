import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import JsonData from "./data/data.json";
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Header data={landingPageData.Header}/>
      <Features data={landingPageData.Features}/>
      <About data={landingPageData.About}/>
      <Services data={landingPageData.Services}/>
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials}/>
      <Team data={landingPageData.Team}/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
