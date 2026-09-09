import DonationForm from '@/components/donations/DonationForm';
import HeroSection from '@/components/home/HeroSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full animate-[fadeIn_0.5s_ease-out]">
      <HeroSection />
      
      <section id="donar" className="w-full py-space-2xl md:py-space-3xl max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="font-[family-name:var(--font-body)] text-[14px] font-bold uppercase tracking-widest text-primary">
            Campaña Casa Sacerdotal
          </span>
          <h2 className="font-[family-name:var(--font-headline)] text-[32px] md:text-[40px] text-on-surface mt-space-2xs leading-tight">
            Entre todos, podemos hacerlo posible
          </h2>
          <div className="w-16 h-1 bg-primary-container mx-auto my-space-md rounded-full opacity-80" />
          <p className="font-[family-name:var(--font-body)] text-[16px] text-on-surface-variant leading-relaxed">
            Hoy estamos llamados a unirnos. Tu aporte nos permite hacer realidad este proyecto tan importante para nuestra comunidad.
          </p>
        </div>
        
        <DonationForm />
      </section>

      {/*<section className="w-full py-space-2xl bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop">
          <BankTransfer />
        </div>
      </section>*/}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
