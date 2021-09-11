import React from 'react';
import './styles/css/app.css';
import NavBar from './components/Layout/Navbar/NavBar';
import Footer from './components/Layout/Footer/Footer';
import Hero from './components/Content/Hero';
import { LanguageProvider } from './context/LanguageContext';

const App = () => {
  return (
      <LanguageProvider>
        <div>
          <NavBar />
          <Hero />
          <Footer />
        </div>
      </LanguageProvider>
  );
}

export default App;