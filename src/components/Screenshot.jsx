import React, { useEffect, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { getAccent } from '@/lib/accents';

const Screenshot = ({ src, label, alt, span = 1, accent = 'cyan' }) => {
  const { copy } = useLanguage();
  const a = getAccent(accent);
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

  const spanClass = span === 2 ? 'md:col-span-2' : '';

  return (
    <figure className={`space-y-2 ${spanClass}`}>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={label ? `${copy.screenshot.open}: ${label}` : copy.screenshot.openLarge}
        className={`relative w-full overflow-hidden rounded-sm border ${a.b20} group cursor-zoom-in transition-colors ${a.bh50} block`}
      >
        <img
          src={src}
          alt={alt || label || copy.screenshot.fallback}
          width="1315"
          height="654"
          className="w-full h-auto block"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[#020202]/0 group-hover:bg-[#020202]/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
          <div className={`flex items-center gap-2 ${a.text} font-mono text-xs uppercase tracking-widest bg-[#0a0a0a]/80 border ${a.b30} px-3 py-2 rounded-sm`}>
            <ZoomIn className="h-4 w-4" />
            {copy.screenshot.zoom}
          </div>
        </div>
      </button>

      {label && (
        <figcaption className={`text-xs ${a.textDim} font-mono uppercase tracking-wider text-center px-2`}>
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
            aria-label={copy.screenshot.close}
            className={`absolute top-4 right-4 h-10 w-10 rounded-full border ${a.b30} bg-[#0a0a0a]/80 flex items-center justify-center ${a.text} ${a.bh50} ${a.hoverTextBright} transition-colors z-10`}
          >
            <X className="h-5 w-5" />
          </button>

          <img
            src={src}
            alt={alt || label || copy.screenshot.expandedFallback}
            onClick={(e) => e.stopPropagation()}
            className={`max-h-[90vh] max-w-[95vw] object-contain cursor-default border ${a.b20} rounded-sm`}
          />

          {label && (
            <figcaption className={`absolute bottom-6 left-1/2 -translate-x-1/2 max-w-[90vw] text-sm ${a.text} font-mono uppercase tracking-wider bg-[#0a0a0a]/90 border ${a.b30} px-4 py-2 rounded-sm text-center`}>
              {label}
            </figcaption>
          )}
        </div>
      )}
    </figure>
  );
};

export default Screenshot;
