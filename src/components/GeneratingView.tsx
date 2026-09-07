import React, { useState, useEffect } from 'react';
import { ModelBuildData } from '../types';

interface GeneratingViewProps {
  model: ModelBuildData;
  onComplete: () => void;
}

export const GeneratingView: React.FC<GeneratingViewProps> = ({
  model,
  onComplete,
}) => {
  const [progress, setProgress] = useState(18);
  const [currentStage, setCurrentStage] = useState(0);
  const [activeLayer, setActiveLayer] = useState(4);
  const [studsMapped, setStudsMapped] = useState(380);

  const stages = [
    {
      title: 'Analyzing Photo Geometry',
      desc: 'Detecting contours, optical depth planes, and key feature lines',
      icon: 'document_scanner',
    },
    {
      title: 'Synthesizing Brick Structure',
      desc: 'Mapping interlocking bricks, plates, and slopes into a solid core',
      icon: 'view_in_ar',
    },
    {
      title: 'Checking Clutch & Connections',
      desc: 'Verifying gravity balance, shear loads, and tabletop stability',
      icon: 'rule',
    },
    {
      title: 'Creating Step-by-Step Instructions',
      desc: 'Compiling high-resolution PDF pages, LDraw CAD, and parts manifest',
      icon: 'auto_stories',
    },
  ];

  const craftsmanshipInsights = [
    'Overlapping brick seams prevent structural splitting during physical tabletop assembly.',
    'Every piece is matched against standard commercial ABS elements.',
    'The generated LDraw CAD file (.ldr) is fully compatible with digital design viewers.',
  ];
  const [insightIndex, setInsightIndex] = useState(0);

  useEffect(() => {
    // Progress increment timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        const capped = Math.min(next, 100);

        // Update stages
        if (capped > 75) setCurrentStage(3);
        else if (capped > 50) setCurrentStage(2);
        else if (capped > 25) setCurrentStage(1);
        else setCurrentStage(0);

        setActiveLayer(Math.min(28, Math.floor((capped / 100) * 28)));
        setStudsMapped(Math.floor((capped / 100) * 1480));

        return capped;
      });
    }, 450);

    const insightInterval = setInterval(() => {
      setInsightIndex((i) => (i + 1) % craftsmanshipInsights.length);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearInterval(insightInterval);
    };
  }, [onComplete]);

  return (
    <div className="pt-24 pb-20 px-margin-mobile md:px-margin-tablet xl:px-margin-desktop max-w-[1360px] mx-auto min-h-screen flex flex-col justify-center">
      {/* Top Banner */}
      <div className="max-w-3xl mx-auto w-full text-center mb-8 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low border border-surface-container mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-label-caps text-[11px] font-bold text-on-surface tracking-widest">MODULAR SYNTHESIS STUDIO</span>
        </div>
        <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl text-on-surface mb-4">
          Crafting Your Custom Brick Model
        </h1>
        <p className="font-body-md text-base sm:text-lg text-on-surface-variant max-w-xl mx-auto">
          Translating your photo into a physically buildable brick creation…
        </p>
      </div>

      {/* Main Grid: Sandbox Visualizer (Left) + Pipeline Stages (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto w-full">
        {/* Left: 3D Synthesis Sandbox / Hologram Visualizer */}
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-[28px] p-6 border border-surface-container shadow-[0_6px_0_0_#eae7eb] flex flex-col relative overflow-hidden">
          
          {/* Header Bar */}
          <div className="flex items-start sm:items-center justify-between mb-6 flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-xl">precision_manufacturing</span>
              <div>
                <div className="font-bold text-sm text-on-surface">Assembly Rig: Workbench Alpha</div>
                <div className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">TARGET: 38 STUD HEIGHT MESH</div>
              </div>
            </div>
            <div className="bg-surface-container-low border border-surface-container rounded-full px-3 py-1 flex items-center gap-1.5 shrink-0">
              <span className="material-symbols-outlined text-[14px] text-on-surface-variant">settings</span>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">CLUTCH ANALYSIS</span>
            </div>
          </div>

          {/* TWO side-by-side image frames */}
          <div className="grid grid-cols-2 gap-4 relative mb-8 flex-1">
            {/* Slicing Divider */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center bg-surface-container-lowest px-2 py-3 rounded-full border border-surface-container shadow-sm">
              <span className="material-symbols-outlined text-primary text-lg animate-spin">sync_alt</span>
              <span className="text-[9px] font-bold text-primary mt-1" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>SLICING</span>
            </div>

            {/* Left Frame */}
            <div className="bg-surface-container-low rounded-2xl p-3 border border-surface-container relative flex flex-col">
              <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-2 py-1 rounded-[4px] border border-surface-container shadow-sm z-10">
                <span className="text-[9px] font-bold text-on-surface tracking-wider">INPUT CAPTURE</span>
              </div>
              <div className="flex-1 bg-surface-container rounded-xl overflow-hidden mb-3 relative min-h-[200px]">
                <img
                  src={model.photoUrl}
                  alt="Original"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                {model.name}
              </div>
            </div>

            {/* Right Frame */}
            <div className="bg-surface-container-low rounded-2xl p-3 border border-surface-container relative flex flex-col">
              <div className="absolute top-4 left-4 bg-[#f6bf22] px-2 py-1 rounded-[4px] shadow-sm z-10 text-on-surface">
                <span className="text-[9px] font-extrabold tracking-wider">VOXEL LATTICE STAGE 3</span>
              </div>
              <div className="flex-1 bg-surface-container rounded-xl overflow-hidden mb-3 relative min-h-[200px] flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(#5d403a 1.5px, transparent 1.5px), radial-gradient(#5d403a 1.5px, #f6f2f7 1.5px)',
                    backgroundSize: '24px 24px',
                    backgroundPosition: '0 0, 12px 12px',
                  }}
                />
                <img
                  src={model.renderUrl}
                  alt="Generated"
                  className="w-[85%] h-[85%] object-contain relative z-10"
                  style={{ filter: progress < 50 ? 'grayscale(40%) contrast(110%)' : 'none' }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center text-[10px] font-bold text-primary uppercase tracking-wider">
                PHYSICAL ABS INTERLOCK
              </div>
            </div>
          </div>

          {/* Progress bar at BOTTOM */}
          <div className="bg-surface-container-low border border-surface-container rounded-2xl p-4 mt-auto">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold text-on-surface">Validating Structural Load & Part Availability</span>
              </div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider hidden sm:block">PHYSICAL SOLVABILITY CHECK</span>
            </div>
            <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right: Pipeline Checklist */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-surface-container-lowest rounded-[28px] p-6 border border-surface-container shadow-[0_6px_0_0_#eae7eb] flex-1">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-surface-container">
              <h3 className="font-label-caps text-xs text-on-surface font-bold tracking-widest">
                BUILD ASSEMBLY PIPELINE
              </h3>
              <span className="text-primary font-bold text-sm">
                Step {(currentStage + 1).toString().padStart(2, '0')}/{stages.length.toString().padStart(2, '0')}
              </span>
            </div>

            <div className="space-y-4">
              {stages.map((stg, idx) => {
                const isCompleted = currentStage > idx || progress === 100;
                const isCurrent = currentStage === idx && progress < 100;
                const isPending = currentStage < idx;

                return (
                  <div
                    key={stg.title}
                    className={`flex items-start gap-4 p-3 rounded-xl transition-all ${
                      isCurrent
                        ? 'border border-primary bg-primary-fixed/20'
                        : isCompleted
                        ? 'bg-surface-container-low/60'
                        : 'opacity-40'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        isCompleted
                          ? 'bg-[#00A86B] text-white'
                          : isCurrent
                          ? 'bg-primary text-on-primary'
                          : 'bg-surface-container text-on-surface-variant'
                      }`}
                    >
                      {isCompleted ? (
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      ) : (
                        <span className="material-symbols-outlined text-[16px]">{stg.icon}</span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`text-sm font-bold ${isCurrent ? 'text-primary' : 'text-on-surface'}`}>
                        {stg.title}
                      </p>
                      <p className="text-xs text-on-surface-variant mt-1 leading-snug">
                        {stg.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-4 border border-surface-container flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-lg">🏗</span>
              <span className="text-sm font-bold text-on-surface">Standard Plates Only</span>
            </div>
            <div className="text-[10px] font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded">
              0 GLUED STUDS
            </div>
          </div>

          {/* Manual advance shortcut if user wants instant result */}
          <button
            onClick={onComplete}
            className="w-full py-3 rounded-xl font-headline-sm text-xs text-on-surface-variant hover:text-on-surface bg-surface-container-low hover:bg-surface-container border border-surface-container transition-all cursor-pointer text-center"
          >
            Skip to Result Screen →
          </button>
        </div>
      </div>

      {/* Bottom full-width craftsmanship insight bar */}
      <div className="max-w-5xl mx-auto w-full mt-4 bg-surface-container-lowest rounded-2xl p-4 border border-surface-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="w-8 h-8 rounded-full bg-tertiary/20 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-tertiary text-[18px]">build</span>
          </div>
          <div>
             <div className="font-label-caps text-[10px] font-bold text-on-surface-variant tracking-widest mb-0.5">CRAFTSMANSHIP INSIGHT</div>
             <div className="text-xs font-bold text-on-surface">{craftsmanshipInsights[insightIndex]}</div>
          </div>
        </div>
        <div className="bg-surface-container-low border border-surface-container rounded-full px-3 py-1.5 flex items-center gap-2 shrink-0 self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-[#00A86B]"></span>
          <span className="text-[11px] font-bold text-on-surface tracking-wider uppercase">100% Real Brick Logic</span>
        </div>
      </div>
    </div>
  );
};
