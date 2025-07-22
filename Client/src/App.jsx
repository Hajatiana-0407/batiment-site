import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import ArticleSection from "./components/ArticleSection";
import VideoSecction from "./components/VideoSecction";
import Footer from "./components/Footer";
import { Service } from "./components/ServiceSection";
import AboutSection from './components/AboutSection';
import { useAppContext } from "./components/context/AppContext";
import { useEffect } from "react";
function App() {

const {  setActiveOnglet } = useAppContext();
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveOnglet(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0,
            }
        );

        const sections = document.querySelectorAll('section');

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, [setActiveOnglet]);

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
