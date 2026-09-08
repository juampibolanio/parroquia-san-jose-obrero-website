export default function WorksGallery() {
  const photos = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWVCNgdoGesNUmrSZTavB_q5Q39-za5fxIh120zK9h2B9Wp6YRLTpGESAEG8-gnD5AIPwUNgsat0aZ4hvdLCLlwNC69X-Y8M8xiOh7EVJGEnMo02F69rZMCC237JPbPAE935yv9Rm0_vII4rhQEGaRLRkwRPKorq2YenDNWsSISzXH5gfQuYtGY-ASw395TiIgt17xpgL0sPrJTnEH1PJA9lQmnqsHLebX5aAwfqekTboG07Aagbtajg",
      alt: "Cimientos del salón",
      label: "Construcción de Cimientos"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3Auw9pJfy9KTUbJhUgLw0ZA-6CtcJO3XqNmo5NLAgGE5npJ6QjF8LhXxrQ9IBEtda4mkyQQOb7uX5q1mkU73UivffoFEq4GPwL5Oz29KlCLC4sM1OR_afbY5C7LAzvDAiQiWevULSE5uoTL00zeAoY1JA4HYcIarFr2l4WAPyAN8ZELtOudGZ-7ElQQ4Zo4qfcZirclcVrF6oqGpCdl4VQiAvbaZ3N_067JPek85Hg827ZhyPeD9lCg",
      alt: "Carpintería",
      label: "Restauración en Madera"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaZV62Q3OzXE0yMncyXVYVrJIvp5RR8ujrsI2sHhek4eloPICFUk1GFGcHLaYGoOVDQKAgwehD15_3FIDqHcFfP6zw9f-K0iP6lR-bLSeuSLA6cgU4QOL7utJgVyMYkqBvUQJms4QwAFqh8ePGGCvNAOkFI1A1WWKNPzGI75MBXa_heUell4Rj89FhoiXM1zr-LA0D5yORa-r-sgod-g_0E-j4-Ah4D16vQMhLXCwNGdxzb4SCqPj1rQ",
      alt: "Encuentro sacerdotal",
      label: "Bendición Pastoral"
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm_XFzyq2S6SkEcuepUmrKWnQ9a3Nc5hQkl6PtXvAvBv5RfQGj8wOevSSWKcHh7FpKkg-avd_q-bsQ5gbFwlWZD3A9yDdeVbdtvIPcYfA5DZzkkcRx23eGiQ9CeZB_VO7hUAnoBKYeaYmIG6cDw70XTLm826PAmher76Qb_BoyHQCAdaxds3SIliZCsSUmuL3_rBUA0jeDc14a88CtTOkdVVou3jOoiuYfQPQA2NqSZxoEuxpElzpviQ",
      alt: "Equipo de padrinos",
      label: "Nuestros Voluntarios"
    }
  ];

  return (
    <section className="w-full py-space-3xl bg-surface-container-low border-t border-outline-variant/20">
      <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop">
        
        <div className="text-center max-w-xl mx-auto mb-space-2xl">
          <span className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-widest text-primary font-bold">
            Obras en Curso
          </span>
          <h2 className="font-[family-name:var(--font-headline)] text-[28px] md:text-[32px] text-on-surface mt-1">
            Tu ofrenda hecha realidad
          </h2>
          <div className="w-16 h-1 bg-primary-container mx-auto my-space-sm rounded-full opacity-70" />
          <p className="font-[family-name:var(--font-body)] text-[15px] text-on-surface-variant leading-relaxed">
            Compartimos el avance de las remodelaciones edilicias gracias al esfuerzo incondicional de los padrinos y la comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-space-sm md:gap-space-md">
          {photos.map((photo, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-xl overflow-hidden shadow-sm h-64 md:h-72 border border-outline-variant/10 cursor-pointer"
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1A20]/90 via-[#1B1A20]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-space-md">
                <span className="font-[family-name:var(--font-body)] text-[13px] text-white font-bold uppercase tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
