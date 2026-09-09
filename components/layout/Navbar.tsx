import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#1B1A20] shadow-md transition-all duration-300">
      <div className="h-20 max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-gutter-sm">
        
        <Link href="/" className="flex items-center gap-space-md group cursor-pointer">
          <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/logo-no-text.webp" 
              alt="Logo Parroquia San José Obrero" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="flex flex-col transition-transform duration-300 group-hover:scale-105">
            <span className="font-[family-name:var(--font-body)]  text-[10px] font-semibold text-on-primary uppercase tracking-widest opacity-90 group-hover:opacity-100 transition-opacity">
              Parroquia
            </span>
            <span className="font-[family-name:var(--font-headline)] text-[18px] font-semibold text-primary-fixed uppercase transition-colors duration-300 group-hover:text-primary-fixed-dim">
              San José Obrero
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}
