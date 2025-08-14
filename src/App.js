import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Products from './pages/Products';
import Footer from './components/Footer';
import Inquiry from './pages/Inquiry';
import { LanguageProvider } from "./LanguageContext";


function App() {
  return (
     <LanguageProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
      <Footer/>
    </Router>
    </LanguageProvider>
  );
}

export default App;
