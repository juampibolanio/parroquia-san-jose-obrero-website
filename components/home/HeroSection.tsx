import Link from 'next/link';
import Image from 'next/image';
import { Heart, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#3E2E00]">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/sjo1.webp"
          alt="Interior de la Parroquia San José Obrero"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent pointer-events-none md:w-3/4" />
      </div>

      <div className="relative z-10 max-w-285 mx-auto px-margin-mobile lg:px-margin-desktop py-space-3xl lg:py-30 flex flex-col justify-center min-h-screen md:min-h-175">
        <div className="max-w-2xl flex flex-col gap-space-md opacity-0 animate-[fadeIn_1s_ease-out_forwards] mt-space-3xl md:mt-0">

          <div className="inline-flex items-center self-start px-space-sm py-space-2xs rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white shadow-lg transition-colors duration-300">
            <span className="font-(family-name:--font-body) text-[11px] font-bold uppercase tracking-widest [text-shadow:0_2px_4px_rgb(0_0_0/80%)]">
              ¡Atención Comunidad!
            </span>
          </div>

          <h1 className="font-headline text-[36px] lg:text-[48px] text-white font-medium leading-tight [text-shadow:0_4px_16px_rgb(0_0_0/80%),0_2px_4px_rgb(0_0_0/100%)]">
            Proyecto Casa y Vehículo Sacerdotal
          </h1>

          <p className="font-(family-name:--font-body) text-[16px] lg:text-[18px] text-white/95 leading-relaxed max-w-xl font-medium [text-shadow:0_3px_10px_rgb(0_0_0/90%),0_1px_3px_rgb(0_0_0/100%)]">
            La comunidad parroquial se prepara para comenzar con los arreglos edilicios y del vehículo sacerdotal. Necesitamos de todos. Te invitamos a sumarte como Padrino de la iniciativa o adquirir el nuevo Bono Contribución.
          </p>

          <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
            <Link 
              href="#donar"
              className="group flex items-center gap-space-xs px-space-xl py-space-sm rounded bg-primary-fixed text-[#3E2E00] font-(family-name:--font-body) text-[14px] font-bold uppercase tracking-widest shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:bg-white hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <Heart className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              Colaborar
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-0 animate-[fadeIn_2s_ease-out_1s_forwards]">
          <Link href="#donar" className="text-white/80 hover:text-white transition-colors cursor-pointer">
            <ChevronDown className="w-10 h-10 animate-bounce drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" />
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