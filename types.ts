import type React from 'react';

export interface Template {
  id: string;
  name: string;
  subtext: string;
  icon: React.ReactNode;
  isLocked: boolean;
  defaultAppName: string;
}

export interface Background {
  id: string;
  name: string;
  style: React.CSSProperties;
}

export interface AspectRatio {
  id: string;
  name: string;
  ratio: string;
  subtext: string;
  className: string;
}
