import { useState, useEffect } from "react";

// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
import ModeSelector from "../components/ModeSelector";
import LanguageSelector from "../components/LanguageSelector";
import CodeEditor from "../components/CodeEditor";
import AnalyzeButton from "../components/AnalyzeButton";
import OutputSection from "../components/OutputSection";
// import LoadingOverlay from "../components/LoadingOverlay";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Dashboard() {

  // =========================
  // MAIN STATES
  // =========================

  const [mode, setMode] = useState("analyze");

  const [language, setLanguage] = useState("javascript");

 const [code, setCode] = useState(
  localStorage.getItem("nexa_code") || ""
);

useEffect(() => {

  localStorage.setItem(
    "nexa_code",
    code
  );

}, [code]);

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  // const handleNewAnalysis = () => {
  //   setCode("");
  //   setResult(null);
  //   setMode("analyze");
  //   setLanguage("Javascript");
  // }

  // const handleClearHistory = () => {
  //   localStorage.removeItem("history");
  //   setHistory([]);
  //   setResult(null);
  //   setCode("");
  // }



  // =========================
  // AUTH STATES
  // =========================

  const [showAuthModal, setShowAuthModal] = useState(false);

  const [isLogin, setIsLogin] = useState(true);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [authData, setAuthData] = useState({
    name: "",
    email: "",
    password: "",
  });



  // =========================
  // HISTORY
  // =========================

  // const [history, setHistory] = useState(() => {
  //   return JSON.parse(
  //     localStorage.getItem("history")
  //   ) || [];
  // });



  // =========================
  // INPUT CHANGE
  // =========================

  const handleChange = (e) => {

    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    });

  };



  // =========================
  // LOGIN / REGISTER
  // =========================

  const handleAuth = async () => {

  try {

    const endpoint = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";



    const res = await fetch(endpoint, {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(authData),

    });



    const data = await res.json();

    console.log(data);



    if (data.user) {

      // SAVE USER
      setUser(data.user);



      // SAVE TO LOCAL STORAGE
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );



      // CLOSE MODAL
      setShowAuthModal(false);



      // RESET FORM
      setAuthData({
        name: "",
        email: "",
        password: "",
      });
      

    } else {

      alert(data.message);

    }

  } catch (error) {

    console.log(error);

  }

};



  // =========================
  // ANALYZE
  // =========================

  const handleAnalyze = async () => {

    try {

      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/ask",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            prompt: code,
            mode,
            language,
          }),
        }
      );



      const data = await res.json();

      setResult(data);



      // SAVE HISTORY

      const historyItem = {
        id: Date.now(),
        title: data.title || "Code Analysis",
        result: data,
      };



      const existingHistory =
        JSON.parse(localStorage.getItem("history")) || [];



      const updatedHistory = [
        historyItem,
        ...existingHistory,
      ];



      localStorage.setItem(
        "history",
        JSON.stringify(updatedHistory)
      );



      // setHistory(updatedHistory);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };



  // =========================
  // LOGOUT
  // =========================

  // const handleLogout = () => {

  //   setUser(null);

  //   localStorage.removeItem("user");

  // };



  return (
  <div className="min-h-screen bg-[#020617] text-white" >

    {/* Navbar */}
    <Navbar />

    {/* Hero Section */}
    <Hero />

    {/* Dashboard Workspace */}
    <section
      id="workspace"
      className="relative z-10 px-4 md:px-8 pb-20"
    >

      <div className="max-w-7xl mx-auto">

        {/* Header */}
       

        {/* Selectors */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6 mt-8">

          <ModeSelector
            mode={mode}
            setMode={setMode}
          />

          <LanguageSelector
            language={language}
            setLanguage={setLanguage}
          />

        </div>

        {/* Editor */}
        <CodeEditor
          code={code}
          setCode={setCode}
          language={language}
        />

        {/* Analyze Button */}
        <AnalyzeButton
          loading={loading}
          handleAnalyze={handleAnalyze}
          code={code}
        />

        {/* Output */}
        {
          result && (
            <OutputSection result={result} />
          )
        }

      </div>
    </section>


      {/* LOADING */}
      {/* {
        loading && <LoadingOverlay />
      } */}



      {/* AUTH MODAL */}
      {
        showAuthModal && (

          <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* OVERLAY */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowAuthModal(false)}
            />



            {/* MODAL */}
            <div className="relative z-10 w-400px bg-[#111827] border border-gray-800 rounded-3xl p-8 shadow-2xl">

              {/* TITLE */}
              <h2 className="text-3xl font-bold mb-6">

                {
                  isLogin
                    ? "Welcome Back"
                    : "Create Account"
                }

              </h2>



              {/* NAME */}
              {
                !isLogin && (

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={authData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-[#1f2937] mb-4 outline-none"
                  />

                )
              }



              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={authData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-[#1f2937] mb-4 outline-none"
              />



              {/* PASSWORD */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={authData.password}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-[#1f2937] mb-6 outline-none"
              />



              {/* BUTTON */}
              <button
                onClick={handleAuth}
                className="
                  w-full
                  bg-blue-600
                  hover:bg-blue-700
                  py-3
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-300
                "
              >

                {
                  isLogin
                    ? "Login"
                    : "Register"
                }

              </button>



              {/* TOGGLE */}
              <p className="text-gray-400 text-sm text-center mt-6">

                {
                  isLogin
                    ? "Don't have an account?"
                    : "Already have an account?"
                }

                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-400 ml-2 hover:underline"
                >

                  {
                    isLogin
                      ? "Register"
                      : "Login"
                  }

                </button>

              </p>

            </div>

          </div>

        )
      }

    </div>
  );
}

export default Dashboard;