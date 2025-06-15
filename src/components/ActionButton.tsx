import React from "react";

type ActionButtonProps = {
  text: string;
  href: string;
  download?: boolean;
  inverted?: boolean;
  width?: string;
  height?: string;
  bgColor?: string;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  href,
  download = false,
  inverted = false,
  width = "px-6",
  height = "py-3",
  bgColor = "",
}) => {
  const base = `rounded-lg shadow-lg font-bold border-2 text-center transition ${width} ${height}`;
  const normal = `text-blue-600 border-white hover:bg-transparent hover:text-white ${bgColor}`;
  const inv = `bg-transparent border-white text-white hover:bg-white hover:text-blue-600 ${bgColor}`;
  return (
    <a
      href={href}
      {...(download ? { download: true } : {})}
      className={`${base} ${inverted ? inv : normal}`}
    >
      {text}
    </a>
  );
};

export default ActionButton;
