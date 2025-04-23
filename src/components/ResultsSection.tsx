import React from 'react';

const ResultsSection = () => {
  const results = [
    {
      image: "https://d1fvq72qdoyrow.cloudfront.net/6808d8c246ce9b0012c17518/d2edeaa5-6422-45cf-80a7-1b6ef715b90d---1.png?Expires=1745498939&Key-Pair-Id=K30Q3TNPY13FGE&Signature=4SDEKnCKqPdaJ7zh3R71Z3LGsHRvxIpJsR~Ms0WSzo974DeVM9ckWGnZhnSI82p0~7YnnPiatSxzZUcKAdUC-3uXpIFVWPIIIs6bT8CzzBqBFP3ryNiEXbAXKjzN1ouEgOh44M1dEZ4XTxYAsFMUYhVuE5G9HJ6qK9~AfXtbZwv-IA-NfOMmbAqqDuZe~M2V7NmTkuSTrKTwp0G5lgPlhrTcMJdq5YhoPw69uqNKPUzW~QLqJZlA8mH-OMGMpFpawD4h3INPC957KRVkGXvdmpY4bD5pD048q7Mpje4sshgjZpohsg3BTyvK-fvpHgkU2Nm9pDubvow-YWIBMKPoLA__",
      description: "Preenchimento completo de falhas na barba após 4 meses de uso"
    },
    {
      image: "https://d1fvq72qdoyrow.cloudfront.net/6808d8c246ce9b0012c17518/a1e4f888-10fa-4c6e-a7cc-1d7036c8b37c---2.png?Expires=1745498940&Key-Pair-Id=K30Q3TNPY13FGE&Signature=dTOUmt4A-BS14rW20Y4eoDbDrbBPo3TzQWs-vCWNefWlP-f-QnfECFHejdD0Gaot3f~5gEI86UWYuR7AuUupUEhhguhQ7oI1dzxlrVxgIuLlP6ELzuSIyUzKDMP~LmriQPv0Wffy~tEKMb~lBKridaYd4KEuKFwwDRT9s4Xs8aU65KcSd6ddfmnbFjOKwRwtJVuSl8Mb7eoR6vknu4eqSKVFSHpv6PgXJHd-~Y1Op1MsUyPLT6Vin86g5y0ypSStXvRixwy4zIznCIBa6AD0lZAd~ZJFxn0Klgv7f891fe2JASuEya~RHkYV4L0gNRgWWUswTe517sWqwvGC8mcF-Q__",
      description: "Aumento de densidade e volume em 6 meses de tratamento"
    },
    {
      image: "https://d1fvq72qdoyrow.cloudfront.net/6808d8c246ce9b0012c17518/1196eff4-7401-464a-bd84-d33229d07190---3.png?Expires=1745498954&Key-Pair-Id=K30Q3TNPY13FGE&Signature=dYTFLsjMWcO3LtENr6nd2U3g1-1SFxnF8tmomRGoPvMOHSVmNJYIbEH~V0Bx~VH6iXYrlAfZcjqAise3GpIficgGkgitI3jT5nJoicZ~rr3bsLz~DfN0KR~cZh~NrZUNZ8K6GD6v4nyKc~aUeMMI~d4Edl79OipK3GizeMaMqM5jozuE1wFat11218IGHI3hPytIigG4m8Y02Pw4Cwdj5tqi3Dme2PLQI1LG8UA2kI9QixNjWVyoMwJdJ4JUioSExXVnAjR9Y4Fe0k10ttrs0qlhxitN3TE0aOF-1Q9Y3YuQ9k57~rBSKapb8IrwSWn6p0LmCWJ5UjvjCubotrL20Q__",
      description: "Crescimento uniforme em toda região após 5 meses"
    }
  ];

  const testimonials = [
    {
      name: "Carlos S.",
      text: "Depois de tentar vários produtos, finalmente encontrei algo que realmente funciona. Em 4 meses já vi resultados incríveis na minha barba.",
      rating: 5
    },
    {
      name: "Marcos P.",
      text: "Sempre tive dificuldade em ter uma barba completa. O Minoxidil Kirkland preencheu todas as falhas e agora tenho a barba que sempre quis.",
      rating: 5
    },
    {
      name: "André L.",
      text: "Produto de qualidade e resultados reais. Vale cada centavo investido!",
      rating: 4
    }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
            RESULTADOS REAIS
          </h2>
          <p className="text-blue-200 max-w-3xl mx-auto">
            Veja as transformações de quem já utilizou o Minoxidil Kirkland Montini e conseguiu 
            resultados surpreendentes no crescimento da barba.
          </p>
        </div>
        
        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {results.map((result, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={result.image} 
                  alt={`Resultado ${index + 1}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <p className="text-center mt-4 text-blue-100">
                {result.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10">O Que Nossos Clientes Dizem</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="bg-blue-800/50 backdrop-blur p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-blue-100 italic mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-sm">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;