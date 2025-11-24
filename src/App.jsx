import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import BunnyMusicToggle from "./components/BunnyMusic.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  const location = useLocation();
  const [userInteracted, setUserInteracted] = useState(false);
  const [mutePop, setMutePop] = useState(false);

  // Detect first click so browser will allow audio
  useEffect(() => {
    const enableAudio = () => {
      setUserInteracted(true);
      window.removeEventListener("click", enableAudio);
    };

    window.addEventListener("click", enableAudio);
    return () => window.removeEventListener("click", enableAudio);
  }, []);

  // Play chime when route changes (only if not muted + user interacted)
  useEffect(() => {
    if (!userInteracted || mutePop) return;

    const audio = new Audio("/page-change.mp3");
    audio.volume = 0.4;
    audio.play();
  }, [location.pathname, userInteracted, mutePop]);

  return (
    <div className="bg-berry min-h-screen flex flex-col">
      
      <Navbar />

      {/* Main pages */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Bunny music Toggle */}
      <BunnyMusicToggle />

      {/* Mute Button */}
      <button
        onClick={() => setMutePop(!mutePop)}
        className="
          fixed bottom-4 left-4 z-[60]
          bg-matcha backdrop-blur-md
          px-4 py-2 rounded-full
          text-cocoa font-medium
          shadow-lg border border-light-sage
          hover:bg-matcha hover:text-white hover:shadow-latte/40
          transition-all duration-300 ease-out
        "
      >
        {mutePop ? "🔕" : "🔔"}
      </button>

    </div>
  );
}