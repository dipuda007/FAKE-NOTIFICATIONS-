import React from 'react';
import type { Template, Background, AspectRatio } from '../types';
import { NotificationPreview } from './NotificationPreview';
import { ASPECT_RATIOS } from '../constants';
import { FullscreenIcon, DownloadIcon } from './icons/Icons';
import { Slider } from './common/Slider';

interface PreviewPanelProps {
  previewRef: React.RefObject<HTMLDivElement>;
  template: Template;
  logo: string | null;
  appName: string;
  message: string;
  background: Background;
  aspectRatio: AspectRatio;
  setAspectRatio: (ar: AspectRatio) => void;
  size: number;
  setSize: (size: number) => void;
  quality: number;
  setQuality: (quality: number) => void;
  handleDownload: () => void;
}

export const PreviewPanel: React.FC<PreviewPanelProps> = ({
  previewRef, template, logo, appName, message, background, aspectRatio,
  setAspectRatio, size, setSize, quality, setQuality, handleDownload
}) => {
  return (
    <div className="flex-1 flex flex-col bg-slate-900 p-6 lg:p-10">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-slate-200">Preview</h2>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 bg-slate-800 rounded-lg p-1">
            {ASPECT_RATIOS.map(ar => (
              <button key={ar.id} onClick={() => setAspectRatio(ar)} className={`px-3 py-1 text-xs font-semibold rounded-md ${aspectRatio.id === ar.id ? 'bg-slate-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}>
                {ar.ratio} {ar.name}
              </button>
            ))}
          </div>
          <button className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400">
            <FullscreenIcon />
          </button>
        </div>
      </header>
      
      <div className="flex-1 flex items-center justify-center">
        <div
          ref={previewRef}
          className={`w-full max-w-5xl rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300 ${aspectRatio.className}`}
          style={{ ...background.style }}
        >
          <div style={{ transform: `scale(${size / 100})` }}>
            <NotificationPreview
              template={template}
              logo={logo}
              appName={appName}
              message={message}
              background={background}
            />
          </div>
        </div>
      </div>
      
      <footer className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Slider 
                label="Size"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                min={50}
                max={200}
                unit="%"
            />
            <Slider 
                label="Quality"
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                min={1}
                max={5}
                unit="x"
            />
        </div>
        <button 
          onClick={handleDownload}
          className="w-full bg-yellow-400 text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center space-x-3 text-lg hover:bg-yellow-300 transition-colors"
        >
            <DownloadIcon />
            <span>Download Custom Notification</span>
        </button>
      </footer>
    </div>
  );
};