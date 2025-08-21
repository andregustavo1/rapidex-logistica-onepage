import React, { useEffect, useRef } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5515998284005&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Garuda%20Transportes.";
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
  return <section ref={sectionRef} id="contato" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title appear-anim">
            Onde Estamos e Como Nos Encontrar
          </h2>
          <p className="section-subtitle appear-anim">
            Entre em contato para solicitar uma cotação ou tirar suas dúvidas
          </p>
        </div>
        
        <div className="flex justify-center gap-12 items-center">
          <div className="appear-anim">
            <div className="space-y-8">
              
              
              <div className="flex justify-center items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4 mt-1">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                  <p className="text-gray-600">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      (15) 99828-4005
                    </a>
                    <br />
                    
                  </p>
                </div>
              </div>
              
              
            </div>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default Contact;