// import {AlertTriangle, Brain, Zap, Code2 } from "lucide-react"

function OutputCard({ title, color, items, borderColor, hoverShadow, icon, bgcolor, hoverborder }) {
  return (
    <div className={`bg-${bgcolor} border ${borderColor} hover:${hoverborder} rounded-3xl border-l-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${hoverShadow}`}>

      <div className="flex items-center gap-3 mb-4">
        <div className={color}>
          {icon}
        </div>
        <h2 className={`text-xl font-semibold ${color}`}>
          {title}
        </h2>
      </div>


      <ul className="space-y-3 text-gray-300 list-disc ml-5 leading-relaxed">

        {items?.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default OutputCard;