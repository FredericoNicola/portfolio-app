import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home", icon: FaHome },
    { to: "/about", label: "About", icon: FaUser },
    { to: "/projects", label: "Projects", icon: FaCode },
    { to: "/contact", label: "Contact", icon: FaEnvelope },
  ];

  function isActive(path: string) {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  }

  return (
    <nav className="absolute bottom-0 left-0 w-full h-16 bg-white/95 backdrop-blur-md border-t border-gray-200/50 flex justify-around items-center z-30 shadow-lg">
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.to);

        return (
          <Link
            key={item.to}
            to={item.to}
            className={`relative flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer no-underline group ${
              active
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
            }`}
          >
            {/* Active indicator dot */}
            {active && (
              <div className="absolute -top-1 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
            )}

            {/* Icon */}
            <Icon
              className={`text-lg mb-1 transition-transform duration-200 ${
                active ? "scale-110" : "group-hover:scale-110"
              }`}
            />

            {/* Label */}
            <span
              className={`text-xs font-medium transition-all duration-200 ${
                active ? "font-bold" : "group-hover:font-semibold"
              }`}
            >
              {item.label}
            </span>

            {/* Hover effect background */}
            {!active && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
