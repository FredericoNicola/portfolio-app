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
  width = "px-6",
  height = "py-3",
  bgColor = "",
  onClick,
}) => {
  // Only layout, border, and sizing here
  const base = `rounded-lg shadow-lg font-bold border-2 text-center transition ${width} ${height}`;

  // Only color and hover here
  const normal = `text-white border-white bg-transparent hover:bg-white/10 hover:text-blue-600`;
  const inv = `text-white border-white bg-transparent hover:bg-white hover:text-blue-600 ${bgColor}`;

  if (href && !download) {
    return (
      <a
        href={href}
        className={`${base} ${inverted ? inv : normal}`}
        onClick={onClick}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${base} ${inverted ? inv : normal}`}
      onClick={onClick}
      {...(download ? { download: true } : {})}
    >
      {text}
    </button>
  );
};

export default ActionButton;
