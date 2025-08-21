
import React, { useEffect, useRef } from 'react';
import { PackageOpen, Truck, Route, MapPin } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5511987940150&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Garuda";
  
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

  return (
    <section ref={sectionRef} id="servicos" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title appear-anim">
            Modalidades de Transporte
          </h2>
          <p className="section-subtitle appear-anim">
            Oferecemos soluções completas para atender diferentes necessidades logísticas
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row appear-anim card-hover p-6 rounded-xl shadow-md bg-white border border-gray-100">
            <div className="md:w-1/4 flex justify-center items-center mb-6 md:mb-0">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10">
                <PackageOpen className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-semibold mb-3">Frete Fracionado</h3>
              <p className="text-gray-600 mb-4">
                Solução ideal para empresas que precisam transportar mercadorias em quantidades menores. 
                Otimizamos rotas e compartilhamos o espaço do veículo entre diversos clientes, 
                tornando o transporte mais acessível e eficiente.
              </p>
              <a 
                href={whatsappUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                Solicitar cotação
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row appear-anim card-hover p-6 rounded-xl shadow-md bg-white border border-gray-100">
            <div className="md:w-1/4 flex justify-center items-center mb-6 md:mb-0">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10">
                <Truck className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-semibold mb-3">Frete Dedicado</h3>
              <p className="text-gray-600 mb-4">
                Veículo exclusivo para sua operação, com total flexibilidade de horários e rotas. 
                Ideal para grandes volumes, cargas que exigem cuidados especiais ou quando você 
                precisa de maior controle sobre o transporte.
              </p>
              <a 
                href={whatsappUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                Solicitar cotação
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row appear-anim card-hover p-6 rounded-xl shadow-md bg-white border border-gray-100">
            <div className="md:w-1/4 flex justify-center items-center mb-6 md:mb-0">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10">
                <Route className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-semibold mb-3">Transporte Estadual</h3>
              <p className="text-gray-600 mb-4">
                Cobertura completa em todo o estado de São Paulo, com entregas regulares e 
                programadas. Nossa malha logística garante atendimento rápido em todas as 
                principais cidades e regiões.
              </p>
              <a 
                href={whatsappUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                Solicitar cotação
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row appear-anim card-hover p-6 rounded-xl shadow-md bg-white border border-gray-100">
            <div className="md:w-1/4 flex justify-center items-center mb-6 md:mb-0">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-semibold mb-3">Transporte Nacional</h3>
              <p className="text-gray-600 mb-4">
                Sua carga entregue em qualquer lugar do Brasil. Contamos com uma extensa rede 
                de parceiros que nos permite oferecer logística de qualidade para todo o 
                território nacional.
              </p>
              <a 
                href={whatsappUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                Solicitar cotação
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
