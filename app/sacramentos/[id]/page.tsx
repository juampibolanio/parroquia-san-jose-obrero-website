import Link from 'next/link';
import { ArrowLeft, BookHeart, Info, Clock } from 'lucide-react';

export default function SacramentoDetallePage({ params }: { params: { id: string } }) {
  return (
    <div className="w-full bg-surface min-h-screen animate-[fadeIn_0.5s_ease-out]">
      <div className="w-full bg-surface-container-low border-b border-outline-variant/20 pt-space-3xl pb-space-2xl px-margin-mobile">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-surface-container border border-primary-container/30 flex items-center justify-center mx-auto mb-space-md shadow-sm">
            <BookHeart className="w-8 h-8 text-primary" />
          </div>
          <span className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-widest text-primary font-bold">
            Sacramentos
          </span>
          <h1 className="font-[family-name:var(--font-headline)] text-[32px] md:text-[40px] text-on-surface mt-1 capitalize">
            {params.id}
          </h1>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-margin-mobile py-space-2xl">
        <Link 
          href="/#sacramentos"
          className="group inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-[13px] uppercase tracking-wider text-outline hover:text-primary font-bold transition-colors duration-300 mb-space-xl cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Volver a Inicio
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg mb-space-2xl">
          <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm border border-outline-variant/20">
            <div className="flex items-center gap-2 text-primary mb-space-sm font-[family-name:var(--font-headline)] text-[20px] font-bold">
              <Info className="w-5 h-5" /> Requisitos
            </div>
            <ul className="flex flex-col gap-2 font-[family-name:var(--font-body)] text-[14px] text-on-surface-variant list-disc pl-5">
              <li>Fotocopia del DNI.</li>
              <li>Certificado de cursada (si aplica).</li>
              <li>Completar la ficha de inscripción en despacho.</li>
            </ul>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm border border-outline-variant/20">
            <div className="flex items-center gap-2 text-primary mb-space-sm font-[family-name:var(--font-headline)] text-[20px] font-bold">
              <Clock className="w-5 h-5" /> Horarios de Inscripción
            </div>
            <p className="font-[family-name:var(--font-body)] text-[14px] text-on-surface-variant leading-relaxed">
              Acercate al despacho parroquial de martes a sábados de 16:30 a 19:30 hs para gestionar este sacramento.
            </p>
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
}
