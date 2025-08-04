import React from "react";

type MobileButtonProps = {
  children: React.ReactNode;
  href?: string;
  disabled?: boolean;
  primary?: boolean;
  onClick?: () => void;
};

const MobileButton: React.FC<MobileButtonProps> = ({
  children,
  href,
  disabled = false,
  primary = false,
  onClick,
}) => {
  const base =
    "w-full flex justify-center items-center text-sm font-bold rounded-2xl px-6 py-3 shadow-lg transition-all duration-300 transform focus:outline-none";
  const enabled = primary
    ? `bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white 
       hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 
       active:scale-95 border border-white/20 shadow-blue-500/30`
    : `bg-white/90 backdrop-blur-sm text-gray-700 border border-gray-200/50 
       hover:bg-white hover:text-blue-600 hover:border-blue-300 
       hover:shadow-blue-200/50 active:scale-95`;
  const disabledStyle =
    "bg-gray-200 text-gray-400 border border-gray-300 opacity-50 cursor-not-allowed";

  const className = `${base} ${disabled ? disabledStyle : enabled}`;

  if (href && !disabled) {
    return (
      <a href={href} download={href.includes(".pdf")} className={className}>
        <span className="flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      <span className="flex items-center gap-2">{children}</span>
    </button>
  );
};

export default MobileButton;
