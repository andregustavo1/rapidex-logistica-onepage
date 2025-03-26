
import React, { useEffect, useRef } from 'react';

const Clients = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll('.appear-anim');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (section) {
        const elements = section.querySelectorAll('.appear-anim');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  // Logo placeholders - in a real project, replace with actual client logos
  const clients = [
    { id: 1, name: "Cliente 1", logo: "https://via.placeholder.com/150?text=Cliente+1" },
    { id: 2, name: "Cliente 2", logo: "https://via.placeholder.com/150?text=Cliente+2" },
    { id: 3, name: "Cliente 3", logo: "https://via.placeholder.com/150?text=Cliente+3" },
    { id: 4, name: "Cliente 4", logo: "https://via.placeholder.com/150?text=Cliente+4" },
    { id: 5, name: "Cliente 5", logo: "https://via.placeholder.com/150?text=Cliente+5" },
    { id: 6, name: "Cliente 6", logo: "https://via.placeholder.com/150?text=Cliente+6" },
  ];

  return (
    <section ref={sectionRef} id="clientes" className="section-padding bg-tertiary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title appear-anim">
            Nossos Clientes
          </h2>
          <p className="section-subtitle appear-anim">
            Empresas que confiam na Rapidex para suas necessidades logísticas
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div 
              key={client.id} 
              className="appear-anim flex items-center justify-center p-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center appear-anim">
          <p className="text-xl font-medium">
            Junte-se a dezenas de empresas que confiam na Rapidex para suas operações logísticas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
