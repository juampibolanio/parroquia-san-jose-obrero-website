import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Identity() {
  return (
    <section id="comunidad" className="w-full py-space-3xl max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
        
        <div className="lg:col-span-5 flex flex-col gap-space-sm animate-[fadeIn_0.8s_ease-out_forwards]">
          <span className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-widest text-primary font-bold">
            Nuestra Identidad
          </span>
          <h2 className="font-[family-name:var(--font-headline)] text-[32px] md:text-[38px] text-on-surface leading-snug">
            San José Obrero: Fe, Trabajo y Servicio Fraterno
          </h2>
          <div className="w-16 h-1 bg-primary-container my-space-2xs rounded-full opacity-70" />
          
          <p className="font-[family-name:var(--font-body)] text-[15px] text-on-surface-variant leading-relaxed">
            Inspirados en la figura del Santo Patriarca artesano, nuestra comunidad nació en el corazón del barrio con el esfuerzo de familias obreras. Aquí cada ladrillo puesto, cada misa rezada y cada plato servido es fruto de la fe compartida.
          </p>
          
          <blockquote className="p-space-md rounded-lg bg-secondary-container/50 border-l-4 border-secondary text-on-secondary-container italic font-[family-name:var(--font-body)] text-[15px] my-space-xs shadow-sm">
            «El trabajo del carpintero enseña la paciencia, el cuidado de cada detalle y el valor del servicio silencioso.»
          </blockquote>
          
          <p className="font-[family-name:var(--font-body)] text-[15px] text-on-surface-variant leading-relaxed mb-space-sm">
            El templo es el hogar de todos: ancianos, jóvenes que buscan su vocación, niños en catequesis y trabajadores que buscan consuelo ante el Señor.
          </p>

          <div>
            <Link 
              href="/donar"
              className="group inline-flex items-center gap-space-xs text-primary font-[family-name:var(--font-body)] text-[14px] uppercase font-bold tracking-wider hover:text-[#55441a] transition-colors duration-200 cursor-pointer"
            >
              Sumate como padrino de la parroquia 
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 gap-space-md lg:pl-space-lg">
          <div className="flex flex-col gap-space-md">
            <div className="group rounded-xl overflow-hidden shadow-md h-64 border border-outline-variant/20">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnVz5E5wYQow7r_U6lkioGumGU5ZA3Pf4vnHe21T9IztUmdmq93QViLkgI_qdjAsiJWXgdKkB1Pb6E8gAi5WEgOGfy30kxweYdmsXE1h4vOTD1yRiqipZOBjCZn3E2H1fvJuVD8gzW6-RTBCxyfIjQMR0nB1BrKeVfe4jjenb4cZsvw47-W-3peGg9YWK2rG0TCbCDvDUvAULK92YOVeqrY1BVtGD6aCntqGcb9owitMMDlPUuLd4hbg" 
                alt="Estatua de San José Obrero" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md h-44 bg-surface-container p-space-lg flex flex-col justify-center border border-outline-variant/20 hover:border-primary-container/40 transition-all duration-300 cursor-default">
              <span className="font-[family-name:var(--font-headline)] text-[36px] text-primary font-bold group-hover:scale-105 transition-transform origin-left">1954</span>
              <span className="font-[family-name:var(--font-body)] text-[10px] uppercase tracking-wider text-outline font-bold mt-1">Año de Fundación</span>
              <p className="font-[family-name:var(--font-body)] text-[13px] text-on-surface-variant mt-2 leading-tight">
                Más de 70 años de presencia evangelizadora ininterrumpida.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-space-md pt-space-xl">
            <div className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md h-44 bg-surface-container-low p-space-lg flex flex-col justify-center border border-outline-variant/20 hover:border-secondary-container/80 transition-all duration-300 cursor-default">
              <span className="font-[family-name:var(--font-headline)] text-[36px] text-secondary font-bold group-hover:scale-105 transition-transform origin-left">450+</span>
              <span className="font-[family-name:var(--font-body)] text-[10px] uppercase tracking-wider text-outline font-bold mt-1">Familias en Cáritas</span>
              <p className="font-[family-name:var(--font-body)] text-[13px] text-on-surface-variant mt-2 leading-tight">
                Acompañadas mensualmente con alimentos, abrigo y contención.
              </p>
            </div>
            
            <div className="group rounded-xl overflow-hidden shadow-md h-64 border border-outline-variant/20">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVr2ekHaqs6hphXuSbzCTM-nv8876nborQY3y0Wffcv8aE_rG426witKJjGzyiFZzXM7zYZo8CAVReJW658T-FuB0WadWEUnRBJxhiGs7y2d9y7Em5UCL3NGwF-bzBsZj0ohzD7hKBg0DDlN1Mj5-b0JbwQMNlayBVKeSSA1xVOqVKcKLLkUhyvZIOS9YYvRFsDCT_BOqmNKXfSSoWw6xy8luXuOBZ16V_rPHiR6wv0Gx1R7CO_Thw7A" 
                alt="Comunidad de la parroquia" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
