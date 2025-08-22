import React, { useState, useCallback, useRef, ChangeEvent } from 'react';
import { ControlPanel } from './components/ControlPanel';
import { PreviewPanel } from './components/PreviewPanel';
import { TEMPLATES, BACKGROUNDS, ASPECT_RATIOS } from './constants';
import type { Template, Background, AspectRatio } from './types';

// Tell TypeScript about the global `htmlToImage` object from the CDN script
declare global {
  interface Window {
    htmlToImage: {
      toPng: (element: HTMLElement, options?: any) => Promise<string>;
    };
  }
}

const App: React.FC = () => {
  const [template, setTemplate] = useState<Template>(TEMPLATES[0]);
  const [logo, setLogo] = useState<string | null>(null);
  const [appName, setAppName] = useState<string>(TEMPLATES[0].defaultAppName);
  const [message, setMessage] = useState<string>("Your notification text here...");
  const [background, setBackground] = useState<Background>(BACKGROUNDS[12]);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>(ASPECT_RATIOS[1]);
  const [size, setSize] = useState<number>(100);
  const [quality, setQuality] = useState<number>(2);

  const previewRef = useRef<HTMLDivElement>(null);

  const handleTemplateChange = useCallback((newTemplate: Template) => {
    setTemplate(newTemplate);
    setAppName(newTemplate.defaultAppName);
    setLogo(null); // Reset custom logo when changing template
  }, []);

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setLogo(event.target.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const removeLogo = () => {
    setLogo(null);
  };

  const handleDownload = useCallback(() => {
    if (previewRef.current === null) {
      return;
    }
    
    if (typeof window.htmlToImage === 'undefined') {
        console.error('html-to-image library is not loaded.');
        alert('Could not download image. The image generation library is missing.');
        return;
    }

    window.htmlToImage.toPng(previewRef.current, { 
      cacheBust: true,
      pixelRatio: quality,
      // Ensure fonts and images are loaded
      fetchRequestInit: {
        mode: 'cors',
        cache: 'no-cache'
      }
    })
    .then((dataUrl: string) => {
      const link = document.createElement('a');
      link.download = `fake-notification-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    })
    .catch((err: Error) => {
      console.error('oops, something went wrong!', err);
      alert(`An error occurred while generating the image: ${err.message}`);
    });
  }, [previewRef, quality]);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col">
      <header className="py-4 text-center border-b border-slate-800 shadow-md">
        <h1 className="text-lg font-semibold tracking-widest text-slate-400 uppercase">MADE BY DIPANKAR</h1>
      </header>
      <main className="flex-1 flex flex-col lg:flex-row">
        <ControlPanel
          template={template}
          setTemplate={handleTemplateChange}
          logo={logo}
          handleLogoUpload={handleLogoUpload}
          removeLogo={removeLogo}
          appName={appName}
          setAppName={setAppName}
          message={message}
          setMessage={setMessage}
          background={background}
          setBackground={setBackground}
          aspectRatio={aspectRatio}
          setAspectRatio={setAspectRatio}
        />
        <PreviewPanel
          previewRef={previewRef}
          template={template}
          logo={logo}
          appName={appName}
          message={message}
          background={background}
          aspectRatio={aspectRatio}
          setAspectRatio={setAspectRatio}
          size={size}
          setSize={setSize}
          quality={quality}
          setQuality={setQuality}
          handleDownload={handleDownload}
        />
      </main>
    </div>
  );
};

export default App;