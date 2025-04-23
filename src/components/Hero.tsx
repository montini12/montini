import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen relative bg-gradient-to-b from-blue-900 to-blue-800 flex items-center justify-center overflow-hidden"
    >
      {/* Background texture */}
      <div 
        className="https://d1fvq72qdoyrow.cloudfront.net/6808d8c246ce9b0012c17518/e691a268-d8d2-40f4-b739-ba8d02add2e8---design-sem-nome--3-.png?Expires=1745499235&Key-Pair-Id=K30Q3TNPY13FGE&Signature=Wykc9A9Z5iOPVIju~DlNIS-YEU3T-oTKhtVTluXmPiPSVODeA34515hxuh-v7iL-hu0WGHsgx~9ESKPb3vnGWyuuKNmtvKB81BfcSuPwIRUmXuy~rpb4AisEABNNn-fEGD5-Sv2bL39VtGYDv7bCwlO~Ciu~KvzqQ1GNuSjIjyWdrh1bIFf-3g2psUH4VcbS-IZDQyK7ad13P89E8g6Dd2KYqOBj-srKetQUGU8McRjynwSJN~~np3cYXyaA-Y7N1QwOEoFFM2~xAzK~InbibpIV6cIVyPF7evlZFmOq8SKrqgd8VqX6QsSD4SAomvhfT3VEXoEYY2O~bF1IhxURoQ__"
      ></div>
      
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2">
              <span className="block text-yellow-300 italic">Montini</span>
              <span className="block mt-2">MINOXIDIL KIRKLAND</span>
            </h1>
            <p className="text-blue-100 mt-6 text-lg md:text-xl max-w-xl mx-auto md:mx-0">
              A solução tópica de Minoxidil é ideal para estimular o crescimento de barba, 
              preenchendo os espaços vazios e promovendo um visual mais completo.
            </p>
            <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center md:justify-start">
              <a
                href="https://w.app/capone-ltda"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-md hover:bg-yellow-300 
                         transition transform hover:scale-105 shadow-lg inline-block text-center"
              >
                Saiba Mais
              </a>
              <button
                onClick={() => scrollToSection('results')}
                className="px-8 py-3 bg-transparent text-white border-2 border-white font-semibold rounded-md 
                         hover:bg-white/10 transition"
              >
                Resultados
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-96 md:w-[600px] h-96 md:h-[600px] transform hover:scale-105 transition duration-500 ease-in-out">
              <img 
                src="https://d1fvq72qdoyrow.cloudfront.net/6808d8c246ce9b0012c17518/791fb958-45dd-42ea-80d7-7dbebf7538ba---design-sem-nome--2-.png?Expires=1745498221&Key-Pair-Id=K30Q3TNPY13FGE&Signature=K5yCghl6QjdfY4Lq9NGXQucb2a5ArbRSdnYaatOAqLP2aLP27WGSIV9x-V-NsysU6sV-NmpT2iyXppRdOrjFiKug-BTeYCOzxotkaz-e8Y6pPl2oUcKvPp3Io1I0YgU8-S6cBd0iYLPk09itHZjBUrglzabPoBNmybORzTdWlrhZ10tlQX8-RUGWEZtZTgCkXHx8Chg1-WvB1xfXpS-cTzJnLttqDVK6~kBnM6KsG5Wjqfc3s5XObMCWeU-pXHs8vA6r7tLaOVTeZD6SFduYg4EPmzURr7o5in2gyzCgGFZZ7o1F4imwOuHL0CJ0-~O6nnKo3AyNr6K2-OtZrFV0lw__" 
                alt="Minoxidil Kirkland" 
                className="object-contain w-full h-full filter drop-shadow-2xl"
              />
              <div className="absolute -right-4 -bottom-4 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full rotate-6">
                6 meses
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <button
            onClick={() => scrollToSection('product')}
            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            <ChevronDown size={24} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;