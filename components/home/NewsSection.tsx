import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export default function NewsSection() {
  const news = [
    {
      category: "Obras",
      date: "08 Septiembre 2026",
      title: "Lanzamiento del Bono Contribución para la Casa Sacerdotal",
      excerpt: "Nuestra comunidad se prepara para comenzar con los arreglos edilicios urgentes. Sumate como padrino o adquirí tu bono hoy.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOogigQJo6AdWSEc7zbtIv2_F46ZEUS-GXjc3OnUyfjxnVOXduxeFyYVgDlbLTbdZzaNTIFS1lHBLgrnff2GuCYyTZ4TKqOXE8bUiexAvlCZam8c6fbSwExe7gijcc9aFTTmyIMmsypyVQyoU37-TVo5m5Q79LL7fHZLv4Lwj1HChHBdupS5IPb5_oR2OB_JoEcoJcZucTM2WQPZUaYeUT9BHkIyd7SwTC84R2d5kBUYfiS-4jIJl_0A",
      link: "/donar",
      delay: "0ms"
    },
    {
      category: "Pastoral",
      date: "01 Septiembre 2026",
      title: "Encuentro de Familias y Bendición de Herramientas",
      excerpt: "Compartimos una hermosa jornada comunitaria de oración, pidiendo a San José Obrero por el pan y el trabajo en nuestros hogares.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTrxYfRhR8GDjwewT2j-by6N1GDSlHTmvfnIx2WjxU0HW7axGP-p0zc_ehvtzFolN6AAzllZnxnsWbMdZt-x50tkloFcWOHCUQoLLBA9Y-Pc_s1fJYzimPoTMyHt7CfDIBgfSDZ9xkqpIaseIKP6qfFO_sJlrw-ur6rtcxH2nufLZVsZDsApe7hUaARfwiJo0e3pqpXhoDB_4GoFVJn0OVc2Frd_C0ugCPAlEpgSNjtkF_kMmpbcuhjQ",
      link: "#",
      delay: "150ms"
    },
    {
      category: "Cáritas",
      date: "25 Agosto 2026",
      title: "Campaña Solidaria: «El Pan de Cada Día en Cada Mesa»",
      excerpt: "Agradecemos a todos los que aportaron alimentos y abrigo para acompañar a más de 120 familias de la barriada este último mes.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrfko_OlkBMK6UwrJ-vckwMQts1XKRugPVvgdg8Dn20tfty9fC7v-xZE2IBDDXfozr7qj0zl44EhO8AO1bXge-M5bo1aquV56MmgFa3WbRo2tfDdmK2ZQm5Muwtk5T8ZB8_NAHxb83YZGDlU4tTSJrVq7VZWqMHLK2D2XpNC3JXwoHBq7e8pg-zp2FCkoCXKH1BZZLEE1pA63b1fu0uiaaPaINvVGG1KkaAdBsGGnqC6hCrJ3M8R1ANQ",
      link: "#",
      delay: "300ms"
    }
  ];

  return (
    <section id="noticias" className="w-full py-space-3xl max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop scroll-mt-20 overflow-hidden">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
        <div>
          <span className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-widest text-primary font-bold">
            Boletín Parroquial
          </span>
          <h2 className="font-[family-name:var(--font-headline)] text-[28px] md:text-[32px] text-on-surface mt-1">
            Noticias y Actualidad
          </h2>
          <div className="w-16 h-1 bg-primary-container my-space-sm rounded-full opacity-70" />
        </div>
        
        <Link 
          href="#"
          className="group inline-flex items-center gap-1 font-[family-name:var(--font-body)] text-[13px] uppercase tracking-wider text-primary font-bold hover:text-primary-fixed-dim transition-colors duration-300 cursor-pointer"
        >
          Ver todas las publicaciones 
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md lg:gap-space-lg">
        {news.map((item, index) => (
          <article 
            key={index} 
            className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-outline-variant/20 hover:border-primary-container/40 transition-all duration-500 flex flex-col cursor-default"
            style={{ animation: `fadeInUp 0.6s ease-out ${item.delay} both` }}
          >
            <div className="h-48 overflow-hidden relative">
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
              
              <Link 
                href={item.link}
                className="inline-flex items-center gap-1 font-[family-name:var(--font-body)] text-[12px] uppercase tracking-wider text-primary font-bold hover:text-primary-fixed-dim transition-colors duration-300 w-fit cursor-pointer group/link"
              >
                Leer más 
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
