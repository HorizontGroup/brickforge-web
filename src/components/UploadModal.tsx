import React, { useState, useRef } from 'react';
import { ModelBuildData } from '../types';
import { DEFAULT_CAMERA_MODEL, EXAMPLE_BUILDS } from '../data/models';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPhotoSelected: (photoUrl: string, modelData?: Partial<ModelBuildData>) => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({
  isOpen,
  onClose,
  onPhotoSelected,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>(DEFAULT_CAMERA_MODEL.photoUrl);
  const [customModelName, setCustomModelName] = useState('Vintage Instant Camera');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreviewUrl(result);
        const derivedName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
        setCustomModelName(derivedName || 'Custom Brick Model');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleConfirm = () => {
    onPhotoSelected(previewUrl, {
      name: customModelName,
      category: customModelName,
      photoUrl: previewUrl,
    });
    onClose();
  };

  const handleSelectPreset = (example: typeof EXAMPLE_BUILDS[0]) => {
    setPreviewUrl(example.photoUrl);
    setCustomModelName(example.name);
    onPhotoSelected(example.photoUrl, {
      name: example.name,
      category: example.name,
      photoUrl: example.photoUrl,
      renderUrl: example.renderUrl,
      pieceCount: example.pieceCount,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-on-background/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-surface-container-lowest rounded-[28px] max-w-2xl w-full p-space-lg md:p-space-xl shadow-[0_12px_32px_rgba(27,27,30,0.15),0_6px_0_0_#eae7eb] relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-space-md border-b border-surface-container mb-space-md">
          <div className="flex items-center gap-space-xs">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-[0_2px_0_0_#910b00]">
              <span className="material-symbols-outlined text-on-primary text-[18px]">add_a_photo</span>
            </div>
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Upload Your Photo</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Upload any keepsake, pet, toy, or place to translate into bricks
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Dropzone Area */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative rounded-2xl border-2 border-dashed p-6 flex flex-col items-center justify-center cursor-pointer transition-all ${
            dragActive
              ? 'border-primary bg-primary-fixed/20'
              : 'border-outline-variant bg-surface-container-low/60 hover:bg-surface-container-low'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) handleFile(e.target.files[0]);
            }}
          />

          {previewUrl ? (
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-36 h-36 rounded-xl overflow-hidden shadow-[0_4px_0_0_#eae7eb]">
                <img
                  src={previewUrl}
                  alt="Upload preview"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2 left-2 bg-surface/90 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                  READY
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface font-semibold text-center">
                Click or drag another image to replace
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary mb-1">
                <span className="material-symbols-outlined text-[32px]">cloud_upload</span>
              </div>
              <p className="font-headline-sm text-body-xl text-on-surface font-bold">
                Drop your photo here, or browse
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                Supports JPG, PNG, WEBP. Clear subject and balanced lighting recommended.
              </p>
            </div>
          )}
        </div>

        {/* Quick Example Presets */}
        <div className="mt-space-md">
          <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">
            Or Choose an Approved Example:
          </p>
          <div className="grid grid-cols-3 gap-2">
            {EXAMPLE_BUILDS.map((ex) => (
              <button
                key={ex.id}
                type="button"
                onClick={() => handleSelectPreset(ex)}
                className="flex items-center gap-2 p-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-left transition-all border border-surface-container shadow-[0_2px_0_0_#eae7eb] active:translate-y-0.5"
              >
                <img
                  src={ex.photoUrl}
                  alt={ex.name}
                  className="w-10 h-10 rounded-lg object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0">
                  <p className="font-body-sm text-[12px] font-bold text-on-surface truncate">{ex.name}</p>
                  <p className="font-label-caps text-[10px] text-on-surface-variant">{ex.pieceCount} pcs</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Action Bottom */}
        <div className="mt-space-lg pt-space-sm border-t border-surface-container flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-space-md py-space-xs rounded-xl font-label-numeric text-label-numeric text-on-surface-variant hover:bg-surface-container"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="inline-flex items-center gap-2 px-space-xl h-[50px] rounded-xl font-headline-sm text-body-md font-bold text-on-primary bg-primary shadow-[0_4px_0_0_#910b00] hover:bg-primary-container active:translate-y-[2px] active:shadow-[0_1px_0_0_#910b00] transition-all"
          >
            <span>Proceed to Preview</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
