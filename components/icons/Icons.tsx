import React from 'react';

type IconProps = {
    className?: string;
}

export const XIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`w-full h-full text-white ${className}`}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className }) => (
    <img src="https://th.bing.com/th/id/OIP.PAtSluKcOR1Qp1gLPpSaNAHaHa?w=176&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Instagram Logo" className={`w-full h-full object-contain ${className}`} />
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
    <img src="data:image/webp;base64,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" alt="WhatsApp Logo" className={`w-full h-full object-contain rounded-md ${className}`} />
);

export const ChatGptIcon: React.FC<IconProps> = ({ className }) => (
    <img src="https://th.bing.com/th?q=Chatgpt+Logo+Mobile+Screen&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="ChatGPT Logo" className={`w-full h-full object-contain rounded-md ${className}`} />
);

export const YouTubeIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${className}`}>
        <path d="M27.4 3.06C27.1 1.86 26.1 0.9 24.9 0.6C22.7 0 14 0 14 0C14 0 5.3 0 3.1 0.6C1.9 0.9 0.9 1.86 0.6 3.06C0 5.24 0 9.8 0 9.8C0 9.8 0 14.36 0.6 16.54C0.9 17.74 1.9 18.7 3.1 19C5.3 19.6 14 19.6 14 19.6C14 19.6 22.7 19.6 24.9 19C26.1 18.7 27.1 17.74 27.4 16.54C28 14.36 28 9.8 28 9.8C28 9.8 28 5.24 27.4 3.06Z" fill="#FF0000"/>
        <path d="M11.2 14L18.4 9.8L11.2 5.6V14Z" fill="white"/>
    </svg>
);

export const RedditIcon: React.FC<IconProps> = ({ className }) => (
    <img src="https://th.bing.com/th/id/OIP.7VDCfV7VpfXbNvLpzadJFQHaHa?w=159&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Reddit Logo" className={`w-full h-full object-contain rounded-md ${className}`} />
);

export const SnapchatIcon: React.FC<IconProps> = ({ className }) => (
    <img src="https://th.bing.com/th/id/OIP.E-3uCznNzbFbhj3bneZOygHaHa?w=180&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Snapchat Logo" className={`w-full h-full object-contain ${className}`} />
);

export const FacebookIcon: React.FC<IconProps> = ({ className }) => (
    <img src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-square1-512.png" alt="Facebook Logo" className={`w-full h-full object-contain ${className}`} />
);

export const UploadIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
);

export const RemoveIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-slate-500 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const FullscreenIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1v4m0 0h-4m4 0l-5-5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5 5" />
    </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);