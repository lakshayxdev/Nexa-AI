import { AlertTriangle, Brain, Zap, Code2, Copy, Check } from "lucide-react";
import OutputCard from "./OutputCard";
import { useState } from "react";


function OutputSection({ result }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="space-y-6">

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {result.errors?.length>0 && (
        <OutputCard
          title="Errors"
          color="text-red-400"
          borderColor="border border-red/20"
          hoverborder="border border-red-400/30"
          hoverShadow="hover:Shadow-red-500/10"
          // bgcolor="red-500/20"
          icon={<AlertTriangle size={22} />}
          items={result.errors || []}
        />
        )}

        {result.explanation?.length>0 && (
        <OutputCard
          title="Explanation"
          color="text-blue-400"
          borderColor="border border-blue/10"
          hoverborder="border border-blue-400/30"
          hoverShadow="hover:Shadow-blue-500/10"
          bgcolor="blue-600/40"
          icon={<Brain size={22} />}
          items={result.explanation || []}
        />
        )}

      </div>

      {result.optimizations?.length>0 && (
      <OutputCard
        title="Optimizations"
        color="text-yellow-400"
        borderColor="border border-yellow/10"
        hoverborder="border border-yellow-400/50"
        hoverShadow="hover:Shadow-yellow-500/30"
        bgcolor="green-500/40"
        icon={<Zap size={22} />}
        items={result.optimizations || []}
      />
      )}

      {result.fixed_code?.trim() && (

  <div className="
    bg-[#111827]
    border
    border-green-500
    rounded-3xl
    p-6
    border-l-4
    overflow-x-auto
    relative
  ">

    {/* Header */}
    <div className="flex items-center justify-between mb-4">

      <div className="flex items-center gap-3">

        <div className="text-green-400">
          <Code2 size={22} />
        </div>

        <h2 className="text-green-400 text-xl font-semibold">
          Fixed Code
        </h2>

      </div>



      {/* Copy Button */}
      <button
  onClick={() => {

    navigator.clipboard.writeText(
      result.fixed_code
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);

  }}
  className="
    flex
    items-center
    gap-2
    px-4
    py-2
    rounded-xl
    bg-white/5
    border
    border-white/10
    text-white/70
    hover:text-white
    hover:bg-white/10
    transition
  "
>

  {
    copied ? (
      <>
        <Check size={18} />
        Copied
      </>
    ) : (
      <>
        <Copy size={18} />
        Copy
      </>
    )
  }

</button>

    </div>



    {/* Code */}
    <pre className="
      bg-[#020617]
      p-5
      rounded-2xl
      text-sm
      overflow-x-auto
    ">

      <code>
        {result.fixed_code}
      </code>

    </pre>

  </div>

)}

    </div>
  );
}

export default OutputSection;