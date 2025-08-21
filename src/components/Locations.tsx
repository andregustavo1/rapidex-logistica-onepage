import React, { useEffect, useRef } from 'react';
import { Phone, Clock, MapPin, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const Locations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5511987940150&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Garuda";
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title appear-anim">
            Nossas Unidades
          </h2>
          <p className="section-subtitle appear-anim">
            Localização estratégica para melhor atendimento
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="appear-anim card-hover">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <MapPin className="w-6 h-6 mr-2" />
                Matriz - Tatuí
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                <span>Rua Principal, 123 - Centro, Tatuí - SP</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gray-400" />
                <span>(11) 98794-0150</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gray-400" />
                <span>contato@garuda.com.br</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-gray-400" />
                <span>Segunda a Sexta: 8h às 18h</span>
              </div>
            </CardContent>
          </Card>

          <Card className="appear-anim card-hover">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <MapPin className="w-6 h-6 mr-2" />
                Filial - São Paulo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                <span>Av. das Empresas, 456 - Vila Industrial, São Paulo - SP</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-gray-400" />
                <span>(11) 98794-0150</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-gray-400" />
                <span>saopaulo@garuda.com.br</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-gray-400" />
                <span>Segunda a Sexta: 7h às 19h</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center appear-anim">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};
export default Locations;