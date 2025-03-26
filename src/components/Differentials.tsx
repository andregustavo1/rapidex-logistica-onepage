
import React, { useEffect, useRef } from 'react';
import { Clock, Shield, Radio, TrendingUp } from 'lucide-react';

const Differentials = () => {
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

  return (
    <section ref={sectionRef} id="diferenciais" className="section-padding bg-tertiary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title appear-anim">
            Nossos Diferenciais Logísticos
          </h2>
          <p className="section-subtitle appear-anim">
            Conheça o que faz da Rapidex a melhor escolha para sua empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-8 rounded-xl appear-anim card-hover">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-6">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Pontualidade</h3>
            <p className="text-gray-600">
              Comprometimento com os prazos estabelecidos, respeitando seu cronograma e operação.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl appear-anim card-hover">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Segurança de Cargas</h3>
            <p className="text-gray-600">
              Processos rigorosos que garantem a integridade da sua mercadoria do início ao fim.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl appear-anim card-hover">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-6">
              <Radio className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Rastreamento em Tempo Real</h3>
            <p className="text-gray-600">
              Acompanhe o status da sua entrega a qualquer momento, com informações precisas.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-xl appear-anim card-hover">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Fretes Competitivos</h3>
            <p className="text-gray-600">
              Melhor custo-benefício do mercado, com tarifas justas e transparentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
