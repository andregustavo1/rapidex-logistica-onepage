
import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Truck } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const whatsappUrl = "https://api.whatsapp.com/send?phone=5515998284005&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Rapidex";

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-primary">
            <span className="flex items-center">
              <Truck className="mr-2" size={30} />
              <span>RAPIDEX</span>
            </span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-secondary hover:text-primary transition-colors duration-300">Sobre</a>
          <a href="#diferenciais" className="text-secondary hover:text-primary transition-colors duration-300">Diferenciais</a>
          <a href="#servicos" className="text-secondary hover:text-primary transition-colors duration-300">Serviços</a>
          <a href="#clientes" className="text-secondary hover:text-primary transition-colors duration-300">Clientes</a>
          <a href="#contato" className="text-secondary hover:text-primary transition-colors duration-300">Contato</a>
        </nav>
        
        {/* Desktop CTA */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-primary ${scrolled ? 'bg-primary' : 'bg-primary'} hidden md:inline-block`}
        >
          Solicitar Cotação
        </a>
        
        {/* Mobile CTA */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-primary ${scrolled ? 'bg-primary' : 'bg-primary'} md:hidden text-sm px-4 py-2`}
        >
          Contate-nos
        </a>
      </div>
    </header>
  );
};

export default Header;
