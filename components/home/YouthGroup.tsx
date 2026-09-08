import { Flame, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function YouthGroup() {
  return (
    <section id="jovenes" className="w-full py-space-3xl bg-surface-container border-t border-outline-variant/20 overflow-hidden scroll-mt-20">
      <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-2xl items-center">
          
          <div className="flex flex-col gap-space-md animate-[fadeIn_0.8s_ease-out_forwards]">
            <div className="flex items-center gap-space-md mb-space-xs">
              <div className="w-20 h-20 rounded-full bg-surface-container-highest border-2 border-primary-container flex items-center justify-center shadow-md overflow-hidden group cursor-pointer">
                <Users className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <span className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-widest text-primary font-bold flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" /> Pastoral Juvenil
                </span>
                <h2 className="font-[family-name:var(--font-headline)] text-[28px] md:text-[34px] text-on-surface mt-1 leading-tight">
                  Proyecto Jóvenes Unidos
                </h2>
              </div>
            </div>
            
            <p className="font-[family-name:var(--font-body)] text-[15px] text-on-surface-variant leading-relaxed">
              Somos la fuerza joven de la Parroquia San José Obrero. Un espacio de encuentro, misión y amistad donde buscamos a Cristo en el servicio a los demás. Nos reunimos semanalmente para compartir la vida, formarnos en la fe y llevar esperanza a nuestro barrio.
            </p>

            <div className="flex flex-col sm:flex-row gap-space-sm pt-space-sm">
              <Link 
                href="https://wa.me/5491155550190"
                target="_blank"
                className="group flex items-center justify-center gap-2 px-space-lg py-space-sm rounded-lg bg-primary-container text-on-primary font-[family-name:var(--font-body)] text-[13px] font-bold uppercase tracking-wider shadow-sm hover:bg-primary hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Sumate al Grupo
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-space-sm">
            <div className="flex flex-col gap-space-sm">
              <div className="rounded-2xl overflow-hidden h-40 shadow-sm border border-outline-variant/10 group cursor-pointer">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVr2ekHaqs6hphXuSbzCTM-nv8876nborQY3y0Wffcv8aE_rG426witKJjGzyiFZzXM7zYZo8CAVReJW658T-FuB0WadWEUnRBJxhiGs7y2d9y7Em5UCL3NGwF-bzBsZj0ohzD7hKBg0DDlN1Mj5-b0JbwQMNlayBVKeSSA1xVOqVKcKLLkUhyvZIOS9YYvRFsDCT_BOqmNKXfSSoWw6xy8luXuOBZ16V_rPHiR6wv0Gx1R7CO_Thw7A" 
                  alt="Jóvenes en misión" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-56 shadow-sm border border-outline-variant/10 group cursor-pointer">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaZV62Q3OzXE0yMncyXVYVrJIvp5RR8ujrsI2sHhek4eloPICFUk1GFGcHLaYGoOVDQKAgwehD15_3FIDqHcFfP6zw9f-K0iP6lR-bLSeuSLA6cgU4QOL7utJgVyMYkqBvUQJms4QwAFqh8ePGGCvNAOkFI1A1WWKNPzGI75MBXa_heUell4Rj89FhoiXM1zr-LA0D5yORa-r-sgod-g_0E-j4-Ah4D16vQMhLXCwNGdxzb4SCqPj1rQ" 
                  alt="Encuentro de jóvenes" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-space-sm pt-space-lg">
              <div className="rounded-2xl overflow-hidden h-56 shadow-sm border border-outline-variant/10 group cursor-pointer">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTrxYfRhR8GDjwewT2j-by6N1GDSlHTmvfnIx2WjxU0HW7axGP-p0zc_ehvtzFolN6AAzllZnxnsWbMdZt-x50tkloFcWOHCUQoLLBA9Y-Pc_s1fJYzimPoTMyHt7CfDIBgfSDZ9xkqpIaseIKP6qfFO_sJlrw-ur6rtcxH2nufLZVsZDsApe7hUaARfwiJo0e3pqpXhoDB_4GoFVJn0OVc2Frd_C0ugCPAlEpgSNjtkF_kMmpbcuhjQ" 
                  alt="Retiro espiritual" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-40 shadow-sm border border-outline-variant/10 group cursor-pointer bg-primary-container/10 flex items-center justify-center">
                <span className="font-[family-name:var(--font-headline)] text-[20px] text-primary font-bold">#JovenesUnidos</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
