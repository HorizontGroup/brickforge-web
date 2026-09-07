/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AppScreen, ModelBuildData } from './types';
import { DEFAULT_CAMERA_MODEL } from './data/models';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingView } from './components/LandingView';
import { UploadModal } from './components/UploadModal';
import { PreviewView } from './components/PreviewView';
import { GeneratingView } from './components/GeneratingView';
import { ResultView } from './components/ResultView';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('landing');
  const [activeModel, setActiveModel] = useState<ModelBuildData>(DEFAULT_CAMERA_MODEL);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const handlePhotoSelected = (
    photoUrl: string,
    modelPatch?: Partial<ModelBuildData>,
  ) => {
    setActiveModel((prev) => ({
      ...prev,
      ...modelPatch,
      photoUrl,
    }));
    setCurrentScreen('preview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectModelFromGallery = (model: ModelBuildData) => {
    setActiveModel(model);
    setCurrentScreen('preview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProceedToGenerate = () => {
    setCurrentScreen('generating');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGenerationComplete = () => {
    setCurrentScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionClick = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {/* Top Fixed Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={(screen) => {
          setCurrentScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenUpload={() => setIsUploadModalOpen(true)}
        onSectionClick={handleSectionClick}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentScreen === 'landing' && (
          <LandingView
            onOpenUpload={() => setIsUploadModalOpen(true)}
            onSelectModel={handleSelectModelFromGallery}
          />
        )}

        {currentScreen === 'preview' && (
          <PreviewView
            model={activeModel}
            onBack={() => {
              setCurrentScreen('landing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onReplacePhoto={() => setIsUploadModalOpen(true)}
            onProceedToGenerate={handleProceedToGenerate}
          />
        )}

        {currentScreen === 'generating' && (
          <GeneratingView
            model={activeModel}
            onComplete={handleGenerationComplete}
          />
        )}

        {currentScreen === 'result' && (
          <ResultView
            model={activeModel}
            onNewBuild={() => {
              setIsUploadModalOpen(true);
            }}
            onBackToHome={() => {
              setCurrentScreen('landing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Photo Upload Modal */}
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onPhotoSelected={handlePhotoSelected}
      />

      {/* Shared BrickForge Footer */}
      <Footer />
    </div>
  );
}
