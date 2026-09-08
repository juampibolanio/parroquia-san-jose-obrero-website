import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function NoticiaDetallePage({ params }: { params: { id: string } }) {
  return (
    <article className="w-full bg-surface min-h-screen animate-[fadeIn_0.5s_ease-out]">
      <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1B1A20]/50 z-10" />
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOogigQJo6AdWSEc7zbtIv2_F46ZEUS-GXjc3OnUyfjxnVOXduxeFyYVgDlbLTbdZzaNTIFS1lHBLgrnff2GuCYyTZ4TKqOXE8bUiexAvlCZam8c6fbSwExe7gijcc9aFTTmyIMmsypyVQyoU37-TVo5m5Q79LL7fHZLv4Lwj1HChHBdupS5IPb5_oR2OB_JoEcoJcZucTM2WQPZUaYeUT9BHkIyd7SwTC84R2d5kBUYfiS-4jIJl_0A"
          alt="Portada de noticia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-end justify-center pb-space-2xl px-margin-mobile">
          <div className="max-w-3xl text-center">
            <span className="inline-block bg-primary text-on-primary font-[family-name:var(--font-body)] text-[12px] uppercase font-bold tracking-widest px-3 py-1 rounded-full mb-space-md">
              Obras
            </span>
            <h1 className="font-[family-name:var(--font-headline)] text-[32px] md:text-[44px] text-white leading-tight drop-shadow-md">
              Lanzamiento del Bono Contribución para la Casa Sacerdotal
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-margin-mobile py-space-2xl">
        <Link 
          href="/noticias"
          className="group inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-[13px] uppercase tracking-wider text-outline hover:text-primary font-bold transition-colors duration-300 mb-space-xl cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Volver a Noticias
        </Link>

        <div className="flex items-center gap-2 text-primary font-[family-name:var(--font-body)] text-[13px] font-semibold uppercase tracking-wider mb-space-lg">
          <Calendar className="w-4 h-4" />
          <span>08 Septiembre 2026</span>
        </div>

        <div className="prose prose-lg prose-stone max-w-none font-[family-name:var(--font-body)] text-on-surface-variant leading-relaxed space-y-space-md">
          <p className="text-[18px] font-medium text-on-surface">
            La comunidad parroquial San José Obrero se prepara para lanzar, en el transcurso de este mes, el nuevo BONO CONTRIBUCIÓN, destinado a comenzar con los arreglos de la CASA SACERDOTAL.
          </p>
          <p>
            Para poder llevar adelante este proyecto, ¡necesitamos de todos! Queremos invitar a nuestra comunidad a sumarse y también a quienes quieran ser PADRINOS de esta iniciativa. Hoy estamos llamados a unirnos y trabajar juntos para que, entre todos, podamos comenzar a hacer realidad este proyecto tan importante.
          </p>
          <p>
            Pero sabemos que acompañar también es estar presentes con nuestras oraciones. Por eso, además de la colaboración económica, contamos con la oración y el acompañamiento de cada uno de ustedes.
          </p>
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </article>
  );
}
