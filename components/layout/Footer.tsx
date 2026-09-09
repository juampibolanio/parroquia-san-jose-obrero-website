import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1B1A20] text-inverse-on-surface mt-space-3xl relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary-container to-transparent opacity-70" />

      <div className="max-w-285 mx-auto px-margin-mobile lg:px-margin-desktop pt-space-2xl pb-space-xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-2xl items-center border-b border-outline-variant/10 pb-space-2xl">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <div className="group cursor-default flex items-center gap-space-md">
              <div className="relative w-20 h-20 transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/logo-w-text.webp" 
                  alt="Logo Parroquia San José Obrero" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-(family-name:--font-body) text-[10px] font-semibold text-on-primary uppercase tracking-widest opacity-90 transition-opacity">
                  Parroquia
                </span>
                <span className="font-headline text-[22px] md:text-[28px] font-medium text-primary-fixed transition-colors duration-300 group-hover:text-primary-fixed-dim">
                  San José Obrero
                </span>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 font-(family-name:--font-body) text-[14px] text-outline-variant">
              <div className="flex items-center gap-3 justify-center md:justify-start group">
                <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span>Molina & Echeverria - Resistencia, Chaco</span>
              </div>
              
              <div className="flex items-center gap-3 justify-center md:justify-start group">
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <a 
                  href="mailto:pquiasanjoseobrero56@gmail.com" 
                  className="hover:text-primary-fixed-dim transition-colors duration-300 cursor-pointer"
                >
                  pquiasanjoseobrero56@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-4 font-(family-name:--font-body) text-[12px] text-outline-variant/60">
          <p>© {new Date().getFullYear()} Parroquia San José Obrero. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
