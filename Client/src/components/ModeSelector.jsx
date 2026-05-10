import { ScanSearch, Brain, Zap } from "lucide-react";

function ModeSelector({ mode, setMode }) {

  const modes = [
    "analyze",
    "explain",
    "optimize",
  ];

  const modelIcons = {
    analyze: <ScanSearch size={18} />,
    explain : <Brain size={18} />,
    optimize: <Zap size={18} />,
  };


  return (
    <div className="flex flex-wrap gap-3">

      {modes.map((m) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          className={`
            px-6 py-3 rounded-full capitalize font-medium transition-all

            ${
              mode === m
                ? "bg-blue-600 shadow-lg shadow-blue-600/30"
                : "bg-[#111827] hover:bg-[#1e293b]"
            }
          `}
        >
         <div className="flex items-center gap-2">
          {modelIcons[m]}
          <span>
          {m}
         </span>
         </div>
         
        </button>
      ))}

    </div>
  );
}

export default ModeSelector;