import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import ArticleSection from "./components/ArticleSection";
import VideoSecction from "./components/VideoSecction";
import Footer from "./components/Footer";
import { Service } from "./components/ServiceSection";
import AboutSection from './components/AboutSection';
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Service />
      <VideoSecction />
        <AboutSection/>
      <ContactSection />
      <ArticleSection />
      <Footer />
    </>
  );
}

export default App;
