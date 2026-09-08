import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#1B1A20] shadow-md transition-all duration-300">
      <div className="h-20 max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-gutter-sm">
        
        <Link href="/" className="flex items-center gap-space-sm group cursor-pointer">
          <div className="flex flex-col transition-transform duration-300 group-hover:scale-105">
            <span className="font-[family-name:var(--font-headline)] text-[18px] font-semibold text-primary-fixed uppercase transition-colors duration-300 group-hover:text-primary-fixed-dim">
              Parroquia
            </span>
            <span className="font-[family-name:var(--font-body)] text-[10px] font-semibold text-on-primary uppercase tracking-widest opacity-90 group-hover:opacity-100 transition-opacity">
              San José Obrero
            </span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-space-md">
          <Link href="/" className="font-[family-name:var(--font-body)] text-[12px] font-bold uppercase text-primary-fixed hover:text-primary-fixed-dim transition-colors duration-200 cursor-pointer">Inicio</Link>
          <Link href="/#horarios" className="font-[family-name:var(--font-body)] text-[12px] font-semibold uppercase text-inverse-on-surface hover:text-primary-fixed transition-colors duration-200 cursor-pointer">Horarios</Link>
          <Link href="/#jovenes" className="font-[family-name:var(--font-body)] text-[12px] font-semibold uppercase text-inverse-on-surface hover:text-primary-fixed transition-colors duration-200 cursor-pointer">Jóvenes Unidos</Link>
        </nav>

        <div className="flex items-center gap-space-sm">
          <Link 
            href="/donar" 
            className="group flex items-center gap-2 px-space-md py-space-xs rounded bg-primary-container text-on-primary font-[family-name:var(--font-body)] text-[14px] font-bold uppercase tracking-widest shadow-sm hover:bg-primary hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <Heart className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            Donar
          </Link>
        </div>
      </div>
    </header>
  );
}
