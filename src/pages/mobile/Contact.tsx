import React from "react";
import { CONTACTS } from "../../data/contacts";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start px-4 py-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 flex-1 overflow-y-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 mb-2">
          Let's Connect
        </h1>
        <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-3"></div>
        <p className="text-sm text-gray-600 text-center">
          Want to chat about code, cars, or coffee?
          <br />
          <span className="text-blue-600 font-semibold">
            Pick your favorite way to reach out!
          </span>
        </p>
      </div>

      {/* Contact Cards */}
      <div className="flex flex-col gap-4 w-full mb-6">
        {CONTACTS.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 border border-gray-200/50 hover:shadow-xl active:scale-95 transition-all duration-300 flex items-center gap-4"
          >
            {/* Icon with gradient background */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-3 shadow-md group-active:scale-110 transition-transform duration-200">
              <span className="text-xl text-white">
                <contact.icon />
              </span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {contact.label}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                {contact.sub}
              </p>
            </div>

            {/* Arrow indicator */}
            <div className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Fun Footer */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 border border-gray-200/50 w-full">
        <div className="text-center">
          <div className="text-2xl mb-2 animate-bounce">🏞️🚗</div>
          <p className="text-sm text-gray-600">
            Or just wave at me if you see me on a beautiful road!
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="flex justify-center gap-6 mt-6 text-gray-500">
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">24h</div>
          <div className="text-xs">Response</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">3+</div>
          <div className="text-xs">Languages</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">∞</div>
          <div className="text-xs">Coffee</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
