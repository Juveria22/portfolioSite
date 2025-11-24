import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-mocha px-6 pt-16 pb-20 flex flex-col items-center">

      {/* Header */}
      <div className="w-full max-w-5xl mb-10">
        <h1 className="text-4xl font-bold text-light-sage mb-3 text-left">
          Welcome to my Project Cafe!
        </h1>

        <p className="text-light-sage text-left max-w-xl">
          Each drink on the menu is a project crafted with a base of code,
          a pump of creativity, and a layer of curiosity.
        </p>
      </div>

      {/* Menu Card Background */}
      <div
        className="
          bg-matcha
          rounded-3xl
          p-12
          shadow-lg
          border border-matcha/30
          w-full
          max-w-6xl
        "
      >

        {/* Drinks Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-16">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="flex flex-col items-center text-center group relative"
            >

        {/* Drink Container */}
        <div className="relative w-72 h-72 mb-4 rounded-full overflow-visible group">

          {/* Glow ring */}
          <div
            className="
              absolute inset-0
              rounded-full
              scale-[1.25]
              bg-matcha1/80
              blur-2xl
              opacity-0
              group-hover:opacity-100
              transition-all duration-500 ease-out
            "
          />

          {/* Drink Image */}
          <img
            src={proj.image}
            alt={proj.name}
            className="
              relative z-10
              w-full h-full object-contain mx-auto
              transition-transform duration-500 ease-out
              group-hover:scale-110
            "
          />

          {/* Hover Overlay */}
          <a
            href={proj.link}
            className="
              absolute inset-0 z-20
              flex items-center justify-center
              text-white text-xl font-semibold
              rounded-full
              opacity-0
              transition-all duration-300
              group-hover:opacity-100
            "
          >
            View Project!
          </a>
        </div>


              {/* Text */}
              <h3 className="text-2xl font-bold text-mocha mb-2">
                {proj.name}
              </h3>

              <p className="text-sm text-mocha/90 max-w-xs leading-relaxed">
                {proj.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </div>

  );
}
