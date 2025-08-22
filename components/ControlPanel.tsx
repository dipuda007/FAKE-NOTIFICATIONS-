import React, { ChangeEvent } from 'react';
import type { Template, Background, AspectRatio } from '../types';
import { TEMPLATES, BACKGROUNDS, ASPECT_RATIOS } from '../constants';
import { UploadIcon, RemoveIcon, InfoIcon } from './icons/Icons';

interface ControlPanelProps {
  template: Template;
  setTemplate: (template: Template) => void;
  logo: string | null;
  handleLogoUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  removeLogo: () => void;
  appName: string;
  setAppName: (name: string) => void;
  message: string;
  setMessage: (message: string) => void;
  background: Background;
  setBackground: (background: Background) => void;
  aspectRatio: AspectRatio;
  setAspectRatio: (aspectRatio: AspectRatio) => void;
}

const SectionHeader: React.FC<{ title: string; icon: React.ReactNode, subtext?: string, badge?: string }> = ({ title, icon, subtext, badge }) => (
    <div className="flex items-center space-x-2 mb-4">
        {icon}
        <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{title}</h2>
        {subtext && <p className="text-xs text-slate-400">{subtext}</p>}
        {badge && <span className="text-xs bg-green-400 text-green-900 font-bold px-2 py-0.5 rounded-full">{badge}</span>}
    </div>
);

export const ControlPanel: React.FC<ControlPanelProps> = ({
  template, setTemplate, logo, handleLogoUpload, removeLogo,
  appName, setAppName, message, setMessage, background, setBackground,
  aspectRatio, setAspectRatio
}) => {
  return (
    <div className="w-full lg:w-[450px] bg-[#161A23] p-6 space-y-8 overflow-y-auto shrink-0">
      <header className="flex items-center space-x-2">
          <button className="w-full py-2 text-sm font-semibold rounded-lg bg-slate-700 text-white shadow-md">
              <span className="mr-2"></span>Fake Notifications
          </button>
      </header>

      <section>
        <SectionHeader title="Template" icon={<span className="text-lg">🎨</span>} />
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {TEMPLATES.map((t) => (
            <button
              key={t.id}
              onClick={() => !t.isLocked && setTemplate(t)}
              className={`p-3 rounded-lg flex flex-col items-center justify-center space-y-2 transition-all duration-200 ${
                template.id === t.id ? 'bg-slate-700 ring-2 ring-blue-500' : 'bg-slate-800 hover:bg-slate-700/80'
              } ${t.isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <div className="w-8 h-8 flex items-center justify-center">{t.icon}</div>
              <span className="text-xs font-medium text-slate-300">{t.name}</span>
              <span className="text-[10px] text-slate-500">{t.subtext}</span>
            </button>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Custom Logo" subtext="(optional)" icon={<span className="text-lg">🖼️</span>} />
        <div className="flex items-center space-x-4">
            {logo ? (
                <img src={logo} alt="Custom Logo" className="w-16 h-16 rounded-lg object-cover bg-slate-700"/>
            ) : (
                <div className="w-16 h-16 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                    <span className="text-3xl text-slate-500">?</span>
                </div>
            )}
            <div className="space-y-2">
                 <label htmlFor="logo-upload" className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg bg-slate-700 hover:bg-slate-600 cursor-pointer">
                    <UploadIcon />
                    <span>{logo ? 'Change' : 'Upload'}</span>
                </label>
                <input id="logo-upload" type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
                {logo && (
                    <button onClick={removeLogo} className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-lg bg-slate-800 hover:bg-slate-700">
                        <RemoveIcon />
                        <span>Remove</span>
                    </button>
                )}
            </div>
        </div>
      </section>

      <section>
          <SectionHeader title="Fake App Name" icon={<span className="text-lg">📱</span>} />
          <div className="relative">
              <input 
                type="text"
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                maxLength={20}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500">{appName.length}/20 characters used</span>
          </div>
      </section>

      <section>
          <SectionHeader title="The Lie" icon={<span className="text-lg">💬</span>} />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={100}
            rows={2}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            placeholder="Your notification text here..."
          />
      </section>

       <section>
        <SectionHeader title="Background" icon={<span className="text-lg">🌄</span>} badge="Now free!" />
        <div className="grid grid-cols-4 gap-3">
          {BACKGROUNDS.map((bg) => (
            <button
              key={bg.id}
              onClick={() => setBackground(bg)}
              className={`h-14 rounded-lg flex flex-col items-center justify-center text-center p-1 transition-all duration-200 group relative ${
                background.id === bg.id ? 'ring-2 ring-blue-500' : 'hover:ring-2 hover:ring-blue-500/50'
              }`}
            >
              <div className="absolute inset-0 w-full h-full rounded-lg" style={bg.id === 'transparent' ? {background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGUlEQVQYV2NkYGAwZkAFQejwYMDQAwMAANOAD3dNPRAwAAAAAElFTkSuQmCC") repeat'} : bg.style}></div>
              <span className="text-[10px] font-medium text-white mix-blend-difference bg-black/20 px-1 rounded">{bg.name}</span>
            </button>
          ))}
        </div>
      </section>
      
      <section>
        <SectionHeader title="Export Format" icon={<span className="text-lg">📐</span>} />
        <div className="grid grid-cols-3 gap-3">
          {ASPECT_RATIOS.map((ar) => (
            <button
              key={ar.id}
              onClick={() => setAspectRatio(ar)}
              className={`p-3 rounded-lg flex flex-col items-center justify-center space-y-1 transition-all duration-200 ${
                aspectRatio.id === ar.id ? 'bg-slate-700 ring-2 ring-blue-500' : 'bg-slate-800 hover:bg-slate-700/80'
              }`}
            >
              <div className={`w-8 h-8 bg-slate-600 rounded-sm ${ar.className.includes('video') ? 'h-5' : ar.className.includes('9/16') ? 'w-5' : ''}`}></div>
              <span className="text-xs font-semibold text-slate-300">{ar.name}</span>
              <span className="text-[10px] text-slate-500">{ar.ratio}</span>
              <span className="text-[10px] text-slate-500">{ar.subtext}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};