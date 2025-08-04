import { Routes, Route, useLocation, HashRouter } from "react-router-dom";
import PhoneFrame from "./components/PhoneFrame";
import Home from "./pages/mobile/Home";
import About from "./pages/mobile/About";
import Projects from "./pages/mobile/Projects";
import Contact from "./pages/mobile/Contact";
import HomeWeb from "./pages/web/Home";
import AboutWeb from "./pages/web/About";
import ProjectsWeb from "./pages/web/Projects";
import ContactWeb from "./pages/web/Contact";
import BottomNav from "./components/BottomNav";

function OutsideContent() {
  const location = useLocation();

  switch (location.pathname) {
    case "/about":
      return <AboutWeb />;
    case "/projects":
      return <ProjectsWeb />;
    case "/contact":
      return <ContactWeb />;
    case "/":
      return <HomeWeb />;
    default:
      return null;
  }
}

function AppContent() {
  return (
    <div
      className="w-screen h-screen min-h-0 min-w-0 flex flex-row items-center bg-[#101624] relative"
      style={{ overflow: "auto" }}
    >
      {/* Outside content: hidden on mobile, flex on md+ */}
      <div className="hidden md:flex flex-1 h-full items-center justify-center relative">
        <div className="w-full max-w-6xl px-8">
          <OutsideContent />
        </div>
      </div>
      {/* PhoneFrame: only on desktop (md+) */}
      <div className="hidden md:flex justify-center items-center w-[450px] h-screen sticky top-0 right-0">
        <PhoneFrame>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PhoneFrame>
      </div>
      {/* Mobile app content: only on mobile (<md) */}
      <div className="flex md:hidden flex-col h-full w-full relative">
        <div className="flex-1 overflow-auto pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="fixed bottom-0 left-0 w-full max-w-md mx-auto md:hidden z-50">
          <BottomNav />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
