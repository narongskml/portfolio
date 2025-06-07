import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  useEffect(() => {
    const handleSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(anchor.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });
    handleSmoothScroll();
    return () => observer.disconnect();
  }, [location]);

  return (
    <>
         <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <Navbar />
          <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang">
          <Route index element={
            <>
              <Hero />
              <About />
              <Portfolio />
              <Skills />
              <Contact />
            </>
          } />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
      </div>
    </>
    
  );
}

export default App;