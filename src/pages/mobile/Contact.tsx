import React from "react";
import { CONTACTS } from "../../data/contacts";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start px-4 py-8 bg-white flex-1">
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">
        Contact Me
      </h1>
      <p className="text-base text-gray-700 mb-6 text-center italic">
        Let’s chat about code, cars, or coffee!
      </p>
      <div className="flex flex-col gap-4 w-full">
        {CONTACTS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 border-1 border-gray-400 bg-gray-100 active:bg-gray-200 transition rounded-xl px-4 py-4 text-base font-semibold text-gray-900 shadow group`}
          >
            <span className="text-xl">{<c.icon />}</span>
            <span>
              {c.label}
              <span className="block text-xs text-gray-500 font-normal group-active:underline">
                {c.sub}
              </span>
            </span>
          </a>
        ))}
      </div>
      <div className="mt-8 text-gray-600 text-center text-xs opacity-80">
        Or just wave at me if you see me on a beautiful road! 🏞️🚗
      </div>
    </div>
  );
};

export default Contact;
