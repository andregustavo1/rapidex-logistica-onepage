import React, { useRef, useEffect } from 'react';
import { MapPin } from 'lucide-react';
const CitiesServed = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5515998284005&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Rapidex";
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
  const citiesGroups = [{
    region: "TATUÍ E REGIÃO",
    cities: ["TATUÍ", "BOITUVA", "CERQUILHO", "TIETÊ", "IPERÓ", "CAPELA DO ALTO", "CESÁRIO LANGE", "ITAPETININGA", "PORTO FELIZ"]
  }, {
    region: "CAPITAL E GRANDE SÃO PAULO",
    cities: ["BARUERI", "ITAPEVI", "JANDIRA", "CARAPICUÍBA", "COTIA", "OSASCO", "EMBÚ DAS ARTES", "TABOÃO DA SERRA", "CAJAMAR", "GUARULHOS", "ARUJÁ", "DIADEMA", "SÃO BERNARDO DO CAMPO", "SANTO ANDRÉ", "SÃO CAETANO"]
  }, {
    region: "CAMPINAS E REGIÃO",
    cities: ["CAMPINAS", "JUNDIAÍ", "ITATIBA", "VALINHOS", "VINHEDO", "HORTOLÂNDIA", "MONTE MOR", "CAPIVARI", "PAULÍNIA", "SUMARÉ", "AMERICANA", "STA BARBARA D'OESTE", "INDAIATUBA", "ITU"]
  }];
  return;
};
export default CitiesServed;