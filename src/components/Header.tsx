import React, { useState } from 'react';
import { AppScreen } from '../types';

interface HeaderProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
  onOpenUpload: () => void;
  onSectionClick?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenUpload,
  onSectionClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (currentScreen !== 'landing') {
      onNavigate('landing');
      setTimeout(() => {
        onSectionClick?.(sectionId);
      }, 100);
    } else {
      onSectionClick?.(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1360px] mx-auto px-margin-mobile md:px-margin-tablet xl:px-margin-desktop flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-space-xs group text-left cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_3px_0px_0px_#910b00] group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-on-primary text-[18px]">view_in_ar</span>
          </div>
          <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-extrabold">
            Brick<span className="text-primary">Forge</span>
          </span>
        </button>

        {/* Desktop Nav Pill Bar */}
        <nav className="hidden lg:flex items-center gap-space-sm bg-surface-container-low p-space-2xs rounded-full shadow-[0_2px_0px_0px_#eae7eb]">
          <button
            onClick={() => handleNavClick('how-it-works')}
            className="px-space-md py-space-xs rounded-full font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface transition-all cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick('examples')}
            className="px-space-md py-space-xs rounded-full font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface transition-all cursor-pointer"
          >
            Examples
          </button>
          <button
            onClick={() => handleNavClick('what-you-get')}
            className="px-space-md py-space-xs rounded-full font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface transition-all cursor-pointer"
          >
            What You Get
          </button>
          <button
            onClick={() => handleNavClick('buildability')}
            className="px-space-md py-space-xs rounded-full font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface hover:bg-surface transition-all cursor-pointer"
          >
            Buildability
          </button>
        </nav>

        {/* Header Action Elements */}
        <div className="flex items-center gap-space-md">
          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface shadow-[0_2px_0px_0px_#eae7eb]"
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          <button
            onClick={onOpenUpload}
            className="inline-flex items-center justify-center px-space-lg h-[48px] rounded-xl font-label-numeric text-label-numeric text-on-primary bg-primary shadow-[0_4px_0px_0px_#910b00] hover:bg-primary-container active:translate-y-[3px] active:shadow-[0_1px_0px_0px_#910b00] transition-all cursor-pointer"
          >
            Upload Photo
          </button>

          <div
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_0px_0px_#910b00]"
            title="Builder Profile"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-surface-container px-5 py-4 flex flex-col gap-2 shadow-lg">
          <button
            onClick={() => handleNavClick('how-it-works')}
            className="text-left px-3 py-2 rounded-lg font-headline-sm text-[15px] text-on-surface hover:bg-surface-container"
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick('examples')}
            className="text-left px-3 py-2 rounded-lg font-headline-sm text-[15px] text-on-surface hover:bg-surface-container"
          >
            Examples
          </button>
          <button
            onClick={() => handleNavClick('what-you-get')}
            className="text-left px-3 py-2 rounded-lg font-headline-sm text-[15px] text-on-surface hover:bg-surface-container"
          >
            What You Get
          </button>
          <button
            onClick={() => handleNavClick('buildability')}
            className="text-left px-3 py-2 rounded-lg font-headline-sm text-[15px] text-on-surface hover:bg-surface-container"
          >
            Buildability
          </button>
        </div>
      )}
    </header>
  );
};
