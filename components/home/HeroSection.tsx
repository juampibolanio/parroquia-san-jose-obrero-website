import Link from 'next/link';
import Image from 'next/image';
import { Heart, Hammer, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1B1A20] group/hero">
      <div className="absolute inset-0 z-0">
        <Image
          src="/pquia1.webp"
          alt="Parroquia San José Obrero"
          fill
          priority
          className="object-cover transition-transform duration-[10s] group-hover/hero:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1A20]/75 via-[#1B1A20]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop py-space-3xl lg:py-[100px] flex flex-col justify-center min-h-[600px] relative">
        <div className="max-w-2xl flex flex-col gap-space-md opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          
          <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-space-2xs rounded-full bg-primary/20 backdrop-blur border border-primary-container/30 text-primary-fixed hover:bg-primary/30 transition-colors duration-300">
            <Hammer className="w-4 h-4" />
            <span className="font-[family-name:var(--font-body)] text-[11px] font-bold uppercase tracking-widest">
              ¡Atención Comunidad!
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-headline)] text-[36px] lg:text-[44px] text-white font-medium leading-tight drop-shadow-sm">
            Proyecto Casa y Vehículo Sacerdotal
          </h1>

          <p className="font-[family-name:var(--font-body)] text-[16px] lg:text-[18px] text-white/90 leading-relaxed max-w-xl">
            La comunidad parroquial se prepara para comenzar con los arreglos edilicios y del vehículo sacerdotal. Necesitamos de todos. Te invitamos a sumarte como Padrino de la iniciativa o adquirir el nuevo Bono Contribución.
          </p>

          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <Link 
              href="#donar"
              className="group flex items-center gap-space-xs px-space-xl py-space-sm rounded bg-primary-container text-on-primary font-[family-name:var(--font-body)] text-[14px] font-bold uppercase tracking-widest shadow-md hover:bg-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <Heart className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              Colaborar
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-0 animate-[fadeIn_2s_ease-out_1s_forwards]">
          <Link href="#donar" className="text-white/50 hover:text-primary-fixed transition-colors cursor-pointer">
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </Link>
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
