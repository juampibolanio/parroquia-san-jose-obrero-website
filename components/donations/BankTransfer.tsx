"use client";

import { useState } from 'react';
import { Landmark, Copy, Check } from 'lucide-react';

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
        <div className="inline-flex items-center gap-space-2xs text-primary font-(family-name:--font-body) text-[12px] font-bold uppercase tracking-widest">
          <Landmark className="w-5 h-5" />
          Transferencia Bancaria
        </div>
        <h3 className="font-headline text-[22px] text-on-surface">
          También podés enviar tu aporte por transferencia
        </h3>
        <p className="font-(family-name:--font-body) text-[15px] text-on-surface-variant leading-relaxed">
          Los fondos se depositarán directamente en la cuenta oficial de la parroquia. A continuación, te compartimos los datos necesarios para realizar la transferencia bancaria.
        </p>
      </div>

      <div className="w-full lg:w-auto flex-1 max-w-lg bg-surface-container-low border border-outline-variant/20 rounded-xl p-space-lg flex flex-col gap-space-md">
        <div className="flex items-center justify-between pb-space-2xs border-b border-outline-variant/20">
          <div>
            <span className="font-(family-name:--font-body) text-[10px] font-bold text-outline uppercase tracking-wider block mb-0.5">Titular de Cuenta</span>
            <span className="font-(family-name:--font-body) text-[14px] text-on-surface font-bold wrap-break-word">[Nombre del Titular de la Cuenta]</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-space-sm bg-surface-container-lowest p-space-sm rounded-lg border border-outline-variant/10 hover:border-primary-container/30 transition-colors">
          <div className="min-w-0">
            <span className="font-(family-name:--font-body) text-[10px] font-bold text-outline uppercase tracking-wider block mb-0.5">Alias</span>
            <span className="font-headline text-[16px] md:text-[18px] text-primary font-bold break-all sm:break-normal block">
              [ALIAS.A.CONFIRMAR]
            </span>
          </div>
          <button 
            onClick={() => handleCopy('[ALIAS.A.CONFIRMAR]', 'alias')}
            className="group self-start sm:self-auto shrink-0 px-space-sm py-space-2xs rounded bg-surface-container text-on-surface hover:bg-primary-container hover:text-on-primary transition-all duration-300 flex items-center gap-1 active:scale-95 cursor-pointer"
          >
            {copiedField === 'alias' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />}
            <span className="font-(family-name:--font-body) text-[10px] font-bold uppercase tracking-wider">
              {copiedField === 'alias' ? 'Copiado' : 'Copiar'}
            </span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-space-sm bg-surface-container-lowest p-space-sm rounded-lg border border-outline-variant/10 hover:border-primary-container/30 transition-colors">
          <div className="min-w-0">
            <span className="font-(family-name:--font-body) text-[10px] font-bold text-outline uppercase tracking-wider block mb-0.5">CBU</span>
            <span className="font-(family-name:--font-body) text-[13px] md:text-[14px] text-on-surface font-medium break-all sm:break-normal block">
              [0000000000000000000000]
            </span>
          </div>
          <button 
            onClick={() => handleCopy('[0000000000000000000000]', 'cbu')}
            className="group self-start sm:self-auto shrink-0 px-space-sm py-space-2xs rounded bg-surface-container text-on-surface hover:bg-primary-container hover:text-on-primary transition-all duration-300 flex items-center gap-1 active:scale-95 cursor-pointer"
          >
            {copiedField === 'cbu' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />}
            <span className="font-(family-name:--font-body) text-[10px] font-bold uppercase tracking-wider">
              {copiedField === 'cbu' ? 'Copiado' : 'Copiar'}
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-space-sm pt-space-2xs text-on-surface-variant">
          <div>
            <span className="font-(family-name:--font-body) text-[10px] font-bold uppercase text-outline block mb-0.5">Banco</span>
            <span className="font-(family-name:--font-body) text-[12px] font-medium">Banco a confirmar</span>
          </div>
          <div>
            <span className="font-(family-name:--font-body) text-[10px] font-bold uppercase text-outline block mb-0.5">CUIT</span>
            <span className="font-(family-name:--font-body) text-[12px] font-medium">[CUIT a confirmar]</span>
          </div>
        </div>
      </div>

    </div>
  );
}