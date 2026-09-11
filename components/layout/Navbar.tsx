import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#3c2804] shadow-md transition-all duration-300">
      <div className="h-25 max-w-285 mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-gutter-sm">
        
        <Link href="/" className="flex items-center gap-space-md group cursor-pointer">
          <div className="relative w-20 h-20">
            <Image 
              src="/logo-no-text.webp" 
              alt="Logo Parroquia San José Obrero" 
              sizes="100px"
              fill 
              className="object-contain"
              loading="eager"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-(family-name:--font-body)  text-[12px] font-semibold text-on-primary uppercase tracking-widest opacity-90 group-hover:opacity-100 transition-opacity">
              Parroquia
            </span>
            <span className="font-headline text-[22px] font-semibold text-primary-fixed uppercase transition-colors duration-300 group-hover:text-primary-fixed-dim">
              San José Obrero
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}
