
import React, { useEffect, useRef } from 'react';
import { Phone, Clock, MapPin, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Locations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const whatsappUrlTatui = "https://api.whatsapp.com/send?phone=5511987940150&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Garuda";
  const whatsappUrlSP = "https://api.whatsapp.com/send?phone=5511987940150&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Garuda";
  
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
    <section ref={sectionRef} id="locais" className="section-padding bg-tertiary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title appear-anim">
            Nossas Unidades
          </h2>
          <p className="section-subtitle appear-anim">
            Conheça nossas localizações e horários de funcionamento
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tatuí Location */}
          <Card className="appear-anim overflow-hidden border-2 border-primary shadow-lg">
            <div className="bg-primary text-white p-4 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <div className="w-16 h-16">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path 
                      d="M10,50 Q30,20 50,50 T90,50" 
                      stroke="#FFFFFF" 
                      strokeWidth="6" 
                      fill="none" 
                      strokeLinecap="round"
                    />
                    <circle cx="90" cy="50" r="4" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold tracking-wider">TATUÍ</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Horário de Funcionamento:</h4>
                    <p>Seg à Sex das 07:00 às 18:00h</p>
                    <p className="text-sm">(Sem intervalo)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Endereço:</h4>
                    <p>Rua: Professora Maria de Lourdes Sinisgali</p>
                    <p>nº 412 - Jd Wanderley - Tatuí/SP</p>
                    <p>CEP: 18277560</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Contato:</h4>
                    <a 
                      href={whatsappUrlTatui}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-primary transition-colors"
                    >
                      (11) 98794-0150
                    </a>
                    <a 
                      href={whatsappUrlSP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-primary transition-colors"
                    >
                      (11) 98794-0150
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* São Paulo Location */}
          <Card className="appear-anim overflow-hidden border-2 border-primary shadow-lg" style={{ animationDelay: '0.2s' }}>
            <div className="bg-primary text-white p-4 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <div className="w-16 h-16">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path 
                      d="M10,50 Q30,20 50,50 T90,50" 
                      stroke="#FFFFFF" 
                      strokeWidth="6" 
                      fill="none" 
                      strokeLinecap="round"
                    />
                    <circle cx="90" cy="50" r="4" fill="#FFFFFF" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold tracking-wider">SÃO PAULO</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Horário de Funcionamento:</h4>
                    <p>Seg à Sex das 06:00 às 17:00h</p>
                    <p className="text-sm">(Sem intervalo)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Endereço:</h4>
                    <p>Rua: Doutor Ribeiro de Almeida nº 323</p>
                    <p>Barra Funda / SP - CEP: 01137-020</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">E-mail:</h4>
                    <a 
                      href="mailto:coletasgaruda@gmail.com"
                      className="block hover:text-primary transition-colors"
                    >
                      coletasgaruda@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://api.whatsapp.com/send?phone=5511987940150&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Garuda" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block appear-anim"
          >
            Faça sua Cotação
          </a>
        </div>
      </div>
    </section>
  );
};

export default Locations;
