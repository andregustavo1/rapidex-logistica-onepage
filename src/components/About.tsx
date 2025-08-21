
import React, { useEffect, useRef } from 'react';
import { Truck, Clock, Map, Users } from 'lucide-react';

const About = () => {
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

  const whatsappUrl = "https://api.whatsapp.com/send?phone=5511987940150&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Garuda";

  return (
    <section ref={sectionRef} id="sobre" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title appear-anim">
            Rapidez e Eficiência em Cada Entrega
          </h2>
          <p className="section-subtitle appear-anim">
            Transportando sonhos e realizações para todo o Brasil
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="appear-anim">
            <p className="mb-6 text-lg">
              A Garuda Transportes é especializada em soluções logísticas eficientes, oferecendo serviços de frete fracionado e dedicado para empresas de todos os portes.
            </p>
            <p className="mb-6 text-lg">
              Atendemos diariamente São Paulo capital e grande São Paulo, com capacidade de entrega para todo o Brasil, garantindo que sua carga chegue ao destino com segurança e pontualidade.
            </p>
            <p className="text-lg">
              Nossa missão é simplificar a logística de nossos clientes, oferecendo um serviço personalizado que atenda às necessidades específicas de cada operação.
            </p>
          </div>
          
          <div className="relative h-[400px] appear-anim">
            <div 
              className="absolute inset-0 bg-cover bg-center rounded-lg shadow-xl"
              style={{ 
                backgroundImage: "url('/images/image2.png')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-lg"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center appear-anim p-6 card-hover rounded-lg">
            <div className="flex justify-center mb-4">
              <Map className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cobertura Estadual</h3>
            <p>Atendimento em todo estado de São Paulo com eficiência</p>
          </div>
          
          <div className="text-center appear-anim p-6 card-hover rounded-lg">
            <div className="flex justify-center mb-4">
              <Clock className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Entrega Diária</h3>
            <p>Saídas diárias garantindo agilidade na sua operação</p>
          </div>
          
          <div className="text-center appear-anim p-6 card-hover rounded-lg">
            <div className="flex justify-center mb-4">
              <Truck className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Frota Moderna</h3>
            <p>Veículos novos e em excelente estado de conservação</p>
          </div>
          
          <div className="text-center appear-anim p-6 card-hover rounded-lg">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Atendimento Personalizado</h3>
            <p>Soluções adaptadas às necessidades do seu negócio</p>
          </div>
        </div>
        
        {/* Additional CTA */}
        <div className="mt-12 text-center appear-anim">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block mt-8"
          >
            Faça sua Cotação
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
