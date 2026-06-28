import React from 'react';

// @ts-expect-error - Vite handles image imports
import dkjLogo from '../assets/images/dkj_logo_new.jpg';
// @ts-expect-error - Vite handles image imports
import umnLogo from '../assets/images/umn_logo_1782460982541.jpg';

export const DuniaKimiaJayaLogo: React.FC<{ className?: string; showText?: boolean; compact?: boolean }> = ({ 
  className = "w-12 h-12", 
  showText = true,
  compact = false
}) => {
  if (compact) {
    return (
      <div className="flex items-center gap-2 select-none">
        <div className="relative p-0.5 rounded bg-white shadow-sm flex items-center justify-center overflow-hidden w-7 h-7 md:w-8 md:h-8">
          <img 
            src={dkjLogo} 
            alt="PT Dunia Kimia Jaya Logo" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain"
          />
        </div>
        {showText && (
          <div className="flex flex-col text-left">
            <span className="font-display font-bold tracking-wider text-white text-[10px] md:text-xs leading-none">
              PT DUNIA KIMIA JAYA
            </span>
            <span className="font-mono text-[7px] tracking-widest text-brand-cyan/80 leading-none mt-0.5 hidden xs:block">
              DKJ Corporate
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 select-none">
      <div className="relative p-1.5 rounded-2xl bg-white shadow-md border border-slate-100/10 overflow-hidden flex items-center justify-center">
        <img 
          src={dkjLogo} 
          alt="PT Dunia Kimia Jaya Logo" 
          referrerPolicy="no-referrer"
          className={`${className} object-contain`}
        />
      </div>
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-display font-black tracking-wider text-white text-base md:text-xl leading-none">
            PT DUNIA KIMIA JAYA
          </span>
          <span className="font-mono text-[9px] tracking-widest text-brand-cyan/80 leading-tight uppercase mt-1">
            Specialty Chemical Manufacturer
          </span>
        </div>
      )}
    </div>
  );
};

export const UmnLogo: React.FC<{ className?: string; dark?: boolean; compact?: boolean }> = ({ 
  className = "w-16 h-16",
  dark = false,
  compact = false
}) => {
  if (compact) {
    return (
      <div className="flex items-center gap-2 select-none bg-slate-900/40 border border-slate-800/80 px-2.5 py-1 rounded-xl">
        <div className="relative p-0.5 rounded bg-white shadow-sm flex items-center justify-center overflow-hidden w-6 h-6">
          <img 
            src={umnLogo} 
            alt="UMN Logo" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-display font-black text-xs text-white tracking-wider leading-none">
            UMN
          </span>
          <span className="font-sans text-[6px] tracking-[0.1em] text-slate-400 font-semibold uppercase leading-none mt-0.5">
            UNIVERSITAS
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center text-center select-none">
      <div className={`relative p-2 rounded-2xl bg-white shadow-md border border-slate-100/10 overflow-hidden flex items-center justify-center`}>
        <img 
          src={umnLogo} 
          alt="UMN Logo" 
          referrerPolicy="no-referrer"
          className={`${className} object-contain`}
        />
      </div>
    </div>
  );
};
