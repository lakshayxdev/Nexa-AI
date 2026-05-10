import Navbar from "../components/Navbar";
import Features from "../components/Features";

function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* Fixed Navbar */}
      <Navbar />

      {/* Space for navbar */}
      <div className="pt-32">

        <Features />

      </div>

    </div>
  );
}

export default FeaturesPage;