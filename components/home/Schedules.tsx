import { Clock, BookHeart, MapPin, Church, PenLine } from 'lucide-react';

export default function Schedules() {
  const chapels = [
    {
      name: "Capilla Virgen de los Pobres",
      address: "[Completar dirección de la capilla]",
      mass: "[Completar días y horarios de misa]",
      confession: "[Completar horarios de confesión]"
    },
    {
      name: "Capilla Inmaculado Corazón de María",
      address: "[Completar dirección de la capilla]",
      mass: "[Completar días y horarios de misa]",
      confession: "[Completar horarios de confesión]"
    },
    {
      name: "Capilla Cristo Redentor del Mundo",
      address: "[Completar dirección de la capilla]",
      mass: "[Completar días y horarios de misa]",
      confession: "[Completar horarios de confesión]"
    },
    {
      name: "Capilla Nuestra Señora de la Merced",
      address: "[Completar dirección de la capilla]",
      mass: "[Completar días y horarios de misa]",
      confession: "[Completar horarios de confesión]"
    }
  ];

  return (
    <section id="horarios" className="w-full py-space-3xl bg-surface-container-low scroll-mt-20 border-t border-outline-variant/20">
      <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop">
        
        <div className="text-center max-w-xl mx-auto mb-space-2xl">
          <span className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-widest text-primary font-bold">
            Liturgia y Encuentro
          </span>
          <h2 className="font-[family-name:var(--font-headline)] text-[28px] md:text-[32px] text-on-surface mt-1">
            Nuestras Iglesias y Capillas
          </h2>
          <div className="w-16 h-1 bg-primary-container mx-auto my-space-sm rounded-full opacity-70" />
          <p className="font-[family-name:var(--font-body)] text-[15px] text-on-surface-variant leading-relaxed">
            Acercate a celebrar la fe en la sede parroquial o en la capilla más cercana a tu hogar.
          </p>
        </div>

        <div className="mb-space-lg group bg-surface-container-lowest rounded-2xl p-space-lg md:p-space-xl shadow-md border border-primary-container/30 hover:border-primary/60 transition-all duration-500 hover:shadow-lg">
          <div className="flex flex-col md:flex-row gap-space-lg">
            
            <div className="flex-1">
              <div className="flex items-center gap-space-sm text-primary mb-2">
                <Church className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" />
                <h3 className="font-[family-name:var(--font-headline)] text-[24px] text-on-surface font-bold">
                  Sede: Parroquia San José Obrero
                </h3>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant font-[family-name:var(--font-body)] text-[14px] mb-space-md">
                <MapPin className="w-4 h-4 text-primary opacity-80" />
                <span>Av. San José 1950, Barrio Obrero</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div>
                  <div className="flex items-center gap-2 font-[family-name:var(--font-body)] text-[14px] font-bold text-on-surface mb-2">
                    <Clock className="w-4 h-4 text-primary" /> Santas Misas
                  </div>
                  <ul className="flex flex-col gap-1 font-[family-name:var(--font-body)] text-[14px] text-on-surface-variant">
                    <li className="flex justify-between border-b border-outline-variant/10 pb-1">
                      <span>Mar a Vie</span>
                      <span className="font-semibold text-primary">19:30 hs</span>
                    </li>
                    <li className="flex justify-between border-b border-outline-variant/10 pb-1">
                      <span>Sábados</span>
                      <span className="font-semibold text-primary">19:00 hs</span>
                    </li>
                    <li className="flex justify-between pt-1">
                      <span>Domingos</span>
                      <span className="font-semibold text-primary">10:30 hs y 20:00 hs</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 font-[family-name:var(--font-body)] text-[14px] font-bold text-on-surface mb-2">
                    <BookHeart className="w-4 h-4 text-primary" /> Reconciliación
                  </div>
                  <ul className="flex flex-col gap-1 font-[family-name:var(--font-body)] text-[14px] text-on-surface-variant">
                    <li className="flex justify-between border-b border-outline-variant/10 pb-1">
                      <span>Mié y Vie</span>
                      <span className="font-semibold text-primary">18:30 a 19:15 hs</span>
                    </li>
                    <li className="flex justify-between pt-1">
                      <span>Sábados</span>
                      <span className="font-semibold text-primary">18:00 a 19:00 hs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 bg-surface-container rounded-xl p-space-md border border-outline-variant/20">
              <div className="flex items-center gap-2 font-[family-name:var(--font-body)] text-[14px] font-bold text-on-surface mb-2">
                <PenLine className="w-4 h-4 text-primary" /> Despacho Parroquial
              </div>
              <p className="font-[family-name:var(--font-body)] text-[12px] text-on-surface-variant mb-space-xs">
                Para solicitar partidas, inscripción a catequesis e intenciones de misa.
              </p>
              <ul className="flex flex-col gap-1 font-[family-name:var(--font-body)] text-[13px] text-on-surface-variant mb-space-sm">
                <li className="flex justify-between border-b border-outline-variant/10 pb-1">
                  <span>Mar a Sáb</span>
                  <span className="font-semibold text-primary">16:30 a 19:30 hs</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span>Dom y Lun</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {chapels.map((chapel, index) => (
            <div 
              key={index} 
              className="group bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md border border-outline-variant/20 hover:border-primary-container/40 transition-all duration-500 hover:-translate-y-1 cursor-default"
            >
              <h4 className="font-[family-name:var(--font-headline)] text-[18px] text-on-surface font-semibold mb-1 group-hover:text-primary transition-colors">
                {chapel.name}
              </h4>
              <div className="flex items-center gap-2 text-on-surface-variant font-[family-name:var(--font-body)] text-[13px] mb-space-sm pb-space-xs border-b border-outline-variant/10">
                <MapPin className="w-3.5 h-3.5 text-primary opacity-80" />
                <span>{chapel.address}</span>
              </div>
              
              <div className="flex flex-col gap-2 font-[family-name:var(--font-body)] text-[13px]">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <span className="font-bold text-on-surface block">Misas:</span>
                    <span className="text-on-surface-variant">{chapel.mass}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <BookHeart className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <span className="font-bold text-on-surface block">Confesiones:</span>
                    <span className="text-on-surface-variant">{chapel.confession}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
