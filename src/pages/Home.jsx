import React from "react";

export default function Home() {
    const [displayed, setDisplayed] = React.useState("");
    const fullText = "Hi there! Welcome to Juvi's cafe. Here you can order a wide array of drinks, view fun projects, and enjoy some calming music!"; 
    React.useEffect(() => {
    let index = 0;

    function tick() {
        setDisplayed(fullText.slice(0, index + 1)); // always slices from start
        index++;

        if (index < fullText.length) {
        setTimeout(tick, 35);
        }
    }

    tick(); // start typing

    }, []);

    return (
        <div className="min-h-screen bg-mocha flex justify-center items-start px-4 pt-20">

        <div className="max-w-7xl w-full">

        
        {/* Dialogue Box */}
            <div className="flex items-start gap-4 mt-10 
                bg-matcha
                border-4 border-light-sage 
                rounded-2xl 
                p-5 
                shadow-md 
                max-w-7xl">

                {/* Character Avatar */}
                <img 
                src={"/me.gif"}
                alt="Barista avatar"
                className="w-50 pixelated"
                />

                {/* Dialogue Container */}
                <div className>
                <p className="text-mocha font-bold mb-1">
                    Barista:
                </p>

                <p className="text-mocha leading-relaxed text-[25px]">
                    {displayed}
                </p>
                </div>
            </div>

            {/* Dialogue Arrow */}
            <div className="ml-40 mt-1 text-mocha text-lg select-none">
                ▼
            </div>

            {/* Main container */}
            <div className="bg-matcha rounded-3xl p-15 shadow-md mb-20">

            {/* Intro box */}
            <div className="bg-matcha1 rounded-3xl p-10 text-cream mb-8 shadow-sm">
                <p className="leading-relaxed text-[15px]">
                I’m Juveria, a recent grad in CS, Cog Sci, and Math who loves building
                projects that blend logic and creativity. My recent work has been in Machine Learning,
                Agentic AI, and Full-Stack Development. I’m learning, building, and exploring how AI
                can improve our ways of life in ethical ways whether that’s in providing investment
                insights or healthcare.
                <br /><br />
                If you would like to follow along on my journey, check out my blog! Or view my projects.
                </p>
            </div>

            {/* Tech stack box */}
            <div className="bg-matcha1 rounded-3xl p-6 text-cream shadow-sm">
                <h2 className="font-semibold text-lg mb-2">My Tech Stack:</h2>
                <p className="text-[14px] leading-relaxed">
                Languages: Python, Java, JavaScript/TypeScript, C++, SQL, HTML/CSS <br />
                Frameworks & AI: React, Node.js, Express, FastAPI, OpenAI API, LlamaIndex, Darts (PyTorch), Ollama <br />
                Databases: PostgreSQL, MySQL <br />
                Concepts: OOP, SQL, Agile, RESTful APIs, Debugging, Data Structures & Algorithms <br />
                Tools: AWS, GCP, Git/GitHub, OAuth, Figma, VS Code, Android Studio, Jupyter Notebook
                </p>
            </div>

            <a
                href="/projects"
                className="mt-6 inline-block bg-latte text-white font-semibold px-6 py-3 rounded-2xl shadow hover:bg-mocha transition-all"
            >
                View My Projects!
            </a>

            </div>
        </div>
        </div>

    );
}
