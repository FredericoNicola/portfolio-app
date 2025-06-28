import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  function isActive(path: string) {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  }

  return (
    <nav className="absolute bottom-0 left-0 w-full h-14 bg-white border-t align-middle border-gray-200 flex justify-around items-center z-30">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`flex flex-col items-center text-xs px-3 py-1 rounded-md transition-colors cursor-pointer no-underline ${
            isActive(item.to)
              ? "bg-black text-white font-bold"
              : "text-gray-700 hover:text-black hover:bg-gray-200"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
