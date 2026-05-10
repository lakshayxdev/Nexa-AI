function AnalyzeButton({ loading, handleAnalyze, code }) {

  const isDisabled = !code.trim();

  return (
    <div className="mt-8 mb-8 flex flex-col items-center">

      {/* BUTTON */}
      <button
        onClick={handleAnalyze}
        disabled={isDisabled || loading}
        className={`
          px-8
          py-4
          rounded-2xl
          font-bold
          text-lg
          transition-all
          duration-300

          ${
            isDisabled
              ? "bg-white/10 text-white/40 cursor-not-allowed"
              : "bg-linear-to-r from-cyan-400 to-blue-500 text-black hover:scale-105 shadow-[0_0_35px_rgba(34,211,238,0.25)]"
          }
        `}
      >

        {
          loading
            ? "Analyzing..."
            : "Analyze Code"
        }

      </button>



      {/* AI WORKING TEXT */}
      {
        loading && (

          <div className="mt-5 text-center space-y-2">

            <AnimatedText text="Analyzing your code" />

            <AnimatedText text="Detecting bugs" delay="200ms" />

            <AnimatedText text="Generating AI insights" delay="400ms" />

          </div>

        )
      }

    </div>
  );
}



function AnimatedText({ text, delay = "0ms" }) {

  return (
    <div
      className="text-cyan-300 text-sm tracking-wide"
      style={{
        animationDelay: delay,
      }}
    >

      {text}

      <span className="inline-flex ml-1">

        <span className="animate-bounce [animation-delay:0ms]">
          .
        </span>

        <span className="animate-bounce [animation-delay:150ms]">
          .
        </span>

        <span className="animate-bounce [animation-delay:300ms]">
          .
        </span>

      </span>

    </div>
  );
}

export default AnalyzeButton;