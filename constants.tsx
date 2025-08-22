
import React from 'react';
import type { Template, Background, AspectRatio } from './types';
import { XIcon, InstagramIcon, WhatsAppIcon, ChatGptIcon, YouTubeIcon, RedditIcon, SnapchatIcon, FacebookIcon } from './components/icons/Icons';

export const TEMPLATES: Template[] = [
  { id: 'x', name: 'X (Twitter)', subtext: 'X notification', icon: <XIcon />, isLocked: false, defaultAppName: 'X' },
  { id: 'instagram', name: 'Instagram', subtext: 'Instagram notification', icon: <InstagramIcon />, isLocked: false, defaultAppName: 'Instagram' },
  { id: 'whatsapp', name: 'WhatsApp', subtext: 'WhatsApp notification', icon: <WhatsAppIcon />, isLocked: false, defaultAppName: 'WhatsApp' },
  { id: 'chatgpt', name: 'ChatGPT', subtext: 'ChatGPT notification', icon: <ChatGptIcon />, isLocked: false, defaultAppName: 'ChatGPT' },
  { id: 'youtube', name: 'YouTube', subtext: 'YouTube notification', icon: <YouTubeIcon />, isLocked: false, defaultAppName: 'YouTube' },
  { id: 'reddit', name: 'Reddit', subtext: 'Reddit notification', icon: <RedditIcon />, isLocked: false, defaultAppName: 'Reddit' },
  { id: 'snapchat', name: 'Snapchat', subtext: 'Snapchat notification', icon: <SnapchatIcon />, isLocked: false, defaultAppName: 'Snapchat' },
  { id: 'facebook', name: 'Facebook', subtext: 'Facebook notification', icon: <FacebookIcon />, isLocked: false, defaultAppName: 'Facebook' },
];

export const BACKGROUNDS: Background[] = [
  { id: 'transparent', name: 'No Background', style: { background: 'transparent' } },
  { id: 'default', name: 'Default', style: { background: '#ffffff' } },
  { id: 'black', name: 'Black', style: { background: '#000000' } },
  { id: 'sunset', name: 'Sunset', style: { background: 'linear-gradient(to right, #ff7e5f, #feb47b)' } },
  { id: 'ocean', name: 'Ocean', style: { background: 'linear-gradient(to right, #2b5876, #4e4376)' } },
  { id: 'forest', name: 'Forest', style: { background: 'linear-gradient(to right, #134e5e, #71b280)' } },
  { id: 'purple_haze', name: 'Purple Haze', style: { background: 'linear-gradient(to right, #4776e6, #8e54e9)' } },
  { id: 'gold_rush', name: 'Gold Rush', style: { background: 'linear-gradient(to right, #ddb62d, #f7d064)' } },
  { id: 'fresh_mint', name: 'Fresh Mint', style: { background: 'linear-gradient(to right, #00c996, #96e493)' } },
  { id: 'rose_garden', name: 'Rose Garden', style: { background: 'linear-gradient(to right, #c33764, #1d2671)' } },
  { id: 'cosmic', name: 'Cosmic', style: { background: 'linear-gradient(to right, #ff00cc, #333399)' } },
  { id: 'arctic', name: 'Arctic', style: { background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)' } },
  { id: 'midnight', name: 'Midnight', style: { background: '#2c3e50' } },
  { id: 'peach_glow', name: 'Peach Glow', style: { background: 'linear-gradient(to right, #f8b500, #fce38a)' } },
  { id: 'emerald_dream', name: 'Emerald Dream', style: { background: 'linear-gradient(to right, #009245, #fcee21)' } },
  { id: 'lavender_fields', name: 'Lavender Fields', style: { background: 'linear-gradient(to right, #8693ab, #bdd4e7)' } },
];

export const ASPECT_RATIOS: AspectRatio[] = [
  { id: 'square', name: 'Square', ratio: '1:1', subtext: 'X/Twitter Posts', className: 'aspect-square' },
  { id: 'landscape', name: 'Landscape', ratio: '16:9', subtext: 'X Headers', className: 'aspect-video' },
  { id: 'portrait', name: 'Portrait', ratio: '9:16', subtext: 'Stories', className: 'aspect-[9/16]' },
];