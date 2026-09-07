import React from 'react';
import { ModelBuildData } from '../types';
import { EXAMPLE_BUILDS, DEFAULT_CAMERA_MODEL } from '../data/models';

interface LandingViewProps {
  onOpenUpload: () => void;
  onSelectModel: (model: ModelBuildData) => void;
}

export const LandingView: React.FC<LandingViewProps> = ({
  onOpenUpload,
  onSelectModel,
}) => {
  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-margin-mobile md:px-margin-tablet xl:px-margin-desktop max-w-[1360px] mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-surface-container shadow-[0_2px_0_0_#eae7eb] mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="font-label-caps text-xs text-on-surface-variant tracking-wider uppercase">
              STANDARD ABS REAL BRICK GENERATION
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-display-hero text-4xl sm:text-5xl md:text-7xl text-on-surface max-w-4xl tracking-tight leading-[1.1] mb-6 uppercase flex flex-col">
            <span>YOUR PHOTO.</span>
            <span className="text-primary">BUILT IN BRICKS.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body-xl text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-8">
            Turn your favorite pet, car, landmark, or cherished keepsake into a real, physically buildable custom brick set in seconds.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenUpload}
              className="inline-flex items-center gap-3 px-8 h-[56px] rounded-xl font-headline-sm text-base text-on-primary bg-primary shadow-[0_4px_0_0_#910b00] hover:bg-primary-container active:translate-y-[2px] active:shadow-[0_1px_0_0_#910b00] transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">add_a_photo</span>
              <span>Upload Your Photo</span>
            </button>

            <button
              onClick={() => scrollToSection('how-it-works')}
              className="inline-flex items-center gap-2 px-7 h-[56px] rounded-xl font-headline-sm text-base text-on-surface bg-surface-container-low hover:bg-surface-container border border-surface-container-high shadow-[0_4px_0_0_#eae7eb] active:translate-y-[2px] active:shadow-[0_1px_0_0_#eae7eb] transition-all cursor-pointer"
            >
              <span>See How It Works</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </button>
          </div>

          {/* Hero Transformation Preview Showcase (Stitch Approved Art Direction) */}
          <div className="w-full max-w-4xl bg-surface-container-lowest rounded-[32px] p-4 sm:p-6 md:p-8 border border-surface-container shadow-[0_12px_36px_rgba(27,27,30,0.06),0_6px_0_0_#eae7eb]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-surface-container">
              <span className="font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">refresh</span>
                Transformation Studio Preview
              </span>
              <div className="flex items-center gap-2">
                <span className="bg-surface-container px-3 py-1 rounded-full text-xs font-bold text-on-surface">132 Pieces</span>
                <span className="bg-surface-container px-3 py-1 rounded-full text-xs font-bold text-on-surface">15 Steps</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative">
              {/* Left: Input Photo */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-square max-w-[340px] rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] group">
                  <img
                    src={DEFAULT_CAMERA_MODEL.photoUrl}
                    alt="Original photo input"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-on-surface shadow-sm uppercase">
                    ORIGINAL PHOTO
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-on-surface/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-[12px] font-medium text-surface text-center">
                    © Old Polaroid Cameras SPM
                  </div>
                </div>
              </div>

              {/* Center Transition Pill on desktop */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container items-center justify-center shadow-[0_4px_0_0_#6f5400]">
                <span className="material-symbols-outlined text-[24px]">sync_alt</span>
              </div>

              {/* Right: Brick MOC Render */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-square max-w-[340px] rounded-2xl overflow-hidden bg-surface-container-low shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center group">
                  <img
                    src={DEFAULT_CAMERA_MODEL.renderUrl}
                    alt="Generated brick model"
                    className="w-[90%] h-[90%] object-contain group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold shadow-[0_2px_0_0_#910b00] uppercase">
                    CUSTOM BRICK MODEL
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-surface/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-[12px] font-bold text-on-surface flex items-center justify-center shadow-sm">
                    PRECISION BRICK MODEL - Custom Brick MoC
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-8 p-4 bg-surface-container-low rounded-xl border border-surface-container flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-on-surface">Ready to see your photo transformed?</h4>
                  <p className="text-xs text-on-surface-variant">Start building from your own images or browse examples.</p>
                </div>
              </div>
              <button
                onClick={onOpenUpload}
                className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-bold text-sm shadow-[0_2px_0_0_#910b00] hover:bg-primary-container active:translate-y-[1px] transition-all whitespace-nowrap"
              >
                Upload Your Photo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REAL BUILDS GALLERY SECTION */}
      <section id="examples" className="py-16 bg-surface-container-low/50 border-y border-surface-container">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet xl:px-margin-desktop overflow-hidden">
          <div className="text-left mb-10">
            <span className="font-label-caps text-xs text-primary uppercase tracking-wider">
              Showcase Gallery
            </span>
            <h2 className="font-headline-xl text-3xl md:text-4xl text-on-surface mt-2 mb-3">
              From Memories to Physical Bricks
            </h2>
            <p className="font-body-md text-base text-on-surface-variant max-w-2xl">
              Got a cherished photo, family pet, and special occasion? Transform it into physical brick physics.
            </p>
          </div>

          <div className="overflow-x-auto flex gap-6 pb-4 snap-x no-scrollbar">
            {EXAMPLE_BUILDS.map((item) => (
              <div
                key={item.id}
                className="min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] shrink-0 snap-start bg-surface-container-lowest rounded-2xl p-4 border border-surface-container shadow-[0_4px_0_0_#eae7eb] hover:shadow-[0_8px_0_0_#eae7eb] hover:-translate-y-1 transition-all flex flex-col cursor-pointer"
                onClick={() => {
                  onSelectModel({
                    ...DEFAULT_CAMERA_MODEL,
                    id: `BF-${Math.floor(1000 + Math.random() * 9000)}`,
                    name: item.name,
                    category: item.name,
                    photoUrl: item.photoUrl,
                    renderUrl: item.renderUrl,
                    pieceCount: item.pieceCount,
                  });
                }}
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-container mb-4">
                  <img
                    src={item.photoUrl}
                    alt={`${item.name} photo`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-headline-sm text-base text-on-surface">{item.name}</h3>
                    <p className="font-body-sm text-xs text-on-surface-variant">{item.pieceCount} pieces</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EVERYTHING YOU NEED TO BUILD IT (WHAT YOU GET) */}
      <section id="what-you-get" className="py-20 max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet xl:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-label-caps text-xs text-primary uppercase tracking-wider">
            PHYSICAL BUILDING DELIVERABLES
          </span>
          <h2 className="font-headline-xl text-3xl md:text-4xl text-on-surface mt-2 mb-3">
            Everything You Need to Build It in Real Life
          </h2>
          <p className="font-body-md text-base text-on-surface-variant">
            Not a voxel art. A symmetric, buildable desktop experience, sent straight to your processor and collection tray.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Interactive 3D Model */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container shadow-[0_4px_0_0_#eae7eb] flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center mb-5 shadow-[0_2px_0_0_#ffb4a7]">
              <span className="material-symbols-outlined text-[28px]">view_in_ar</span>
            </div>
            <h3 className="font-headline-sm text-xl text-on-surface mb-2">Interactive 3D Model</h3>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">
              Inspect your build from any angle with our real-time 3D inspection tools to ensure every connection is solid.
            </p>
            <a href="#demo" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
              Start Interactive CDR Paths <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>

          {/* Card 2: PDF Instructions */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container shadow-[0_4px_0_0_#eae7eb] flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center mb-5 shadow-[0_2px_0_0_#f6bf22]">
              <span className="material-symbols-outlined text-[28px]">picture_as_pdf</span>
            </div>
            <h3 className="font-headline-sm text-xl text-on-surface mb-2">PDF Instructions</h3>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">
              Clear, numbered assembly pages styled like official instruction booklets, featuring sub-assembly breakouts and part callouts.
            </p>
            <a href="#demo" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
              Generate BrickFit Codes <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>

          {/* Card 3: Parts List */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 border border-surface-container shadow-[0_4px_0_0_#eae7eb] flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center mb-5 shadow-[0_2px_0_0_#a2c9ff]">
              <span className="material-symbols-outlined text-[28px]">receipt_long</span>
            </div>
            <h3 className="font-headline-sm text-xl text-on-surface mb-2">Parts List</h3>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">
              Standard XML and CSV formats listing official element IDs, color names, and exact quantities for element sourcing or digging through bins.
            </p>
            <a href="#demo" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
              Generate Part Lists <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS (CHILD'S PLAY TO START) */}
      <section id="how-it-works" className="py-20 bg-surface-container-low/40 border-t border-surface-container">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet xl:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-label-caps text-xs text-primary uppercase tracking-wider">
              SIMPLE WORKFLOW
            </span>
            <h2 className="font-headline-xl text-3xl md:text-4xl text-on-surface mt-2 mb-3">
              Child's Play to Start
            </h2>
            <p className="font-body-md text-base text-on-surface-variant">
              From photo snap to holy grailing in just three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 border border-surface-container shadow-[0_4px_0_0_#eae7eb] relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-display-hero text-3xl font-extrabold shadow-[0_4px_0_0_#910b00] mb-6">
                1
              </div>
              <h3 className="font-headline-sm text-xl text-on-surface mb-3">Upload</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Choose any photo of a pet, car, landmark, or keepsake. Or select directly from your camera.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 border border-surface-container shadow-[0_4px_0_0_#eae7eb] relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-display-hero text-3xl font-extrabold shadow-[0_4px_0_0_#910b00] mb-6">
                2
              </div>
              <h3 className="font-headline-sm text-xl text-on-surface mb-3">We Build It</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Our engine generates a structurally sound model with real standard ABS parts. Fully modular. No glued studs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-surface-container-lowest rounded-2xl p-8 border border-surface-container shadow-[0_4px_0_0_#eae7eb] relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center font-display-hero text-3xl font-extrabold shadow-[0_4px_0_0_#910b00] mb-6">
                3
              </div>
              <h3 className="font-headline-sm text-xl text-on-surface mb-3">You Build It</h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Get your step-by-step PDF, LDraw CAD file, parts list, and the satisfaction of building it with real pieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BUILDABILITY PRINCIPLES */}
      <section id="buildability" className="py-20 max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet xl:px-margin-desktop">
        <div className="bg-surface-container-lowest rounded-[32px] p-8 md:p-12 border border-surface-container shadow-[0_8px_24px_rgba(27,27,30,0.05),0_6px_0_0_#eae7eb]">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="font-label-caps text-xs text-primary uppercase tracking-wider">
                Engineering Standards
              </span>
              <h2 className="font-headline-xl text-3xl md:text-4xl text-on-surface mt-2 mb-4">
                Made to Actually Build
              </h2>
              <p className="font-body-md text-base text-on-surface-variant leading-relaxed mb-8">
                We design models specifically for physical construction using standard injection-molded ABS bricks.
              </p>
            </div>
            
            <div className="w-full md:w-auto flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-surface-container">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined">link</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm">Connected Assembly</h4>
                  <p className="text-xs text-on-surface-variant">Pieces interlock safely</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-surface-container">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm">Collision Checked</h4>
                  <p className="text-xs text-on-surface-variant">No impossible geometry</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-surface-container">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined">inventory_2</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm">BrickLink Compatible</h4>
                  <p className="text-xs text-on-surface-variant">Sourced with real parts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM BANNER */}
      <section className="pb-16 max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet xl:px-margin-desktop">
        <div className="bg-primary rounded-[32px] p-8 md:p-14 text-center text-on-primary shadow-[0_8px_0_0_#910b00] relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="font-display-hero text-3xl md:text-5xl font-extrabold mb-4">
              Ready to Build Your Favorite Memory?
            </h2>
            <p className="font-body-xl text-base md:text-lg text-on-primary/90 mb-8 leading-relaxed">
              Upload any photo today and watch it transform into a real, custom brick set your whole family, gift, and build with for people you love.
            </p>
            <button
              onClick={onOpenUpload}
              className="inline-flex items-center gap-3 px-8 h-[56px] rounded-xl font-headline-sm text-base bg-secondary-container text-on-secondary-container shadow-[0_4px_0_0_#6f5400] hover:brightness-105 active:translate-y-[2px] transition-all cursor-pointer font-bold"
            >
              <span className="material-symbols-outlined text-[20px]">add_a_photo</span>
              <span>Upload Your Photo Now</span>
            </button>
            <p className="mt-6 text-xs text-on-primary/70 font-medium">
              No trial needed for production. Standard standard brick parts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
