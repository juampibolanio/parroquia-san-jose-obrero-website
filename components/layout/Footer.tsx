export default function Footer() {
  return (
    <footer className="w-full bg-[#1B1A20] text-inverse-on-surface mt-space-3xl py-space-2xl border-t-4 border-primary-container">
      <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-space-md">
        
        <div className="group cursor-default">
            <span className="font-[family-name:var(--font-headline)] text-[22px] font-medium text-primary-fixed transition-colors duration-300 group-hover:text-primary-fixed-dim">San José Obrero</span>
            <p className="font-[family-name:var(--font-body)] text-[13px] text-outline-variant mt-2">
            Av. San José 1950, Barrio Obrero<br/>
            WhatsApp Despacho: +54 9 11 5555-0190
            </p>
        </div>

        <div className="text-center md:text-right">
            <p className="font-[family-name:var(--font-headline)] text-[18px] italic text-primary-fixed-dim max-w-sm hover:text-primary-fixed transition-colors duration-300">
                «Custodio de las santas familias y consuelo de los trabajadores, ruega por nosotros.»
            </p>
        </div>

      </div>
    </footer>
  );
}
