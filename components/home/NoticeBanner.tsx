import Link from 'next/link';
import { Handshake, ArrowRight } from 'lucide-react';

export default function NoticeBanner() {
  return (
    <section className="w-full bg-secondary-container text-on-secondary-container py-space-md shadow-sm border-b border-outline-variant/30 hover:bg-[#ebd3c1] transition-colors duration-300">
      <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm">
          <Handshake className="w-7 h-7 text-primary animate-pulse" />
          <div>
            <span className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-wider text-primary font-bold">
              ¡Atención Comunidad!
            </span>
            <p className="font-[family-name:var(--font-body)] text-[14px] font-medium">
              Campaña Bono Contribución: Sumate como padrino para la remodelación edilicia de la parroquia.
            </p>
          </div>
        </div>
        
        <Link 
          href="/donar"
          className="group inline-flex items-center gap-space-2xs text-primary font-[family-name:var(--font-body)] text-[13px] uppercase font-bold hover:text-[#55441a] transition-colors duration-200 whitespace-nowrap"
        >
          Ser Padrino de Obra 
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
