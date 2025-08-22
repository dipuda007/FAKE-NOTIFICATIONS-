
import React from 'react';
import { InfoIcon } from '../icons/Icons';

interface SliderProps {
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  unit: string;
  infoText?: string;
}

export const Slider: React.FC<SliderProps> = ({ label, value, onChange, min, max, unit, infoText }) => {
  const percentage = ((value - min) / (max - min)) * 100;
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{label}</h3>
            {infoText && (
                <div className="group relative">
                    <InfoIcon />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-xs p-2 text-xs bg-slate-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {infoText}
                    </div>
                </div>
            )}
        </div>
        <span className="text-sm font-medium text-slate-400">{value}{unit}</span>
      </div>
      <div className="relative h-8 flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer"
          style={{ 
              background: `linear-gradient(to right, #facc15 ${percentage}%, #475569 ${percentage}%)`
          }}
        />
      </div>
    </div>
  );
};
