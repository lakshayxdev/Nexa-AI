function Header({ user, setShowAuthModal }) {
  return (
    <div className="mb-10">

      {/* Top Bar */}
      <div className="flex items-start justify-between mb-8">

        {/* Version Badge */}
        <div className="inline-flex items-center gap-2 bg-[#111827] border border-green-400/30 px-4 py-2 rounded-full">

          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />

          <span className="text-sm text-green-300 font-medium">
            V4.2.0-STABLE
          </span>

        </div>

        {/* Login / User */}
        {
          user ? (
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Welcome back
                </p>

                <h3 className="text-white font-semibold">
                  {user.name}
                </h3>
              </div>

            </div>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-5
                py-2.5
                rounded-full
                font-medium
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Sign In
            </button>
          )
        }

      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">

        Nexa AI{" "}

        <span
  className="
    bg-linear-to-r
    from-cyan-300
    via-blue-400
    to-sky-200
    bg-clip-text
    text-transparent
    relative
  "

  style={{
    textShadow:
      `
      0 0 10px rgba(59,130,246,0.8),
      0 0 25px rgba(59,130,246,0.6),
      0 0 45px rgba(56,189,248,0.45)
      `,
  }}
>
  Code Assistant
</span>

      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">

        Analyze, optimize and deeply understand your code with
        AI-powered insights, architectural suggestions and
        intelligent debugging assistance.

      </p>

    </div>
  );
}

export default Header;