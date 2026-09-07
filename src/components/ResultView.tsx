import React, { useState } from 'react';
import { ModelBuildData } from '../types';
import {
  downloadLDrawFile,
  downloadBOMCsv,
  downloadAssemblyPdf,
} from '../utils/fileGenerators';

interface ResultViewProps {
  model: ModelBuildData;
  onNewBuild: () => void;
  onBackToHome: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  model,
  onNewBuild,
  onBackToHome,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showOriginalPip, setShowOriginalPip] = useState(true);

  const currentStep = model.steps[currentStepIndex] || model.steps[0];
  const totalSteps = model.steps.length;

  const handleNextStep = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleRotate = (direction: 'left' | 'right') => {
    setRotationAngle((prev) => (direction === 'left' ? prev - 45 : prev + 45));
  };

  const handleZoom = (direction: 'in' | 'out') => {
    setZoomLevel((prev) => {
      if (direction === 'in') return Math.min(prev + 0.2, 1.8);
      return Math.max(prev - 0.2, 0.8);
    });
  };

  const handleResetCad = () => {
    setRotationAngle(0);
    setZoomLevel(1);
  };

  return (
    <div className="pt-24 pb-20 px-margin-mobile md:px-margin-tablet xl:px-margin-desktop max-w-[1360px] mx-auto min-h-screen">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px] text-on-surface">celebration</span>
          </div>
          <h1 className="font-headline-lg text-xl sm:text-2xl text-on-surface font-bold">
            Your Custom Model is Ready!
          </h1>
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container rounded-full border border-surface-container-high">
            <span className="text-[10px] text-primary">●</span>
            <span className="font-label-caps text-[10px] text-on-surface font-bold tracking-wider">
              SET #{model.id} • MOC CAD REVISED
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-container text-on-surface font-bold text-sm border border-surface-container transition-colors">
            <span className="material-symbols-outlined text-[16px]">ios_share</span>
            Share Build
          </button>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface hover:bg-surface-container text-on-surface font-bold text-sm border border-surface-container transition-colors">
            <span className="material-symbols-outlined text-[16px]">bookmark_border</span>
            Save
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* CAD Viewport Card */}
          <div className="bg-surface-container-lowest rounded-[28px] p-2 relative flex flex-col border border-surface-container shadow-[0_6px_0_0_#eae7eb]">
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <div className="bg-primary text-on-primary px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <span>🧊</span> INTERACTIVE 3D CAD
              </div>
              <div className="bg-surface-container-low text-on-surface px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border border-surface-container">
                Scale 1:1.2
              </div>
            </div>

            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <button onClick={() => handleRotate('left')} className="w-8 h-8 bg-surface text-on-surface rounded-full flex items-center justify-center shadow hover:bg-surface-container border border-surface-container transition-colors" title="Rotate">
                <span className="material-symbols-outlined text-[16px]">rotate_left</span>
              </button>
              <button className="w-8 h-8 bg-surface text-on-surface rounded-full flex items-center justify-center shadow hover:bg-surface-container border border-surface-container transition-colors" title="Fullscreen">
                <span className="material-symbols-outlined text-[16px]">aspect_ratio</span>
              </button>
              <button onClick={() => handleZoom('in')} className="w-8 h-8 bg-surface text-on-surface rounded-full flex items-center justify-center shadow hover:bg-surface-container border border-surface-container transition-colors" title="Zoom In">
                <span className="material-symbols-outlined text-[16px]">zoom_in</span>
              </button>
              <button onClick={() => handleZoom('out')} className="w-8 h-8 bg-surface text-on-surface rounded-full flex items-center justify-center shadow hover:bg-surface-container border border-surface-container transition-colors" title="Zoom Out">
                <span className="material-symbols-outlined text-[16px]">zoom_out</span>
              </button>
              <button onClick={handleResetCad} className="w-8 h-8 bg-surface text-on-surface rounded-full flex items-center justify-center shadow hover:bg-surface-container border border-surface-container transition-colors" title="Reset View">
                <span className="material-symbols-outlined text-[16px]">history</span>
              </button>
            </div>

            <div className="relative w-full aspect-4/3 rounded-[20px] overflow-hidden bg-surface-container-low flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#916f69 1.5px, transparent 1.5px), radial-gradient(#916f69 1.5px, #f6f2f7 1.5px)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 10px 10px',
                }}
              />
              
              <div
                className="transition-transform duration-300 ease-out select-none flex items-center justify-center w-full h-full p-6"
                style={{ transform: `scale(${zoomLevel}) rotate(${rotationAngle}deg)` }}
              >
                <img
                  src={model.renderUrl}
                  alt={model.name}
                  className="max-w-[90%] max-h-[90%] object-contain drop-shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* PIP */}
              <div className="absolute bottom-4 left-4 z-10 w-28 h-28 rounded-xl overflow-hidden border-2 border-surface-container bg-surface shadow-lg">
                <img src={model.photoUrl} alt="Input" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-2">
                  <span className="text-[8px] text-white font-bold uppercase tracking-wider mb-0.5">📷 INPUT PHOTO</span>
                  <span className="text-[10px] text-white font-bold leading-tight">{model.name}</span>
                </div>
              </div>

              {/* Hint */}
              <div className="absolute bottom-4 right-4 z-10 text-[11px] font-bold text-on-surface-variant flex items-center gap-1.5 bg-surface/80 backdrop-blur-sm px-2.5 py-1 rounded-md">
                <span className="material-symbols-outlined text-[14px]">mouse</span>
                Click & drag model to inspect
              </div>
            </div>
          </div>

          {/* Assembly Sequence Card */}
          <div className="bg-surface-container-lowest rounded-[24px] p-6 border border-surface-container shadow-[0_4px_0_0_#eae7eb]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-surface-container flex items-center justify-center font-bold text-on-surface">
                  {(currentStepIndex + 1).toString().padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-headline-sm text-base font-bold text-on-surface">
                    Assembly Sequence • {currentStep.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant">
                    Step {currentStepIndex + 1} of {totalSteps} • {currentStep.piecesUsed} individual bricks used in this phase
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={handlePrevStep} disabled={currentStepIndex === 0} className="w-10 h-10 rounded-full border border-surface-container flex items-center justify-center hover:bg-surface-container disabled:opacity-50 transition-colors">
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button onClick={handleNextStep} disabled={currentStepIndex === totalSteps - 1} className="w-10 h-10 rounded-full border border-surface-container flex items-center justify-center hover:bg-surface-container disabled:opacity-50 transition-colors">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Visual Progress Bar */}
            <div className="mt-6 relative">
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary transition-all duration-300" style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }} />
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[10px] font-bold text-on-surface-variant">Step 01: {model.steps[0]?.title || 'Start'}</span>
                <span className="text-[10px] font-bold text-primary">{Math.round(((currentStepIndex + 1) / totalSteps) * 100)}% Progress</span>
                <span className="text-[10px] font-bold text-on-surface-variant">Step {totalSteps}: {model.steps[totalSteps - 1]?.title || 'Finish'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Model Summary Card */}
          <div className="bg-surface-container-lowest rounded-[28px] p-6 border border-surface-container shadow-[0_6px_0_0_#eae7eb]">
            <p className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold tracking-wider mb-2">MODEL SUMMARY</p>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-headline-xl text-2xl text-on-surface font-extrabold">{model.name}</h2>
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold uppercase tracking-wider">
                Builder Tier: {model.tier}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="border border-surface-container rounded-xl p-3 text-center">
                <p className="font-display-hero text-xl text-primary font-bold">{model.pieceCount}</p>
                <p className="font-label-caps text-[9px] text-on-surface-variant uppercase mt-1">REAL PARTS</p>
              </div>
              <div className="border border-surface-container rounded-xl p-3 text-center">
                <p className="font-display-hero text-xl text-on-surface font-bold">{model.uniqueTypes}</p>
                <p className="font-label-caps text-[9px] text-on-surface-variant uppercase mt-1">UNIQUE TYPES</p>
              </div>
              <div className="border border-surface-container rounded-xl p-3 text-center">
                <p className="font-display-hero text-xl text-on-surface font-bold">{totalSteps}</p>
                <p className="font-label-caps text-[9px] text-on-surface-variant uppercase mt-1">BUILD STEPS</p>
              </div>
            </div>

            <div>
              <p className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold tracking-wider mb-3">PRIMARY COLOR COMPOSITION</p>
              <div className="flex flex-wrap gap-2">
                {model.colors.map(c => (
                  <div key={c.name} className="flex items-center gap-1.5 px-2.5 py-1.5 border border-surface-container rounded-full text-xs font-bold text-on-surface">
                    <span className="text-[10px]" style={{ color: c.hex }}>●</span>
                    {c.name} ({c.count})
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Buildability Verified Card */}
          <div className="bg-surface-container-lowest rounded-[28px] p-6 border border-surface-container shadow-[0_6px_0_0_#eae7eb]">
            <h3 className="font-headline-sm text-sm font-bold text-on-surface flex items-center gap-2 mb-4">
              <span>⚡</span> Buildability Verified
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-on-surface">
                <span className="material-symbols-outlined text-[18px] text-green-600">check_circle</span>
                <span>Interlocking Clutch Stability: <strong className="font-bold">100% Solid</strong></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-on-surface">
                <span className="material-symbols-outlined text-[18px] text-green-600">check_circle</span>
                <span>Clash & Penetration: <strong className="font-bold">Collision-Free</strong></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-on-surface">
                <span className="material-symbols-outlined text-[18px] text-green-600">check_circle</span>
                <span>Standard Brick Sourcing: <strong className="font-bold">Official LDraw IDs</strong></span>
              </div>
            </div>
          </div>

          {/* Digital Deliverables Card */}
          <div className="bg-surface-container-lowest rounded-[28px] p-6 border border-surface-container shadow-[0_6px_0_0_#eae7eb]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-sm text-base font-bold text-on-surface">Digital Deliverables</h3>
              <span className="font-label-caps text-[10px] text-on-surface-variant uppercase font-bold tracking-wider bg-surface-container px-2 py-1 rounded">INSTANT ACCESS</span>
            </div>

            <div className="space-y-3">
              <button onClick={() => downloadAssemblyPdf(model)} className="w-full bg-primary text-on-primary rounded-xl p-4 flex items-center justify-between hover:bg-primary-container transition-colors shadow-sm text-left">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[24px]">menu_book</span>
                  <div>
                    <div className="font-bold text-sm">Download Assembly PDF</div>
                    <div className="text-xs opacity-90">Step-by-step exploded guide (24 pgs)</div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[20px]">download</span>
              </button>

              <button onClick={() => downloadLDrawFile(model)} className="w-full bg-surface-container-low text-on-surface rounded-xl p-4 flex items-center justify-between border border-surface-container hover:bg-surface-container transition-colors text-left">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[24px]">view_in_ar</span>
                  <div>
                    <div className="font-bold text-sm">LDraw CAD File (.ldr)</div>
                    <div className="text-xs text-on-surface-variant">Compatible with Studio 2.0 & Blender</div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[20px]">download</span>
              </button>

              <button onClick={() => downloadBOMCsv(model)} className="w-full bg-surface-container-low text-on-surface rounded-xl p-4 flex items-center justify-between border border-surface-container hover:bg-surface-container transition-colors text-left">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[24px]">list_alt</span>
                  <div>
                    <div className="font-bold text-sm">Parts List XML / CSV</div>
                    <div className="text-xs text-on-surface-variant">One-click import for BrickLink & Rebrickable</div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[20px]">download</span>
              </button>
            </div>
          </div>

          {/* Order Physical Brick Kit Card */}
          <div className="bg-secondary-fixed/30 border border-secondary-fixed-dim rounded-[28px] p-6 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-600 shadow-sm">
                <span className="material-symbols-outlined text-[24px]">inventory_2</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-sm font-bold text-orange-950">Order Physical Brick Kit</h3>
                <p className="text-xs text-orange-900/80">Genuine ABS tiles & custom boxed set</p>
              </div>
            </div>
            <div className="bg-white/50 text-orange-950 px-3 py-1.5 rounded-lg text-xs font-bold border border-white/60 uppercase tracking-wider">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
