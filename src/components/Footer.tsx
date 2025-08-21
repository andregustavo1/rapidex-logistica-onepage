import React from 'react';
import { Truck, Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5515998284005&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Rapidex";
  return <footer className="bg-secondary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              
            </div>
            <p className="text-gray-300 mb-6">
              Soluções logísticas eficientes em frete fracionado e dedicado, atendendo diariamente São Paulo, capital e grande São Paulo, com capacidade de entrega para todo o Brasil.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-primary transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#diferenciais" className="text-gray-300 hover:text-primary transition-colors">Nossos Diferenciais</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-primary transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#clientes" className="text-gray-300 hover:text-primary transition-colors">Clientes</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-primary transition-colors">Contato</a>
              </li>
              <li>
                <a href="#processo" className="text-gray-300 hover:text-primary transition-colors">Como Funciona</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Frete Fracionado</li>
              <li className="text-gray-300">Frete Dedicado</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-2 mt-1 text-primary" size={18} />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                  (15) 99828-4005 / (15) 99669-4005
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 mt-1 text-primary" size={18} />
                <div>
                  <a href="mailto:tatuirapidex@gmail.com" className="text-gray-300 hover:text-primary transition-colors block">
                    tatuirapidex@gmail.com
                  </a>
                  <a href="mailto:coletasrapidex@gmail.com" className="text-gray-300 hover:text-primary transition-colors block">
                    coletasrapidex@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Rapidex Transportes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;