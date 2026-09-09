import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#1B1A20] shadow-md transition-all duration-300">
      <div className="h-20 max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-gutter-sm">
        
        <Link href="/" className="flex items-center gap-space-sm group cursor-pointer">
          <div className="flex flex-col transition-transform duration-300 group-hover:scale-105">
            <span className="font-[family-name:var(--font-body)] text-[10px] font-semibold text-on-primary uppercase tracking-widest opacity-90 group-hover:opacity-100 transition-opacity">
              Parroquia
            </span>
            <span className="font-[family-name:var(--font-headline)] text-[18px] font-semibold text-primary-fixed uppercase transition-colors duration-300 group-hover:text-primary-fixed-dim">
              San José Obrero
            </span>
          </div>
        </Link>

        {/*<div className="flex items-center gap-space-sm">
          <Link 
            href="#donar" 
            className="group flex items-center gap-2 px-space-md py-space-xs rounded bg-primary-container text-on-primary font-[family-name:var(--font-body)] text-[14px] font-bold uppercase tracking-widest shadow-sm hover:bg-primary hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <Heart className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            Quiero Colaborar
          </Link>
        </div>*/}
      </div>
    </header>
  );
}