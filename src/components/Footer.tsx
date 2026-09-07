import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<string | null>(null);

  return (
    <>
      <footer className="w-full bg-surface-container-low shadow-[0_-1px_8px_rgba(0,0,0,0.02)] mt-space-3xl border-t border-surface-container">
        <div className="max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet xl:px-margin-desktop py-space-2xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-wrap items-center gap-space-xs text-center md:text-left">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center shadow-[0_2px_0px_0px_#910b00]">
              <span className="material-symbols-outlined text-on-primary text-[14px]">view_in_ar</span>
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">
              Brick<span className="text-primary">Forge</span>
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant ml-space-xs">
              © 2024 BrickForge Modular Labs. Crafted for builders of all ages.
            </span>
          </div>

          <nav className="flex items-center gap-space-lg">
            <button
              onClick={() => setModalContent('specs')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              Brick Specifications
            </button>
            <button
              onClick={() => setModalContent('terms')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button
              onClick={() => setModalContent('privacy')}
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              Privacy
            </button>
          </nav>
        </div>
      </footer>

      {/* Neutral Informational Modals for Footer Links */}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 bg-on-background/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalContent(null)}
        >
          <div
            className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-surface-container">
              <h3 className="font-headline-sm text-[18px] text-on-surface">
                {modalContent === 'specs' && 'Brick Specifications'}
                {modalContent === 'terms' && 'Terms of Service'}
                {modalContent === 'privacy' && 'Privacy Policy'}
              </h3>
              <button
                onClick={() => setModalContent(null)}
                className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="py-4 text-on-surface-variant font-body-md text-sm space-y-3 leading-relaxed">
              {modalContent === 'specs' && (
                <>
                  <p>
                    All BrickForge models adhere to official LDraw piece geometry and standard ABS mold tolerances.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Pitch: 8.0 mm horizontal stud center-to-center</li>
                    <li>Plate height: 3.2 mm (1/3 of standard brick height)</li>
                    <li>Full brick height: 9.6 mm</li>
                    <li>Clutch interlock: Verified for structural tabletop stability</li>
                  </ul>
                </>
              )}
              {modalContent === 'terms' && (
                <p>
                  BrickForge produces digital assembly blueprints, instructions, and parts manifests. Output files are compatible with standard LDraw CAD software.
                </p>
              )}
              {modalContent === 'privacy' && (
                <p>
                  Uploaded reference photos are processed solely for the purpose of blueprint generation. Files are not shared or redistributed.
                </p>
              )}
            </div>

            <div className="pt-3 border-t border-surface-container flex justify-end">
              <button
                onClick={() => setModalContent(null)}
                className="px-4 py-2 rounded-xl bg-primary text-on-primary font-headline-sm text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
