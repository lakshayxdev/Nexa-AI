import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 pt-8 min-h-screen overflow-hidden bg-[#050816]">

      {/* Aurora Glow */}
      <div className="absolute top-120px left-120px w-350px h-350px bg-cyan-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-120px right-120px w[350px h-350px bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-md mb-8">

          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

          <p className="text-cyan-300 text-sm font-semibold tracking-[0.2em] uppercase">
            AI Powered Development
          </p>

        </div>

        {/* Heading */}
        {/* <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-white">

  Build Smarter <br />

  <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    With Nexa AI
  </span>

</h1> */}

<h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Transform Errors into
        </h1>

        {/* Typing Effect */}
        <TypeAnimation
          sequence={[
            " Solutions",
            2000,
            " Clean Code",
            2000,
            " Better Logic",
            2000,
          ]}
          wrapper="span"
          speed={45}
          repeat={Infinity}
          className="
            block
            text-5xl
            md:text-7xl
            font-bold
            mt-2
            bg-linear-to-r
            from-cyan-400
            via-blue-400
            to-purple-500
            bg-clip-text
            text-transparent
          "
        />

        {/* Subtitle */}
        <p className="mt-8 text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          Analyze, debug and optimize your code instantly with an intelligent AI-powered coding assistant.
        </p>

        {/* Button */}
        <a href="#workspace">
        <button className="mt-12 px-8 py-4 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 text-black font-bold text-lg shadow-[0_0_40px_rgba(34,211,238,0.45)] hover:scale-105 transition duration-300 scroll-smooth">

          Get Started

        </button>
        </a>

      </div>

    </section>
  );
}

export default Hero;