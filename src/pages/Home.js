
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/home.css';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import slide4 from '../assets/images/slide4.jpg';

const images = [slide1, slide2, slide3, slide4];

const textSlides = [
  {
    title: 'Global Export Solutions',
    subtitle: 'Delivering trust and quality across borders',
  },
  {
    title: 'Premium Quality Products',
    subtitle: 'We bring the best from India to the world 🇮🇳',
  },
  {
    title: 'Fast & Reliable Logistics',
    subtitle: 'Your cargo, our priority — always on time',
  },
  {
    title: 'OM Exports',
    subtitle: 'Trusted by businesses worldwide for excellence',
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-container">
      <AnimatePresence  mode="wait">
        <motion.div
          key={currentIndex}
          className="hero-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
            <div className="overlay" />
          <motion.div
            className="hero-text"
            key={`text-${currentIndex}`}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{textSlides[currentIndex].title}</h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {textSlides[currentIndex].subtitle}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Home;
