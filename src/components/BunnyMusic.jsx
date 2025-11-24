import { useState, useRef, useEffect } from "react";

export default function BunnyMusicToggle() {
    const [isPlaying, setIsPlaying] = useState(false); // music starts off until click
    const audioRef = useRef(null);

    // Fade-in function
    const fadeIn = (audio) => {
        let vol = 0;
        audio.volume = 0;
        const fade = setInterval(() => {
        vol += 0.02;
        audio.volume = vol;

        if (vol >= 0.35) {
            audio.volume = 0.35;
            clearInterval(fade);
        }
        }, 60);
    };

    // Start music on first site click
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const startMusic = () => {
        audio.play().then(() => {
            fadeIn(audio);
            setIsPlaying(true);
        });

        window.removeEventListener("click", startMusic);
        };

        window.addEventListener("click", startMusic);

        return () => window.removeEventListener("click", startMusic);
    }, []);

    // Bunny toggle after music starts
    const toggleMusic = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        } else {
        audio.play().then(() => {
            fadeIn(audio);
            setIsPlaying(true);
        });
        }
    };

    return (
        <>
        <audio ref={audioRef} src="/piano-jazz.mp3" loop />

        <button
            onClick={toggleMusic}
            className="fixed bottom-4 right-4 z-50 focus:outline-none"
        >
            <img
            src={isPlaying ? "/bunny.gif" : "/headphone-bunny.gif"}
            alt="Bunny mascot"
            className="w-20 h-20 hover:scale-110 transition-transform drop-shadow-lg"
            />
        </button>
        </>
    );
}
