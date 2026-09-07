import React, { useState } from 'react';
import { ModelBuildData } from '../types';

interface PreviewViewProps {
  model: ModelBuildData;
  onBack: () => void;
  onReplacePhoto: () => void;
  onProceedToGenerate: () => void;
}

export const PreviewView: React.FC<PreviewViewProps> = ({
  model,
  onBack,
  onReplacePhoto,
  onProceedToGenerate,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="pt-24 pb-20 px-margin-mobile md:px-margin-tablet xl:px-margin-desktop max-w-[1360px] mx-auto min-h-screen">
      {/* Navigation & Breadcrumb Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold font-label-caps tracking-wider border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            STEP 1 OF 2
          </div>
          <h1 className="font-headline-sm text-lg text-on-surface">Photo & Order Preview</h1>
          <div className="hidden sm:flex items-center gap-2 text-on-surface-variant text-sm">
            <span className="text-surface-dim">•</span>
            <span>Instant Blueprint Synthesis</span>
          </div>
        </div>

        {/* Step Progress Indicators */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-on-surface text-surface px-4 py-1.5 rounded-full text-xs font-bold">
            <span>❶</span>
            <span>Review</span>
          </div>
          <div className="w-8 border-t-2 border-dashed border-surface-container-high"></div>
          <div className="flex items-center gap-1.5 bg-surface-container-low text-on-surface-variant border border-surface-container px-4 py-1.5 rounded-full text-xs font-bold">
            <span>❷</span>
            <span>Generate & Deliver</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Photo Verification Card (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-[28px] p-5 sm:p-7 border border-surface-container shadow-[0_6px_0_0_#eae7eb] flex flex-col">
            
            {/* Photo Frame */}
            <div
              onClick={() => setIsZoomed(!isZoomed)}
              className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-surface-container-low cursor-zoom-in group"
            >
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-surface rounded-tl-sm z-10 pointer-events-none drop-shadow-md"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-surface rounded-tr-sm z-10 pointer-events-none drop-shadow-md"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-surface rounded-bl-sm z-10 pointer-events-none drop-shadow-md"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-surface rounded-br-sm z-10 pointer-events-none drop-shadow-md"></div>

              <img
                src={model.photoUrl}
                alt="Uploaded reference"
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  isZoomed ? 'scale-125' : 'group-hover:scale-105'
                }`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-label-caps tracking-wider text-on-surface flex items-center gap-1.5 border border-surface-container z-20 shadow-sm">
                <span className="material-symbols-outlined text-[14px]">photo_camera</span>
                <span>SOURCE PHOTO</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-on-surface flex items-center gap-1 shadow-sm z-20">
                <span className="material-symbols-outlined text-[16px]">
                  {isZoomed ? 'zoom_out' : 'zoom_in'}
                </span>
                <span>{isZoomed ? 'Zoom Out' : 'Click to Zoom'}</span>
              </div>
            </div>

            {/* Metadata Bar */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                onClick={onReplacePhoto}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-xs font-bold text-on-surface-variant transition-all border border-surface-container cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">sync</span>
                <span>Replace Photo</span>
              </button>
              <div className="text-xs text-on-surface-variant font-medium">
                📐 1024 × 1024 px • Clean Depth Profile
              </div>
            </div>
          </div>

          {/* Photo Quality Card */}
          <div className="bg-surface-container-lowest rounded-2xl p-5 border border-surface-container shadow-[0_4px_0_0_#eae7eb] flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#00A86B]/10 text-[#00A86B] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">sentiment_satisfied</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-sm text-on-surface mb-1">Photo Quality: Excellent</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Clear subject, balanced lighting, and distinct edges detected. Perfectly primed for single-plate modular decomposition.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Order & Blueprint Package Summary (5 cols on desktop) */}
        <div className="lg:col-span-5 bg-surface-container-lowest rounded-[28px] p-6 sm:p-8 border border-surface-container shadow-[0_6px_0_0_#eae7eb] flex flex-col sticky top-28">
          <div className="flex items-start justify-between mb-4">
            <span className="font-label-caps text-[10px] text-primary uppercase tracking-wider">
              AUTOMATED SYNTHESIS
            </span>
            <div className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#00A86B]/10 text-[#00A86B] uppercase tracking-wide">
              VERIFIED SHAPE
            </div>
          </div>

          <h3 className="font-headline-xl text-2xl text-on-surface mb-3">
            Ready to Build
          </h3>
          <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
            We will process your image through our volumetric conversion pipeline to map colors and structures to standard physical brick components.
          </p>

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-surface-container-low p-4 rounded-xl border border-surface-container">
              <p className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-1">TARGET COMPLEXITY</p>
              <p className="font-display-hero text-xl font-extrabold text-on-surface">120–150</p>
              <p className="text-[11px] text-on-surface-variant mt-0.5">Intermediate Builder</p>
            </div>
            <div className="bg-surface-container-low p-4 rounded-xl border border-surface-container">
              <p className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-1">PHYSICAL SCALE</p>
              <p className="font-display-hero text-xl font-extrabold text-on-surface">~12×10×14 cm</p>
              <p className="text-[11px] text-on-surface-variant mt-0.5">Desk-friendly display</p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider mb-4">
              KIT CONTENTS INCLUDED
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px]">view_in_ar</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-on-surface">🧊 Interactive 3D Model file (.ldr/.io)</p>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">Standard CAD format for digital viewing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px]">menu_book</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-on-surface">📕 Step-by-Step PDF Manual</p>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">Printable sub-assembly instructions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px]">receipt_long</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-on-surface">📋 Digital BOM &amp; BrickLink Easy-Order XML</p>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">Easily order parts from global sellers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing block */}
          <div className="flex items-center justify-between py-4 border-t border-surface-container mb-6">
            <div>
              <p className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-1">ONE-TIME CREATION</p>
              <p className="font-bold text-sm text-on-surface">Standard Custom Kit Plan</p>
            </div>
            <div className="text-right">
              <p className="font-display-hero text-2xl text-primary font-extrabold">$19.00 USD</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onProceedToGenerate}
            className="w-full h-[58px] rounded-xl font-headline-sm text-base text-on-primary bg-primary shadow-[0_6px_0_0_#910b00] hover:bg-primary-container active:translate-y-[3px] active:shadow-[0_2px_0_0_#910b00] transition-all flex items-center justify-center gap-2 cursor-pointer mb-4"
          >
            <span className="text-on-primary/70 tracking-widest text-xs mr-1">●●</span>
            <span>Build My Model</span>
          </button>
          
          <p className="text-[11px] text-center text-on-surface-variant mb-6 px-2 leading-relaxed">
            Constructed with standard physical brick geometry. Instant digital delivery upon generation.
          </p>

          <div className="bg-surface-container-low rounded-xl p-3 flex items-center justify-between border border-surface-container">
            <div className="flex items-center gap-2 text-[11px] text-on-surface font-medium">
              <span>🔧 Clutch-power &amp; gravity collision verified</span>
            </div>
            <div className="px-2 py-0.5 rounded text-[9px] font-bold bg-[#00A86B]/10 text-[#00A86B] uppercase tracking-wider">
              100% BUILDABLE
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
