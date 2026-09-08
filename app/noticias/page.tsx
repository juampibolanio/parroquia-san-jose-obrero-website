import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export default function NoticiasPage() {
  const news = [
    {
      id: "bono-contribucion",
      category: "Obras",
      date: "08 Septiembre 2026",
      title: "Lanzamiento del Bono Contribución para la Casa Sacerdotal",
      excerpt: "Nuestra comunidad se prepara para comenzar con los arreglos edilicios urgentes. Sumate como padrino o adquirí tu bono hoy.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOogigQJo6AdWSEc7zbtIv2_F46ZEUS-GXjc3OnUyfjxnVOXduxeFyYVgDlbLTbdZzaNTIFS1lHBLgrnff2GuCYyTZ4TKqOXE8bUiexAvlCZam8c6fbSwExe7gijcc9aFTTmyIMmsypyVQyoU37-TVo5m5Q79LL7fHZLv4Lwj1HChHBdupS5IPb5_oR2OB_JoEcoJcZucTM2WQPZUaYeUT9BHkIyd7SwTC84R2d5kBUYfiS-4jIJl_0A",
    },
    {
      id: "encuentro-familias",
      category: "Pastoral",
      date: "01 Septiembre 2026",
      title: "Encuentro de Familias y Bendición de Herramientas",
      excerpt: "Compartimos una hermosa jornada comunitaria de oración, pidiendo a San José Obrero por el pan y el trabajo en nuestros hogares.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTrxYfRhR8GDjwewT2j-by6N1GDSlHTmvfnIx2WjxU0HW7axGP-p0zc_ehvtzFolN6AAzllZnxnsWbMdZt-x50tkloFcWOHCUQoLLBA9Y-Pc_s1fJYzimPoTMyHt7CfDIBgfSDZ9xkqpIaseIKP6qfFO_sJlrw-ur6rtcxH2nufLZVsZDsApe7hUaARfwiJo0e3pqpXhoDB_4GoFVJn0OVc2Frd_C0ugCPAlEpgSNjtkF_kMmpbcuhjQ",
    }
  ];

  return (
    <div className="w-full bg-surface min-h-screen animate-[fadeIn_0.5s_ease-out]">
      <section className="w-full py-space-2xl md:py-space-3xl max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-space-3xl">
          <span className="font-[family-name:var(--font-body)] text-[14px] font-bold uppercase tracking-widest text-primary">
            Boletín Parroquial
          </span>
          <h1 className="font-[family-name:var(--font-headline)] text-[32px] md:text-[40px] text-on-surface mt-space-2xs leading-tight">
            Noticias y Actualidad
          </h1>
          <div className="w-16 h-1 bg-primary-container mx-auto my-space-md rounded-full opacity-80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md lg:gap-space-lg">
          {news.map((item) => (
            <article 
              key={item.id} 
              className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-outline-variant/20 hover:border-primary-container/40 transition-all duration-500 flex flex-col cursor-pointer"
            >
              <Link href={`/noticias/${item.id}`} className="flex flex-col h-full">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur px-3 py-1 rounded-md">
                    <span className="font-[family-name:var(--font-body)] text-[10px] uppercase font-bold text-primary tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-space-lg flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-outline font-[family-name:var(--font-body)] text-[11px] font-semibold uppercase tracking-wider mb-space-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-headline)] text-[20px] text-on-surface mb-space-xs leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[14px] text-on-surface-variant mb-space-md leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                  
                  <div className="inline-flex items-center gap-1 font-[family-name:var(--font-body)] text-[12px] uppercase tracking-wider text-primary font-bold transition-colors duration-300 w-fit">
                    Leer más 
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
}
