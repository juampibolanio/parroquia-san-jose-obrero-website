import { Home, Zap, Droplets, Paintbrush } from 'lucide-react';

export default function Transparency() {
  const items = [
    {
      title: "Techos y Filtraciones",
      desc: "Reparación estructural de la cubierta para proteger las instalaciones de la humedad.",
      icon: Home,
      delay: "0ms"
    },
    {
      title: "Instalación Eléctrica",
      desc: "Renovación completa del cableado para garantizar la seguridad del edificio.",
      icon: Zap,
      delay: "100ms"
    },
    {
      title: "Plomería y Sanitarios",
      desc: "Arreglo de cañerías y puesta en valor de los baños de la vivienda.",
      icon: Droplets,
      delay: "200ms"
    },
    {
      title: "Terminaciones",
      desc: "Pintura general, revoques y acondicionamiento final de la Casa Sacerdotal.",
      icon: Paintbrush,
      delay: "300ms"
    }
  ];

  return (
    <section className="w-full py-space-2xl">
      <div className="text-center max-w-xl mx-auto mb-space-2xl">
        <span className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-widest text-primary font-bold">
          Transparencia
        </span>
        <h2 className="font-[family-name:var(--font-headline)] text-[28px] md:text-[32px] text-on-surface mt-1">
          El Proyecto: Casa Sacerdotal
        </h2>
        <div className="w-16 h-1 bg-primary-container mx-auto my-space-sm rounded-full opacity-70" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        {items.map((item, index) => (
          <div 
            key={index}
            className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/20 hover:border-primary-container/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-default"
            style={{ animation: `fadeInUp 0.6s ease-out ${item.delay} both` }}
          >
            <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
              <item.icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
            </div>
            <h4 className="font-[family-name:var(--font-headline)] text-[18px] text-on-surface mb-2">
              {item.title}
            </h4>
            <p className="font-[family-name:var(--font-body)] text-[14px] text-on-surface-variant leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
