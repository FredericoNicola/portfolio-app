import React from "react";
import { CONTACTS } from "../../data/contacts";

const ContactWeb: React.FC = () => (
  <div className="max-w-xl mx-auto px-4 py-16 flex flex-col items-center">
    <h1 className="text-4xl font-extrabold text-amber-50 mb-2 text-center">
      Contact Me
    </h1>
    <p className="text-lg text-amber-100 mb-8 text-center italic">
      Want to chat about code, cars, or coffee? <br /> Pick your favorite way to
      reach out!
    </p>
    <div className="flex flex-col gap-6 w-full">
      {CONTACTS.map((c) => (
        <a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-4 bg-[#181e2a] ${c.color} transition rounded-xl px-6 py-5 text-lg font-semibold text-amber-50 shadow-lg border border-[#23283a] group`}
        >
          <span className="text-2xl">{<c.icon />}</span>
          <span>
            {c.label}
            <span className="block text-sm text-amber-100 font-normal group-hover:underline">
              {c.sub}
            </span>
          </span>
        </a>
      ))}
    </div>
    <div className="mt-10 text-amber-200 text-center text-sm opacity-80">
      <span>Or just wave at me if you see me on a beautiful road! 🏞️🚗</span>
    </div>
  </div>
);

export default ContactWeb;
