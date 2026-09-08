import BankTransfer from "@/components/donations/BankTransfer";
import DonationForm from "@/components/donations/DonationForm";
import Transparency from "@/components/donations/Transparency";
import WorksGallery from "@/components/donations/WorksGallery";

export default function DonarPage() {
  return (
    <div className="w-full bg-surface animate-[fadeIn_0.5s_ease-out]">
      <section className="w-full py-space-2xl md:py-space-3xl max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="font-[family-name:var(--font-body)] text-[14px] font-bold uppercase tracking-widest text-primary">
            Campaña Casa Sacerdotal
          </span>
          <h1 className="font-[family-name:var(--font-headline)] text-[32px] md:text-[40px] text-on-surface mt-space-2xs leading-tight">
            Entre todos, podemos hacerlo posible
          </h1>
          <div className="w-16 h-1 bg-primary-container mx-auto my-space-md rounded-full opacity-80" />
          <p className="font-[family-name:var(--font-body)] text-[16px] text-on-surface-variant leading-relaxed">
            Nuestra comunidad se prepara para comenzar con los arreglos de la Casa Sacerdotal. Necesitamos de tu ayuda, ya sea sumándote como Padrino, con un Bono Contribución, o acompañándonos con tus oraciones.
          </p>
        </div>

        <DonationForm />
        
        <div className="mt-space-3xl pt-space-xl border-t border-outline-variant/20">
          <Transparency />
        </div>
      </section>

      <section className="w-full py-space-2xl bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop">
          <BankTransfer />
        </div>
      </section>

      <WorksGallery />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}