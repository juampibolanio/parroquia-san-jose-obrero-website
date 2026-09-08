"use client";

import { useState } from 'react';
import { Landmark, Copy, Check, MessageCircle } from 'lucide-react';

export default function BankTransfer() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-space-lg md:p-space-2xl shadow-sm border border-outline-variant/20 flex flex-col lg:flex-row items-center justify-between gap-space-xl hover:border-primary-container/50 transition-colors duration-500">
      
      <div className="max-w-md flex flex-col gap-space-xs">
        <div className="inline-flex items-center gap-space-2xs text-primary font-[family-name:var(--font-body)] text-[12px] font-bold uppercase tracking-widest">
          <Landmark className="w-5 h-5" />
          Transferencias
        </div>
        <h3 className="font-[family-name:var(--font-headline)] text-[22px] text-on-surface">
          También podés colaborar mediante transferencias directas.
        </h3>
        <p className="font-[family-name:var(--font-body)] text-[15px] text-on-surface-variant leading-relaxed">
          Toda colaboración es bienvenida y nos acerca a la meta de hacer realidad este proyecto tan importante para nuestra comunidad. Podés realizar tu aporte mediante transferencia bancaria a la cuenta parroquial.
        </p>
        
        {/*<div className="pt-space-sm">
          <a 
            href="https://wa.me/5491155550190" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-space-xs px-space-md py-space-xs rounded bg-[#25D366]/10 text-[#128C7E] font-[family-name:var(--font-body)] text-[12px] font-bold uppercase tracking-wider hover:bg-[#25D366]/20 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            Enviar comprobante por WhatsApp
          </a>
        </div>*/}
      </div>

      <div className="w-full lg:w-auto flex-1 max-w-lg bg-surface-container-low border border-outline-variant/20 rounded-xl p-space-lg flex flex-col gap-space-sm">
        <div className="flex items-center justify-between pb-space-2xs border-b border-outline-variant/20">
          <div>
            <span className="font-[family-name:var(--font-body)] text-[10px] font-bold text-outline uppercase tracking-wider block mb-0.5">Titular de Cuenta</span>
            <span className="font-[family-name:var(--font-body)] text-[14px] text-on-surface font-bold">Pquia. San José Obrero</span>
          </div>
        </div>

        <div className="flex items-center justify-between py-space-2xs bg-surface-container-lowest p-space-sm rounded-lg border border-outline-variant/10 hover:border-primary-container/30 transition-colors">
          <div>
            <span className="font-[family-name:var(--font-body)] text-[10px] font-bold text-outline uppercase tracking-wider block mb-0.5">Alias</span>
            <span className="font-[family-name:var(--font-headline)] text-[18px] text-primary font-bold">SAN.JOSE.OBRERO.FE</span>
          </div>
          <button 
            onClick={() => handleCopy('SAN.JOSE.OBRERO.FE', 'alias')}
            className="group px-space-sm py-space-2xs rounded bg-surface-container text-on-surface hover:bg-primary-container hover:text-on-primary transition-all duration-300 flex items-center gap-1 active:scale-95"
          >
            {copiedField === 'alias' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />}
            <span className="font-[family-name:var(--font-body)] text-[10px] font-bold uppercase tracking-wider">
              {copiedField === 'alias' ? 'Copiado' : 'Copiar'}
            </span>
          </button>
        </div>

        <div className="flex items-center justify-between py-space-2xs bg-surface-container-lowest p-space-sm rounded-lg border border-outline-variant/10 hover:border-primary-container/30 transition-colors">
          <div>
            <span className="font-[family-name:var(--font-body)] text-[10px] font-bold text-outline uppercase tracking-wider block mb-0.5">CBU</span>
            <span className="font-[family-name:var(--font-body)] text-[14px] text-on-surface font-mono font-medium">0140999801200004581294</span>
          </div>
          <button 
            onClick={() => handleCopy('0140999801200004581294', 'cbu')}
            className="group px-space-sm py-space-2xs rounded bg-surface-container text-on-surface hover:bg-primary-container hover:text-on-primary transition-all duration-300 flex items-center gap-1 active:scale-95"
          >
            {copiedField === 'cbu' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />}
            <span className="font-[family-name:var(--font-body)] text-[10px] font-bold uppercase tracking-wider">
              {copiedField === 'cbu' ? 'Copiado' : 'Copiar'}
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-space-sm pt-space-2xs text-on-surface-variant">
          <div>
            <span className="font-[family-name:var(--font-body)] text-[10px] font-bold uppercase text-outline block mb-0.5">Banco</span>
            <span className="font-[family-name:var(--font-body)] text-[12px] font-medium">Banco de la Nación Argentina</span>
          </div>
          <div>
            <span className="font-[family-name:var(--font-body)] text-[10px] font-bold uppercase text-outline block mb-0.5">CUIT</span>
            <span className="font-[family-name:var(--font-body)] text-[12px] font-medium">30-65489012-7</span>
          </div>
        </div>
      </div>

    </div>
  );
}
