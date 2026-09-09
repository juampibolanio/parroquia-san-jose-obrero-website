"use client";

import { useState } from 'react';
import { Heart, CreditCard, Users, CheckCircle2 } from 'lucide-react';

export default function DonationForm() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10000);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <div className="bg-surface-container-low rounded-2xl p-space-lg md:p-space-2xl shadow-lg max-w-3xl mx-auto border border-outline-variant/20 hover:shadow-xl transition-shadow duration-500">
      <div className="text-center mb-space-lg">
        <span className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-widest text-outline font-bold">
          Paso 1 de 2
        </span>
        <h3 className="font-[family-name:var(--font-headline)] text-[22px] text-on-surface mt-1">
          Elegí cómo sumarte
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm md:gap-space-md mb-space-xl">
        <button
          onClick={() => setIsMonthly(true)}
          className={`relative group flex flex-col items-center text-center p-space-md md:p-space-lg rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
            isMonthly 
              ? 'border-primary bg-primary/10 text-primary shadow-md' 
              : 'border-outline-variant/30 bg-surface-container-lowest text-on-surface-variant hover:border-primary/50 hover:bg-surface'
          }`}
        >
          {isMonthly && (
            <CheckCircle2 className="absolute top-3 right-3 w-5 h-5 text-primary animate-[zoomIn_0.3s_ease-out]" />
          )}
          <Users className={`w-8 h-8 md:w-10 md:h-10 mb-space-xs transition-transform duration-300 ${isMonthly ? 'scale-110' : 'group-hover:scale-110'}`} />
          <span className="font-[family-name:var(--font-headline)] text-[18px] md:text-[20px] font-bold">Suscripción mensual</span>
          <span className="font-[family-name:var(--font-body)] text-[12px] md:text-[13px] mt-1 opacity-90">Aporte mensual para sostener la obra</span>
        </button>

        <button
          onClick={() => setIsMonthly(false)}
          className={`relative group flex flex-col items-center text-center p-space-md md:p-space-lg rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
            !isMonthly 
              ? 'border-primary bg-primary/10 text-primary shadow-md' 
              : 'border-outline-variant/30 bg-surface-container-lowest text-on-surface-variant hover:border-primary/50 hover:bg-surface'
          }`}
        >
          {!isMonthly && (
            <CheckCircle2 className="absolute top-3 right-3 w-5 h-5 text-primary animate-[zoomIn_0.3s_ease-out]" />
          )}
          <Heart className={`w-8 h-8 md:w-10 md:h-10 mb-space-xs transition-transform duration-300 ${!isMonthly ? 'scale-110' : 'group-hover:scale-110'}`} />
          <span className="font-[family-name:var(--font-headline)] text-[18px] md:text-[20px] font-bold">Pago por única vez</span>
          <span className="font-[family-name:var(--font-body)] text-[12px] md:text-[13px] mt-1 opacity-90">Aporte único a la obra</span>
        </button>
      </div>

      <div key={isMonthly ? 'monthly' : 'once'} className="animate-[slideUp_0.4s_ease-out_forwards]">
        <div className="mb-space-lg pb-space-lg border-b border-outline-variant/30">
          <label className="block font-[family-name:var(--font-body)] text-[14px] font-bold uppercase tracking-wider text-on-surface-variant mb-space-xs">
            Seleccioná el importe de tu colaboración {isMonthly ? '(mensual)' : '(único)'} *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm mb-space-sm">
            {[5000, 10000, 20000, 50000].map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountClick(amount)}
                className={`py-space-md rounded-xl font-[family-name:var(--font-body)] text-[16px] font-bold transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer ${
                  selectedAmount === amount
                    ? 'bg-primary-container text-on-primary shadow-md border-transparent'
                    : 'bg-surface-container-lowest text-on-surface border border-outline-variant/30 hover:border-primary-container hover:bg-surface-container'
                }`}
              >
                ${amount.toLocaleString('es-AR')}
              </button>
            ))}
          </div>
          
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-space-md flex items-center pointer-events-none text-outline font-bold group-focus-within:text-primary transition-colors">
              $
            </div>
            <input
              type="number"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Otro importe personalizado (ARS)"
              className="w-full pl-9 pr-space-md py-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-on-surface font-[family-name:var(--font-body)] text-[15px] focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-all duration-300 cursor-text"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md mb-space-lg">
          <div className="group">
            <label className="block font-[family-name:var(--font-body)] text-[10px] uppercase font-bold tracking-wider text-on-surface-variant mb-1 group-focus-within:text-primary transition-colors">Nombre y Apellido *</label>
            <input type="text" className="w-full px-space-md py-space-xs rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-on-surface font-[family-name:var(--font-body)] focus:outline-none focus:ring-2 focus:ring-primary-container transition-all cursor-text" placeholder="Ej: María Belén" />
          </div>
          <div className="group">
            <label className="block font-[family-name:var(--font-body)] text-[10px] uppercase font-bold tracking-wider text-on-surface-variant mb-1 group-focus-within:text-primary transition-colors">Correo Electrónico *</label>
            <input type="email" className="w-full px-space-md py-space-xs rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-on-surface font-[family-name:var(--font-body)] focus:outline-none focus:ring-2 focus:ring-primary-container transition-all cursor-text" placeholder="correo@ejemplo.com" />
          </div>
          <div className="group">
            <label className="block font-[family-name:var(--font-body)] text-[10px] uppercase font-bold tracking-wider text-on-surface-variant mb-1 group-focus-within:text-primary transition-colors">Número de Teléfono (Opcional)</label>
            <input type="tel" className="w-full px-space-md py-space-xs rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-on-surface font-[family-name:var(--font-body)] focus:outline-none focus:ring-2 focus:ring-primary-container transition-all cursor-text" placeholder="+54 9 11 ..." />
          </div>
        </div>

        <button className="group w-full py-space-md rounded-xl bg-primary-container text-on-primary font-[family-name:var(--font-body)] text-[14px] font-bold uppercase tracking-widest shadow-md hover:bg-primary hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-space-xs hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer">
          <CreditCard className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          {isMonthly ? 'Suscribirme & colaborar' : 'Colaborar'}
        </button>
      </div>

      <div className="mt-space-lg pt-space-md border-t border-outline-variant/20 text-center animate-[fadeIn_1s_ease-in]">
        <p className="font-[family-name:var(--font-headline)] text-[16px] md:text-[18px] italic  transition-colors duration-300 cursor-default">
          Sabemos que acompañar también es estar presente con nuestras oraciones, por eso, además de la colaboración económica, contamos con la oración de todos los que forman parte de nuestra comunidad. ¡Gracias por sumarte a esta obra!
        </p>
      </div>

      <style>{`
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
