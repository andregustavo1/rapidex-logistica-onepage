
import React, { useRef, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const CitiesServed = () => {
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

  const citiesGroups = [
    {
      region: "TATUÍ E REGIÃO",
      cities: ["TATUÍ", "BOITUVA", "CERQUILHO", "TIETÊ", "IPERÓ", "CAPELA DO ALTO", "CESÁRIO LANGE", "ITAPETININGA", "PORTO FELIZ"]
    },
    {
      region: "CAPITAL E GRANDE SÃO PAULO",
      cities: ["BARUERI", "ITAPEVI", "JANDIRA", "CARAPICUÍBA", "COTIA", "OSASCO", "EMBÚ DAS ARTES", "TABOÃO DA SERRA", "CAJAMAR", "GUARULHOS", "ARUJÁ", "DIADEMA", "SÃO BERNARDO DO CAMPO", "SANTO ANDRÉ", "SÃO CAETANO"]
    },
    {
      region: "CAMPINAS E REGIÃO",
      cities: ["CAMPINAS", "JUNDIAÍ", "ITATIBA", "VALINHOS", "VINHEDO", "HORTOLÂNDIA", "MONTE MOR", "CAPIVARI", "PAULÍNIA", "SUMARÉ", "AMERICANA", "STA BARBARA D'OESTE", "INDAIATUBA", "ITU"]
    }
  ];

  return (
    <section ref={sectionRef} id="cidades-atendidas" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title appear-anim">Cidades Atendidas</h2>
          <p className="section-subtitle appear-anim">
            Entregas diárias nas principais cidades e regiões
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {citiesGroups.map((group, index) => (
            <div key={index} className="appear-anim bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold flex items-center">
                  <MapPin className="mr-2" size={20} />
                  {group.region}
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {group.cities.map((city, cityIndex) => (
                    <li key={cityIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center appear-anim">
          <p className="text-lg mb-6">Precisando de entregas em alguma dessas cidades?</p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Solicitar Cotação
          </a>
        </div>
      </div>
    </section>
  );
};

export default CitiesServed;
