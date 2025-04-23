import React from 'react';
import { Check } from 'lucide-react';

const ProductSection = () => {
  const benefits = [
    "Promove o crescimento da barba em áreas com falhas",
    "Fórmula comprovada cientificamente e aprovada",
    "Tratamento completo com duração de 6 meses",
    "Resultados visíveis em 3-4 meses de uso contínuo",
    "Fácil aplicação duas vezes ao dia",
    "Solução líquida de absorção rápida",
    "Contém 5% de Minoxidil - concentração ideal",
    "Produto original importado"
  ];

  return (
    <section id="product" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">
            MINOXIDIL KIRKLAND
          </h2>
          <p className="text-blue-700 max-w-3xl mx-auto text-lg">
            O segredo para alcançar uma barba cheia e uniforme está aqui. Conheça o Minoxidil Kirkland,
            solução tópica que revoluciona o crescimento capilar.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <img 
                src="https://i.imgur.com/dQX7W3l.jpeg" 
                alt="Minoxidil Kirkland Box Contents" 
                className="w-full h-auto object-contain mx-auto"
              />
              <div className="mt-8 bg-blue-900 text-white px-6 py-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Conteúdo da Embalagem</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-yellow-400 p-1 rounded-full mr-2">
                      <Check size={16} className="text-blue-900" />
                    </span>
                    6 frascos de 60ml cada
                  </li>
                  <li className="flex items-center">
                    <span className="bg-yellow-400 p-1 rounded-full mr-2">
                      <Check size={16} className="text-blue-900" />
                    </span>
                    Aplicadores dosadores
                  </li>
                  <li className="flex items-center">
                    <span className="bg-yellow-400 p-1 rounded-full mr-2">
                      <Check size={16} className="text-blue-900" />
                    </span>
                    Instruções de uso detalhadas
                  </li>
                  <li className="flex items-center">
                    <span className="bg-yellow-400 p-1 rounded-full mr-2">
                      <Check size={16} className="text-blue-900" />
                    </span>
                    Garantia de produto original
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Benefícios</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-3 transform hover:scale-105 transition"
                >
                  <div className="bg-blue-500 p-2 rounded-full flex-shrink-0">
                    <Check size={18} className="text-white" />
                  </div>
                  <p className="text-blue-800">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Como Funciona</h3>
              <p className="mb-4">
                O Minoxidil atua diretamente nos folículos capilares, aumentando o fluxo sanguíneo 
                na região e estimulando o crescimento de novos pelos. Para resultados visíveis:
              </p>
              <ol className="space-y-2 list-decimal pl-5">
                <li>Aplicar 1ml na área desejada 2x ao dia</li>
                <li>Usar continuamente por pelo menos 3-4 meses</li>
                <li>Manter a pele limpa antes da aplicação</li>
                <li>Resultados completos em 6-12 meses de uso</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;