// import { FiMenu } from "react-icons/fi";
import { RiSparkling2Fill } from "react-icons/ri";
import { Trash2 } from "lucide-react";

function Sidebar({ history, setResult, handleNewAnalysis, handleClearHistory }) {
  return (
    <div className="hidden md:flex w-280px bg-[#0f172a] border-r border-gray-800 flex-col">

      <div className="p-5 border-b border-gray-800 flex items-center gap-3">
        <RiSparkling2Fill className="text-blue-500 text-2xl" />

        <h1 className="text-xl font-bold">
          Nexa AI
        </h1>
      </div>


      <div className="p-4">
        <button 
        onClick={handleNewAnalysis}
        className="w-full bg-[#1e293b] hover:bg-[#2b3b52] transition-all duration-300 rounded-xl px-4 py-3 text-left font-medium">
          + New Analysis
        </button>
      </div>


      <div className="flex-1 overflow-y-auto px-3 pb-5">

       <div className="flex items-center justify-between mb-4">

  <h2 className="text-gray-400 font-medium">
    Recent
  </h2>



  {
    history.length > 0 && (

      <button
        onClick={handleClearHistory}

        className="
          p-2

          rounded-lg

          text-gray-500
          hover:text-red-400

          hover:bg-red-500/10

          transition-all
          duration-300
        "
      >

        <Trash2 size={18} />

      </button>

    )
  }

</div>


        <div className="space-y-2">
          {history.map((item) => (
            <div
              key={item.id}
              onClick={() => setResult(item.result)}
              className="bg-[#111827] hover:bg-[#1e293b] cursor-pointer transition-all rounded-xl p-3 text-sm text-gray-300 line-clamp-2"
            >
              {item.title}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Sidebar;