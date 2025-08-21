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
    { id: 1, name: "Cliente 1", logo: "/images/image.png" },
    { id: 2, name: "Cliente 2", logo: "/images/image copy.png" },
    { id: 3, name: "Cliente 3", logo: "/images/image copy 3.png" },
    { id: 4, name: "Cliente 4", logo: "/images/image copy 4.png" },
    { id: 5, name: "Cliente 5", logo: "/images/image copy 5.png" },
    { id: 6, name: "Cliente 6", logo: "/images/image copy 6.png" },
    { id: 7, name: "Cliente 7", logo: "/images/image copy 7.png" },
    { id: 8, name: "Cliente 8", logo: "/images/image copy 8.png" },
    { id: 9, name: "Cliente 9", logo: "/images/image copy 9.png" },
    { id: 10, name: "Cliente 10", logo: "/images/image copy 10.png" },
    { id: 11, name: "Cliente 11", logo: "/images/image copy 11.png" },
    { id: 12, name: "Cliente 12", logo: "/images/image copy 12.png" },
  ];

  return (
    <section ref={sectionRef} id="clientes" className="section-padding bg-tertiary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title appear-anim">
            Alguns de Nossos Clientes
          </h2>
          <p className="section-subtitle appear-anim">
            Empresas que confiam na Garuda para suas necessidades logísticas
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={client.id} 
              className="appear-anim flex items-center justify-center p-4 bg-white rounded-lg shadow-md h-40 w-40 md:w-60"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-w-[100px] md:max-w-[120px] h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center appear-anim">
          <p className="text-xl font-medium">
            Junte-se a dezenas de empresas que confiam na Garuda para suas operações logísticas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
