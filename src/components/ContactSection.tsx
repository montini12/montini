import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 pr-0 lg:pr-12 mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-6">
                VAMOS CONVERSAR
              </h2>
              <p className="text-blue-700 mb-8 max-w-lg">
                Estamos prontos para responder suas dúvidas e ajudar você a conquistar a barba dos seus sonhos. 
                Entre em contato conosco por qualquer um dos canais abaixo.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-lg text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Telefone</h3>
                    <p className="text-blue-700">+351 924874605</p>
                    <p className="text-sm text-blue-600 mt-1">Segunda a Sexta, 9h às 18h</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-lg text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Email</h3>
                    <p className="text-blue-700">contato@Montini.com</p>
                    <p className="text-sm text-blue-600 mt-1">Respondemos em até 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-lg text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Endereço</h3>
                    <p className="text-blue-700">Rua almeida costa 342</p>
                    <p className="text-sm text-blue-600 mt-1">CEP: 4715-634</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-900 p-3 rounded-lg text-white">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">Redes Sociais</h3>
                    <div className="flex space-x-3 mt-2">
                      <a href="#" className="bg-blue-800 hover:bg-blue-700 text-white p-2 rounded-full transition">
                        <Instagram size={18} />
                      </a>
                      <a href="#" className="bg-blue-800 hover:bg-blue-700 text-white p-2 rounded-full transition">
                        <Facebook size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Entre em Contato</h3>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-700 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-blue-700 mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-blue-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Digite sua mensagem aqui..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition transform hover:translate-y-[-2px]"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-blue-200">
            <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">Sobre a Montini</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-blue-700 mb-4">
                  A Montini é uma empresa especializada em produtos para o crescimento e tratamento de barba 
                  e cabelo. Com anos de experiência no mercado, nos tornamos referência em soluções eficazes 
                  para quem busca melhorar sua aparência e autoestima.
                </p>
                <p className="text-blue-700">
                  Trabalhamos apenas com produtos originais e de alta qualidade, garantindo resultados 
                  reais e seguros para nossos clientes. Nossa missão é ajudar homens a conquistar a 
                  aparência que sempre desejaram.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Nossa Garantia</h3>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-900 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Produtos 100% originais
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-900 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Garantia de satisfação ou seu dinheiro de volta
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-900 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Entrega segura e rastreável
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-900 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Suporte técnico para orientar durante o tratamento
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;