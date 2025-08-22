import React from 'react';
import type { Template, Background } from '../types';
import { XIcon, InstagramIcon, YouTubeIcon, RedditIcon, SnapchatIcon, FacebookIcon, WhatsAppIcon, ChatGptIcon } from './icons/Icons';

interface NotificationPreviewProps {
  template: Template;
  logo: string | null;
  appName: string;
  message: string;
  background: Background;
}

const XNotification: React.FC<Omit<NotificationPreviewProps, 'template'>> = ({ logo, appName, message, background }) => {
    const displayLogo = logo ? <img src={logo} alt="logo" className="w-full h-full object-cover" /> : <XIcon />;
    const borderClass = background.id === 'black' ? 'border-2 border-white' : '';
    return (
        <div className={`w-[360px] bg-black text-white rounded-2xl p-4 shadow-2xl font-sans flex space-x-3 select-none ${borderClass}`}>
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-black">
                {displayLogo}
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <p className="font-bold">{appName}</p>
                    <p className="text-sm text-gray-400">now</p>
                </div>
                <p className="text-gray-300">{message}</p>
            </div>
        </div>
    );
};

const InstagramNotification: React.FC<Omit<NotificationPreviewProps, 'template'>> = ({ logo, appName, message, background }) => {
    const displayLogo = logo ? <img src={logo} alt="logo" className="w-full h-full object-cover" /> : <InstagramIcon />;
    const borderClass = background.id === 'black' ? 'border-2 border-white' : '';
    return (
        <div className={`w-[360px] bg-black bg-opacity-80 backdrop-blur-md text-white rounded-2xl p-4 shadow-2xl font-sans flex space-x-3 select-none border border-white/10 ${borderClass}`}>
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-800">
                {displayLogo}
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-sm">{appName}</p>
                    <p className="text-xs text-gray-400">now</p>
                </div>
                <p className="text-sm text-gray-200">{message}</p>
            </div>
        </div>
    );
};

const LightNotification: React.FC<Omit<NotificationPreviewProps, 'template'> & { defaultIcon: React.ReactNode }> = ({ logo, appName, message, defaultIcon, background }) => {
    const displayLogo = logo ? <img src={logo} alt="logo" className="w-full h-full object-cover" /> : defaultIcon;
    const borderClass = background.id === 'black' ? 'border-2 border-white' : '';
    return (
        <div className={`w-[360px] bg-white/90 backdrop-blur-md text-black rounded-2xl p-3 shadow-2xl font-sans flex space-x-3 select-none border border-black/10 ${borderClass}`}>
            <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                {displayLogo}
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-sm">{appName}</p>
                    <p className="text-xs text-gray-500">now</p>
                </div>
                <p className="text-sm text-gray-800">{message}</p>
            </div>
        </div>
    );
};

const SnapchatNotification: React.FC<Omit<NotificationPreviewProps, 'template'>> = ({ logo, appName, message, background }) => {
    const displayLogo = logo ? <img src={logo} alt="logo" className="w-full h-full object-cover" /> : <SnapchatIcon />;
    const borderClass = background.id === 'black' ? 'border-2 border-white' : '';
    return (
        <div className={`w-[360px] bg-[#1E1E1E] text-white rounded-2xl p-3 shadow-2xl font-sans flex space-x-3 select-none ${borderClass}`}>
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                {displayLogo}
            </div>
            <div className="flex-1 border-l-2 border-red-500 pl-3">
                <p className="font-bold text-sm">{appName}</p>
                <p className="text-sm text-gray-300">{message}</p>
            </div>
             <p className="text-xs text-gray-500 self-start">now</p>
        </div>
    );
};


export const NotificationPreview: React.FC<NotificationPreviewProps> = ({ template, ...props }) => {
  switch (template.id) {
    case 'x':
      return <XNotification {...props} />;
    case 'instagram':
        return <InstagramNotification {...props} />;
    case 'whatsapp':
        return <LightNotification {...props} defaultIcon={<WhatsAppIcon />} />;
    case 'chatgpt':
        return <LightNotification {...props} defaultIcon={<ChatGptIcon />} />;
    case 'youtube':
        return <LightNotification {...props} defaultIcon={<YouTubeIcon />} />;
    case 'reddit':
        return <LightNotification {...props} defaultIcon={<RedditIcon />} />;
    case 'snapchat':
        return <SnapchatNotification {...props} />;
    case 'facebook':
        return <LightNotification {...props} defaultIcon={<FacebookIcon />} />;
    default:
      return <XNotification {...props} />;
  }
};