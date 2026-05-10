import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeaturesPage from "./pages/FeaturesPage";
import Dashboard from "./pages/Dashboard";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

         <Route path="/pricing" element={<PricingPage />} />

        <Route
          path="/features"
          element={<FeaturesPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;




