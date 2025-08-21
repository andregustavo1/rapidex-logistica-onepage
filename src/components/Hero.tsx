import React from 'react';
const Hero = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5511987940150&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Garuda";
  return <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-right md:bg-center bg-no-repeat z-0" style={{
      backgroundImage: "url('/images/wmremove-transformed (1).jpeg')"
    }} />
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-in" style={{
        animationDelay: '0.3s'
      }}>
          {/* Logo without orange background */}
          <div className="mb-6 inline-block">
            <div>
              
            </div>
            <p className="text-white text-2xl italic font-medium text-shadow" style={{
            textShadow: '0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000'
          }}>
          </p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-shadow mb-4">
            Soluções Logísticas Completas para sua Empresa
          </h1>
          <p className="text-xl md:text-2xl text-white text-shadow mb-8">
            Frete Fracionado e Dedicado em São Paulo e todo o Brasil
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-center sm:text-left animate-pulse-subtle">
              Solicitar Cotação
            </a>
            <a href="#servicos" className="btn-secondary text-center sm:text-left bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white">
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/70 z-0"></div>
    </section>;
};
export default Hero;