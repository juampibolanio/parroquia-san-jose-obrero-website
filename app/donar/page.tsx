import BankTransfer from "@/components/donations/BankTransfer";
import DonationForm from "@/components/donations/DonationForm";

export default function DonarPage() {
  return (
    <div className="w-full bg-surface animate-[fadeIn_0.5s_ease-out]">
      <section className="w-full py-space-2xl md:py-space-3xl max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="font-[family-name:var(--font-body)] text-[14px] font-bold uppercase tracking-widest text-primary">
            Bono contribución | Casa Sacerdotal
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

        <div className="text-center max-w-2xl mx-auto mb-space-2xl mt-space-2xl">
          <div className="w-16 h-1 bg-primary-container mx-auto my-space-md rounded-full opacity-80" />
          <p className="font-[family-name:var(--font-body)] text-[16px] text-on-surface-variant leading-relaxed">
            Hoy estamos llamados a unirnos y trabajar juntos para que, entre todos, podamos comenzar a hacer realidad este proyecto tan importante para nuestra comunidad.
            Pero sabemos que acompañar también es estar presentes con nuestras oraciones. Por eso, además de la colaboración económica, contamos con la oración y el acompañamiento de cada uno de ustedes.
          </p>
          <span className="font-[family-name:var(--font-body)] text-[14px] text-on-surface-variant mt-space-md block">
            Parroquia San José Obrero - Resistencia
          </span>
        </div>

      </section>

      <section className="w-full py-space-2xl bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop">
          <BankTransfer />
        </div>
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