
import React, { useEffect, useRef } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5515998284005&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Garuda";
  
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
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="appear-anim">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4 mt-1">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Endereços</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-gray-50 p-4 border-l-4 border-primary">
                      <p className="font-semibold text-lg">Tatuí</p>
                      <p className="text-gray-600">
                        Rua Professora Maria de Lourdes Sinisgali, nº 412<br />
                        Jd Wanderley - Tatuí/SP
                      </p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4 border-l-4 border-primary">
                      <p className="font-semibold text-lg">São Paulo</p>
                      <p className="text-gray-600">
                        Rua Doutor Ribeiro de Almeida, nº 323<br />
                        Barra Funda - São Paulo/SP
                      </p>
                    </div>
                  </div>
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
                      href="https://api.whatsapp.com/send?phone=5515996694005&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Garuda" 
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
                      href="mailto:tatuigaruda@gmail.com" 
                      className="hover:text-primary transition-colors"
                    >
                      tatuigaruda@gmail.com
                    </a>
                    <br />
                    <span className="font-medium">E-mail Coletas:</span>
                    <br />
                    <a 
                      href="mailto:coletasgaruda@gmail.com" 
                      className="hover:text-primary transition-colors"
                    >
                      coletasgaruda@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="appear-anim space-y-6">
            <h3 className="text-xl font-semibold">Nossas Localizações</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="h-[250px] rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5245556605403!2d-47.84935112377704!3d-23.512663959492244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a922ae3da9f%3A0x56f05afe9c70f09b!2sR.%20Profa.%20Maria%20de%20Lourdes%20Sinisgalli%2C%20412%20-%20Jardim%20Wanderley%2C%20Tatu%C3%AD%20-%20SP%2C%2018278-471!5e0!3m2!1spt-BR!2sbr!4v1716248642318!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Garuda Transportes - Tatuí"
                  className="rounded-xl"
                ></iframe>
              </div>
              <div className="h-[250px] rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.3003724601946!2d-46.66594982377685!3d-23.521800359536097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57f3be2be02d%3A0x9658239558f6e52e!2sR.%20Dr.%20Ribeiro%20de%20Almeida%2C%20323%20-%20Barra%20Funda%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001137-010!5e0!3m2!1spt-BR!2sbr!4v1716248751736!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Garuda Transportes - São Paulo"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
