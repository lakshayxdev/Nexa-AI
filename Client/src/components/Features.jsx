import {
  Brain,
  ShieldCheck,
  Bug,
  Zap,
  Code2,
  Sparkles,
} from "lucide-react";

function Features() {

  const features = [
    {
      icon: <Brain size={32} />,
      title: "AI Code Analysis",
      desc: "Get intelligent analysis and deep insights for your code instantly.",
    },

    {
      icon: <Bug size={32} />,
      title: "Bug Detection",
      desc: "Detect hidden bugs and coding issues before deployment.",
    },

    {
      icon: <Zap size={32} />,
      title: "Fast Optimization",
      desc: "Improve performance and code quality with smart AI suggestions.",
    },

    {
      icon: <ShieldCheck size={32} />,
      title: "Security Scanning",
      desc: "Identify vulnerabilities and make your applications safer.",
    },

    {
      icon: <Code2 size={32} />,
      title: "Multi Language Support",
      desc: "Analyze JavaScript, Python, C++, Java and many more languages.",
    },

    {
      icon: <Sparkles size={32} />,
      title: "Modern Developer Experience",
      desc: "Premium UI and seamless workflow built for modern developers.",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-28 px-6 bg-[#020617]"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            FEATURES
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight">

            Why Developers Choose <br />

            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Nexa AI
            </span>

          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mt-6 text-lg">
            Powerful AI-driven tools designed to help developers analyze,
            debug and optimize code faster than ever.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="
                group
                p-8
                rounded-3xl
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
                hover:border-cyan-400/30
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {/* Icon */}
              <div className="
                w-16
                h-16
                rounded-2xl
                bg-linear-to-r
                from-cyan-400/20
                to-blue-500/20
                flex
                items-center
                justify-center
                text-cyan-400
                mb-6
              ">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              {/* Desc */}
              <p className="text-white/60 leading-relaxed">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;