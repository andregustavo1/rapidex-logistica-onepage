
import React, { useEffect, useRef } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5515998284005&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Rapidex";
  
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
    <section ref={sectionRef} id="contato" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title appear-anim">
            Onde Estamos e Como Nos Encontrar
          </h2>
          <p className="section-subtitle appear-anim">
            Entre em contato para solicitar uma cotação ou tirar suas dúvidas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="appear-anim">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4 mt-1">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                  <p className="text-gray-600">
                    Tatuí: Rua Professora Maria de Lourdes Sinisgali, nº 412 - Jd Wanderley - Tatuí/SP
                    <br />
                    São Paulo: Rua Doutor Ribeiro de Almeida, nº 323 - Barra Funda/SP
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4 mt-1">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                  <p className="text-gray-600">
                    <a 
                      href={whatsappUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      (15) 99828-4005
                    </a>
                    <br />
                    <a 
                      href="https://api.whatsapp.com/send?phone=5515996694005&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Rapidex" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      (15) 99669-4005
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4 mt-1">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                  <p className="text-gray-600">
                    <a 
                      href="mailto:tatuirapidex@gmail.com" 
                      className="hover:text-primary transition-colors"
                    >
                      tatuirapidex@gmail.com
                    </a>
                    <br />
                    <span className="font-medium">E-mail Coletas:</span>
                    <br />
                    <a 
                      href="mailto:coletasrapidex@gmail.com" 
                      className="hover:text-primary transition-colors"
                    >
                      coletasrapidex@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3">Cidades Atendidas</h3>
                <p className="text-gray-600">
                  São Paulo (Capital e Grande São Paulo), Tatuí, Sorocaba, Campinas, Ribeirão Preto
                  e todas as principais cidades do estado, com capacidade para entregas em todo o Brasil.
                </p>
              </div>
            </div>
          </div>
          
          <div className="appear-anim h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58906.41353899428!2d-47.8965509!3d-23.345998300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5d8f03b548433%3A0xac526b79b2d56b7b!2sTatu%C3%AD%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1715452034532!5m2!1spt-BR!2sbr"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Rapidex Transportes"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
