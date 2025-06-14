import React, { useState } from "react";
import type { ReactNode } from "react";

type DownloadButtonProps = {
  label?: string;
  downloadingLabel?: string;
  icon?: ReactNode;
  downloadingIcon?: ReactNode;
  tooltip?: string;
  fileUrl: string;
  fileName?: string;
  className?: string;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({
  label = "Download",
  downloadingLabel = "Downloading...",
  icon,
  downloadingIcon,
  tooltip = "Download file",
  fileUrl,
  fileName = "file",
  className = "",
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
      setTimeout(() => setIsDownloading(false), 2000);
    } catch (error) {
      console.error("Download failed:", error);
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleDownload}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        disabled={isDownloading}
        className={`relative inline-flex items-center px-6 py-3 rounded-lg
          bg-white border border-gray-200 shadow-sm
          hover:shadow-xl hover:scale-110 hover:bg-blue-50 hover:border-blue-200
          active:scale-95 active:bg-gray-100
          transition-all duration-300 ease-out
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
          disabled:opacity-75 disabled:cursor-not-allowed ${className}`}
        aria-label={label}
      >
        <span className="mr-2 font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
          {isDownloading ? downloadingLabel : label}
        </span>
        {isDownloading ? downloadingIcon : icon}
        {showTooltip && !isDownloading && (
          <div
            className="absolute -top-12 left-1/2 transform -translate-x-1/2
            bg-gray-800 text-white text-sm py-2 px-3 rounded-lg shadow-xl
            whitespace-nowrap z-10 pointer-events-none
            animate-fade-in opacity-100 animate-duration-200"
          >
            {tooltip}
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full
              border-8 border-transparent border-t-gray-800"
            ></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default DownloadButton;
