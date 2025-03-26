
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Differentials from '../components/Differentials';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import WorkProcess from '../components/WorkProcess';
import LastCTA from '../components/LastCTA';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer to handle animations when elements come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with appear-anim class
    document.querySelectorAll('.appear-anim').forEach((element) => {
      observer.observe(element);
    });

    // Clean up
    return () => {
      document.querySelectorAll('.appear-anim').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Override document title for PT-BR
  useEffect(() => {
    document.title = "Rapidex Transportes | Soluções Logísticas";
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Soluções logísticas em frete fracionado e dedicado, atendendo São Paulo e todo o Brasil com rapidez e eficiência."
      );
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Services />
        <Clients />
        <WorkProcess />
        <Contact />
        <LastCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
