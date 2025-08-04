import React from "react";

type ActionButtonProps = {
  text: string;
  href?: string;
  download?: boolean;
  inverted?: boolean;
  width?: string;
  height?: string;
  bgColor?: string;
  onClick?: () => void;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  href,
  download = false,
  inverted = false,
  width = "px-8",
  height = "py-4",
  bgColor = "bg-gradient-to-r from-blue-600 to-purple-600",
  onClick,
}) => {
  // Enhanced base styling with modern effects
  const base = `relative rounded-xl shadow-xl font-bold border-2 text-center transition-all duration-300 transform hover:scale-105 ${width} ${height} group overflow-hidden`;

  // Normal button - solid gradient with hover effects
  const normal = `${bgColor} text-white border-transparent hover:shadow-2xl hover:shadow-blue-500/25 
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent 
    before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300`;

  // Inverted button - outline with fill on hover
  const inv = `bg-transparent text-white border-white hover:bg-white hover:text-gray-900 
    hover:border-white hover:shadow-2xl hover:shadow-white/25
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 
    before:opacity-0 hover:before:opacity-10 before:transition-opacity before:duration-300`;

  // Icon for download buttons
  const downloadIcon = download && (
    <svg
      className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform duration-300"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  // Arrow icon for navigation buttons
  const arrowIcon = !download && (
    <svg
      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  const buttonContent = (
    <span className="relative z-10 flex items-center justify-center">
      {text}
      {downloadIcon}
      {arrowIcon}
    </span>
  );

  if (href && !download) {
    return (
      <a
        href={href}
        className={`${base} ${
          inverted ? inv : normal
        } inline-flex items-center justify-center`}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  if (href && download) {
    return (
      <a
        href={href}
        download
        className={`${base} ${
          inverted ? inv : normal
        } inline-flex items-center justify-center`}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${base} ${inverted ? inv : normal}`}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};

export default ActionButton;
