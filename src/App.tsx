import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import PhoneFrame from "./components/PhoneFrame";
import Home from "./pages/mobile/Home";
import About from "./pages/mobile/About";
import Projects from "./pages/mobile/Projects";
import Contact from "./pages/mobile/Contact";
import HomeWeb from "./pages/web/Home";
import AboutWeb from "./pages/web/About";
import ProjectsWeb from "./pages/web/Projects";
import ContactWeb from "./pages/web/Contact";

function OutsideContent() {
  const location = useLocation();

  switch (location.pathname) {
    case "/about":
      return <AboutWeb />;
    case "/projects":
      return <ProjectsWeb />;
    case "/contact":
      return <ContactWeb />;
    case "/": // Default case for home
      return <HomeWeb />;
    default:
      return null; // Fallback if no match
  }
}

function AppContent() {
  return (
    <div
      className="w-screen h-screen min-h-0 min-w-0 flex flex-row items-center bg-[#101624] relative"
      style={{ overflow: "hidden" }}
    >
      {/* Outside content: hidden on mobile, flex on md+ */}
      <div className="hidden md:flex flex-1 h-full items-center justify-center relative">
        <OutsideContent />
      </div>
      {/* Phone: full width on mobile, fixed width on md+ */}
      <div className="flex justify-center items-center w-full md:w-[400px] h-full">
        <PhoneFrame>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PhoneFrame>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename="/">
      <AppContent />
    </Router>
  );
}

export default App;
