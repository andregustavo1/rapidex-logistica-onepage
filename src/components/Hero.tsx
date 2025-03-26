
import React from 'react';

const Hero = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5515998284005&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Rapidex";

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1632276536839-84cad7fd03b0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-shadow mb-4">
            Soluções Logísticas Completas para sua Empresa
          </h1>
          <p className="text-xl md:text-2xl text-white text-shadow mb-8">
            Frete Fracionado e Dedicado em São Paulo e todo o Brasil
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center sm:text-left animate-pulse-subtle"
            >
              Solicitar Cotação
            </a>
            <a 
              href="#servicos"
              className="btn-secondary text-center sm:text-left bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20 z-0"></div>
    </section>
  );
};

export default Hero;
