// PhoneFrame.tsx
import React from "react";
import BottomNav from "./BottomNav";

export default function PhoneFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#101624] mr-4 relative">
      {/* Background glow effects */}
      <div className="absolute top-20 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Phone container */}
      <div className="relative group">
        {/* Outer glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-[60px] blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

        {/* Phone frame */}
        <div className="relative w-[380px] h-[720px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-slate-700 backdrop-blur-sm">
          {/* Inner phone bezel */}
          <div className="absolute inset-2 bg-black rounded-[32px] shadow-inner overflow-hidden">
            {/* Notch */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2 w-24 h-5 bg-black rounded-full z-30 shadow-lg border border-slate-600"></div>

            {/* Status bar */}
            <div className="absolute top-2 left-4 flex items-center z-30 text-xs font-semibold text-white select-none">
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Portfolio</span>
              </div>
            </div>

            <div className="absolute top-2 right-4 flex items-center space-x-2 z-30">
              {/* Modern signal bars (grow from bottom to top) */}
              <div className="flex items-end space-x-0.5">
                <div className="w-0.5 h-3 bg-white rounded-full"></div>
                <div className="w-0.5 h-4 bg-white rounded-full"></div>
                <div className="w-0.5 h-5 bg-white rounded-full"></div>
                <div className="w-0.5 h-6 bg-white rounded-full"></div>
              </div>

              {/* WiFi icon */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 6C5 4 11 4 14 6"
                  stroke="#fff"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M4 8.5C6 7.5 10 7.5 12 8.5"
                  stroke="#fff"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M6 11C7 10.5 9 10.5 10 11"
                  stroke="#fff"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <circle cx="8" cy="13" r="0.5" fill="#fff" />
              </svg>

              {/* Modern battery */}
              <div className="flex items-center">
                <div className="w-5 h-3 border border-white rounded-sm relative">
                  <div className="absolute inset-0.5 bg-green-400 rounded-sm"></div>
                </div>
                <div className="w-0.5 h-1.5 bg-white rounded-r-sm ml-0.5"></div>
              </div>
            </div>

            {/* Screen content area with shadow mask */}
            <div className="absolute top-8 left-0 right-0 bottom-0 bg-white overflow-hidden">
              {/* Inner shadow to blend bottom nav */}
              <div className="absolute inset-0 shadow-[inset_0_-16px_24px_-8px_rgba(0,0,0,0.15)] rounded-b-[24px] pointer-events-none z-20"></div>

              <div className="relative h-full w-full rounded-b-[24px] overflow-hidden">
                {children}
                <BottomNav />
              </div>
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute -left-1 top-20 w-1 h-8 bg-slate-600 rounded-l-lg shadow-lg"></div>
        <div className="absolute -left-1 top-32 w-1 h-12 bg-slate-600 rounded-l-lg shadow-lg"></div>
        <div className="absolute -left-1 top-48 w-1 h-12 bg-slate-600 rounded-l-lg shadow-lg"></div>
        <div className="absolute -right-1 top-48 w-1 h-16 bg-slate-600 rounded-r-lg shadow-lg"></div>
      </div>
    </div>
  );
}
