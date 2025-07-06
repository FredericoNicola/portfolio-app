// PhoneFrame.tsx
import React from "react";
import BottomNav from "./BottomNav";

export default function PhoneFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#101624] mr-4">
      <div className="w-full h-[720px] bg-white rounded-[40px] shadow-2xl overflow-hidden border-[16px] border-black relative">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-4 w-28 h-6 bg-black rounded-full z-10 shadow-md"
          style={{
            borderRadius: "16px",
          }}
        />
        <div className="absolute top-5 left-6 flex items-center z-20 text-xs font-semibold text-gray-800 select-none">
          Benzin
        </div>
        <div className="absolute top-5 right-6 flex items-center space-x-2 z-20">
          {/* Mobile Network */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="14" width="2" height="4" rx="1" fill="#222" />
            <rect x="6" y="10" width="2" height="8" rx="1" fill="#222" />
            <rect x="10" y="6" width="2" height="12" rx="1" fill="#222" />
            <rect x="14" y="2" width="2" height="16" rx="1" fill="#222" />
          </svg>
          {/* WiFi */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3 8C7 5 13 5 17 8"
              stroke="#222"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M6 11C8.5 9.5 11.5 9.5 14 11"
              stroke="#222"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9 14C10 13.5 11 13.5 12 14"
              stroke="#222"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="10" cy="16" r="1" fill="#222" />
          </svg>
          {/* Battery */}
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
            <rect
              x="2"
              y="6"
              width="18"
              height="8"
              rx="2"
              fill="#fff"
              stroke="#222"
              strokeWidth="1.5"
            />
            <rect x="20" y="9" width="2" height="2" rx="0.5" fill="#222" />
            <rect x="4" y="8" width="14" height="4" rx="1" fill="#222" />
          </svg>
        </div>
        <div className="pt-16 px-2 h-full w-full bg-white">{children}</div>
        <BottomNav />
      </div>
    </div>
  );
}
