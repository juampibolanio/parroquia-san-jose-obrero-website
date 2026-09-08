import { Droplets, BookHeart, Flame, Heart, HeartHandshake, BookOpen, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Sacraments() {
  const sacraments = [
    {
      title: "Bautismo",
      description: "Iniciación a la vida divina y admisión al pueblo de Dios. Bautismos comunitarios el 2º y 4º sábado de cada mes.",
      icon: Droplets,
      action: "Requisitos y Fechas",
      link: "#",
      delay: "0ms"
    },
    {
      title: "Primera Comunión",
      description: "Catequesis familiar para niños en edad escolar. Encuentro íntimo con Jesús Sacramentado en el Pan de Vida.",
      icon: BookHeart,
      action: "Inscripción Catequesis",
      link: "#",
      delay: "100ms"
    },
    {
      title: "Confirmación",
      description: "Plenitud de los dones del Espíritu Santo para jóvenes y adultos dispuestos a dar testimonio valiente de su fe.",
      icon: Flame,
      action: "Grupo de Jóvenes",
      link: "#",
      delay: "200ms"
    },
    {
      title: "Sagrado Matrimonio",
      description: "Consagración del amor conyugal ante Dios y la Iglesia, bajo el amparo de la Sagrada Familia de Nazaret.",
      icon: Heart,
      action: "Curso Prematrimonial",
      link: "#",
      delay: "300ms"
    },
    {
      title: "Unción de los Enfermos",
      description: "Consuelo espiritual y fortaleza divina para los hermanos que atraviesan enfermedad grave o vejez.",
      icon: HeartHandshake,
      action: "Solicitar Visita Sacerdotal",
      link: "#",
      delay: "400ms"
    },
    {
      title: "Pastoral Vocacional",
      description: "Acompañamiento y discernimiento para quienes sienten el llamado de Cristo a la vida consagrada.",
      icon: BookOpen,
      action: "Conversá con el Párroco",
      link: "#",
      delay: "500ms"
    }
  ];

  return (
    <section className="w-full py-space-3xl bg-surface-container-low border-t border-outline-variant/20 overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-margin-mobile lg:px-margin-desktop">
        
        <div className="text-center max-w-xl mx-auto mb-space-2xl">
          <span className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-widest text-primary font-bold">
            Vida en Gracia
          </span>
          <h2 className="font-[family-name:var(--font-headline)] text-[28px] md:text-[32px] text-on-surface mt-1">
            Los Santos Sacramentos
          </h2>
          <div className="w-16 h-1 bg-primary-container mx-auto my-space-sm rounded-full opacity-70" />
          <p className="font-[family-name:var(--font-body)] text-[15px] text-on-surface-variant leading-relaxed">
            Canales del amor de Cristo para acompañar a cada cristiano en las etapas sagradas de su existencia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md lg:gap-space-lg">
          {sacraments.map((sacrament, index) => (
            <div 
              key={index} 
              className="group bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-outline-variant/20 hover:border-primary-container/50 hover:shadow-md transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 cursor-default"
              style={{ animation: `fadeInUp 0.6s ease-out ${sacrament.delay} both` }}
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500">
                  <sacrament.icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h4 className="font-[family-name:var(--font-headline)] text-[20px] text-on-surface mb-2 font-semibold">
                  {sacrament.title}
                </h4>
                <p className="font-[family-name:var(--font-body)] text-[14px] text-on-surface-variant mb-space-lg leading-relaxed">
                  {sacrament.description}
                </p>
              </div>
              
              <Link 
                href={sacrament.link}
                className="inline-flex items-center gap-1 font-[family-name:var(--font-body)] text-[12px] uppercase tracking-wider text-primary font-bold hover:text-primary-fixed-dim transition-colors duration-300 w-fit cursor-pointer"
              >
                {sacrament.action} 
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

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
