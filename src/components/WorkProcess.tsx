
import React, { useEffect, useRef } from 'react';
import { MessageCircle, ClipboardCheck, Truck, PackageCheck } from 'lucide-react';

const WorkProcess = () => {
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

  const process = [
    { 
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Solicitação de Cotação",
      description: "Entre em contato conosco via WhatsApp ou e-mail com detalhes da sua carga e rota desejada."
    },
    { 
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Análise da Demanda",
      description: "Nossa equipe analisa sua necessidade e prepara uma proposta personalizada e competitiva."
    },
    { 
      icon: <Truck className="w-8 h-8" />,
      title: "Preparação da Carga",
      description: "Após aprovação, programamos a coleta e preparamos sua carga com todos os cuidados necessários."
    },
    { 
      icon: <PackageCheck className="w-8 h-8" />,
      title: "Entrega Final",
      description: "Realizamos a entrega no prazo combinado, com confirmação e comprovante de recebimento."
    }
  ];

  return (
    <section ref={sectionRef} id="processo" className="section-padding bg-tertiary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title appear-anim">
            Como Funciona Nossa Logística
          </h2>
          <p className="section-subtitle appear-anim">
            Um processo simples e eficiente para garantir que sua carga chegue ao destino com segurança
          </p>
        </div>
        
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-primary/20 -translate-y-1/2 rounded-full"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={index} 
                className="appear-anim flex flex-col items-center text-center relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white mb-6 z-10 shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Step number */}
                <div className="absolute top-0 right-0 md:relative md:mt-4 w-8 h-8 flex items-center justify-center rounded-full bg-secondary text-white text-sm font-bold">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
