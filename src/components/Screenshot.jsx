import React, { useEffect, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const aspectMap = {
  video: 'aspect-video',
  wide: 'aspect-[16/10]',
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  mobile: 'aspect-[9/16]',
  tall: 'aspect-[3/4]',
  ultrawide: 'aspect-[21/9]',
};

/**
 * Screenshot com lightbox ao clicar. Usa object-contain para mostrar o print inteiro
 * sem cortar. Legenda aparece abaixo da imagem.
 *
 * aspect: "video" | "wide" | "square" | "portrait" | "mobile" | "tall" | "ultrawide"
 * span: 1 | 2 (ocupa 2 colunas em md+)
 */
const Screenshot = ({ src, label, alt, aspect = 'video', span = 1 }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const aspectClass = aspectMap[aspect] || aspectMap.video;
  const spanClass = span === 2 ? 'md:col-span-2' : '';

  return (
    <figure className={`space-y-2 ${spanClass}`}>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={label ? `Abrir print: ${label}` : 'Abrir print em tamanho maior'}
        className={`relative ${aspectClass} w-full overflow-hidden rounded-sm border border-cyan-500/20 bg-[#0a0a0a] group cursor-zoom-in transition-colors hover:border-cyan-500/50`}
      >
        <img
          src={src}
          alt={alt || label || 'Screenshot do projeto'}
          className="h-full w-full object-contain"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#020202]/0 group-hover:bg-[#020202]/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest bg-[#0a0a0a]/80 border border-cyan-500/30 px-3 py-2 rounded-sm">
            <ZoomIn className="h-4 w-4" />
            Ampliar
          </div>
        </div>
      </button>

      {label && (
        <figcaption className="text-xs text-cyan-500/70 font-mono uppercase tracking-wider text-center px-2">
          {label}
        </figcaption>
      )}

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar"
            className="absolute top-4 right-4 h-10 w-10 rounded-full border border-cyan-500/30 bg-[#0a0a0a]/80 flex items-center justify-center text-cyan-400 hover:border-cyan-500 hover:text-cyan-300 transition-colors z-10"
          >
            <X className="h-5 w-5" />
          </button>

          <img
            src={src}
            alt={alt || label || 'Screenshot do projeto ampliado'}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[95vw] object-contain cursor-default border border-cyan-500/20 rounded-sm"
          />

          {label && (
            <figcaption className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-[90vw] text-sm text-cyan-400 font-mono uppercase tracking-wider bg-[#0a0a0a]/90 border border-cyan-500/30 px-4 py-2 rounded-sm text-center">
              {label}
            </figcaption>
          )}
        </div>
      )}
    </figure>
  );
};

export default Screenshot;
