import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-blue-900/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-serif font-bold text-yellow-300 italic tracking-wide">
          Montini
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="text-white hover:text-yellow-200 transition">Início</a>
          <a href="#product" className="text-white hover:text-yellow-200 transition">Produto</a>
          <a href="#results" className="text-white hover:text-yellow-200 transition">Resultados</a>
          <a href="#contact" className="text-white hover:text-yellow-200 transition">Contato</a>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-blue-900/95 backdrop-blur-md">
          <div className="flex flex-col p-4 space-y-4">
            <a 
              href="#hero" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-yellow-200 transition py-2 border-b border-blue-800"
            >
              Início
            </a>
            <a 
              href="#product" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-yellow-200 transition py-2 border-b border-blue-800"
            >
              Produto
            </a>
            <a 
              href="#results" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-yellow-200 transition py-2 border-b border-blue-800"
            >
              Resultados
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-yellow-200 transition py-2"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;