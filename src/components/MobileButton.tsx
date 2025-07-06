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
    "w-full flex justify-center items-center text-lg font-semibold rounded-2xl px-4 py-4 shadow-md transition-all duration-150 mb-3 focus:outline-none";
  const enabled = primary
    ? "bg-white text-blue-600 border border-gray-400 hover:bg-blue-50 active:bg-blue-100"
    : "bg-white text-gray-600 border border-gray-400 hover:bg-blue-50 hover:text-blue-400 active:bg-blue-100";
  const disabledStyle =
    "bg-gray-200 text-gray-400 border border-transparent opacity-70 cursor-not-allowed";

  const className = `${base} ${disabled ? disabledStyle : enabled}`;

  if (href && !disabled) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default MobileButton;
