import Navbar from "../components/Navbar";
import { Check } from "lucide-react";

function PricingPage() {

  const plans = [
    {
      name: "Free",
      price: "₹0",
      desc: "Perfect for beginners and students.",
      features: [
        "Basic AI Analysis",
        "Limited Requests",
        "Multi Language Support",
        "Community Access",
      ],
      button: "Get Started",
      popular: false,
    },

    {
      name: "Pro",
      price: "₹499",
      desc: "Best for developers and projects.",
      features: [
        "Unlimited Analysis",
        "Advanced AI Insights",
        "Bug Detection",
        "Optimization Suggestions",
        "Priority Speed",
      ],
      button: "Upgrade Now",
      popular: true,
    },

    {
      name: "Team",
      price: "₹1499",
      desc: "Built for teams and startups.",
      features: [
        "Everything in Pro",
        "Team Collaboration",
        "Shared Workspaces",
        "Premium Support",
        "API Access",
      ],
      button: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Pricing Section */}
      <section className="pt-36 pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-20">

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              PRICING
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">

              Simple Pricing <br />

              <span className="
                bg-linear-to-r
                from-cyan-400
                via-blue-500
                to-purple-500
                bg-clip-text
                text-transparent
              ">
                For Every Developer
              </span>

            </h1>

            <p className="text-white/60 max-w-2xl mx-auto mt-6 text-lg">
              Choose the perfect plan for your coding workflow and unlock the full power of Nexa AI.
            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {plans.map((plan, index) => (

              <div
                key={index}
                className={`
                  relative
                  rounded-3xl
                  border
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2

                  ${
                    plan.popular
                      ? "border-cyan-400/40 bg-cyan-400/5"
                      : "border-white/10 bg-white/5"
                  }
                `}
              >

                {/* Popular Badge */}
                {plan.popular && (

                  <div className="
                    absolute
                    top-5
                    right-5
                    px-3
                    py-1
                    rounded-full
                    bg-cyan-400
                    text-black
                    text-xs
                    font-bold
                  ">
                    MOST POPULAR
                  </div>

                )}

                {/* Plan Name */}
                <h2 className="text-3xl font-bold mb-3">
                  {plan.name}
                </h2>

                {/* Price */}
                <div className="flex items-end gap-2 mb-4">

                  <h3 className="text-5xl font-black">
                    {plan.price}
                  </h3>

                  <span className="text-white/50 mb-2">
                    /month
                  </span>

                </div>

                {/* Desc */}
                <p className="text-white/60 mb-8">
                  {plan.desc}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-10">

                  {plan.features.map((feature, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >

                      <div className="
                        w-6
                        h-6
                        rounded-full
                        bg-cyan-400/20
                        flex
                        items-center
                        justify-center
                      ">

                        <Check
                          size={14}
                          className="text-cyan-400"
                        />

                      </div>

                      <p className="text-white/80">
                        {feature}
                      </p>

                    </div>

                  ))}

                </div>

                {/* Button */}
                <button
                  className={`
                    w-full
                    py-4
                    rounded-2xl
                    font-bold
                    transition-all
                    duration-300

                    ${
                      plan.popular
                        ? "bg-linear-to-r from-cyan-400 to-blue-500 text-black hover:scale-[1.02]"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }
                  `}
                >
                  {plan.button}
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default PricingPage;