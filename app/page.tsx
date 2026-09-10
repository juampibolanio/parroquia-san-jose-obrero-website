import BankTransfer from '@/components/donations/BankTransfer';
import DonationForm from '@/components/donations/DonationForm';
import HeroSection from '@/components/home/HeroSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full animate-[fadeIn_0.5s_ease-out]">
      <HeroSection />
      
      <section id="donar" className="w-full py-space-2xl md:py-space-3xl max-w-285 mx-auto px-margin-mobile lg:px-margin-desktop scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="font-(family-name:--font-body) text-[14px] font-bold uppercase tracking-widest text-primary">
            Campaña Casa Sacerdotal
          </span>
          <h2 className="font-headline text-[32px] md:text-[40px] text-on-surface mt-space-2xs leading-tight">
            Entre todos, podemos hacerlo posible
          </h2>
          <div className="w-16 h-1 bg-primary-container mx-auto my-space-md rounded-full opacity-80" />
          <p className="font-(family-name:--font-body) text-[16px] text-on-surface-variant leading-relaxed">
            Hoy estamos llamados a unirnos. Tu aporte nos permite hacer realidad este proyecto tan importante para nuestra comunidad.
          </p>
        </div>
        
        <DonationForm />

        <div className="flex items-center justify-center gap-space-md my-space-xl opacity-70">
          <div className="h-px w-16 bg-outline-variant" />
          <span className="font-(family-name:--font-body) text-[12px] uppercase font-bold tracking-widest text-outline">
            O si preferís
          </span>
          <div className="h-px w-16 bg-outline-variant" />
        </div>

        <BankTransfer />

      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}