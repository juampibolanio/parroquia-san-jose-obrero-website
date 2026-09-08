import Link from 'next/link';
import { Heart, ArrowRight, ShieldCheck, HandHeart, Hammer } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1B1A20] group/hero">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-[10s] group-hover/hero:scale-105"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD90uqoavA4sa4etcjui_SJwAJq2lom9AU7vj2XlueJkAjdoWBQ3cW_31DTL10fSN9E9YP9-L9iUup5hR1v_T8SxjxOcS12EBVIQarEGARIjTzNYOerZ2REyMjYmcXRkX4_LebtYGKdtO1e5z0J_Pz8pUjF4XFlY7SvwqNT8sW8LzsydhZJ0xZhAO0SmN77YlHmXdvZXfvO2dt0LrpmgJ2CbIrWTAshx6O7qOcaWaIl2hwYsrPjKe6Ifg')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B1A20]/95 via-[#1B1A20]/85 to-[#1B1A20]/70" />

      <div className="relative z-10 max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-3xl lg:py-[100px] flex flex-col justify-center min-h-[560px]">
        <div className="max-w-2xl flex flex-col gap-space-md opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          
          <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-space-2xs rounded-full bg-primary/20 backdrop-blur border border-primary-container/30 text-primary-fixed hover:bg-primary/30 transition-colors duration-300 cursor-default">
            <Hammer className="w-4 h-4" />
            <span className="font-[family-name:var(--font-body)] text-[11px] font-bold uppercase tracking-widest">
              Proyecto Casa Sacerdotal
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-headline)] text-[36px] lg:text-[44px] text-white font-medium leading-tight drop-shadow-sm">
            Entre todos, podemos hacerlo posible
          </h1>

          <p className="font-[family-name:var(--font-body)] text-[16px] lg:text-[18px] text-inverse-on-surface/90 leading-relaxed max-w-xl">
            Nuestra comunidad lanza el nuevo Bono Contribución para iniciar los arreglos edilicios urgentes de la Casa Sacerdotal. Necesitamos de tu colaboración económica y tus oraciones.
          </p>

          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <Link 
              href="/donar"
              className="group flex items-center gap-space-xs px-space-xl py-space-sm rounded bg-primary-container text-on-primary font-[family-name:var(--font-body)] text-[14px] font-bold uppercase tracking-widest shadow-md hover:bg-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <Heart className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              Adquirir Bono / Ser Padrino
            </Link>

            <Link 
              href="#horarios"
              className="group flex items-center gap-space-xs px-space-lg py-space-sm rounded bg-white/10 backdrop-blur text-white font-[family-name:var(--font-body)] text-[14px] font-bold uppercase tracking-widest hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              Horarios de Misas
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex items-center gap-space-lg pt-space-md text-surface-container-high border-t border-white/10 mt-space-sm opacity-90">
            <div className="flex items-center gap-space-xs group/badge hover:opacity-100 transition-opacity cursor-default">
              <ShieldCheck className="w-5 h-5 text-primary-fixed transition-transform duration-300 group-hover/badge:scale-110" />
              <span className="font-[family-name:var(--font-body)] text-[13px] text-surface-container-low">Donación 100% segura</span>
            </div>
            <div className="flex items-center gap-space-xs group/badge hover:opacity-100 transition-opacity cursor-default">
              <HandHeart className="w-5 h-5 text-primary-fixed transition-transform duration-300 group-hover/badge:scale-110" />
              <span className="font-[family-name:var(--font-body)] text-[13px] text-surface-container-low">Destinado íntegro a obras</span>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
