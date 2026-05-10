import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation();

  

  const [menuOpen, setMenuOpen] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const [showRegister, setShowRegister] = useState(false);

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );



  

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });



 

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });





  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);





  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await fetch(
        "https://nexa-ai-kiez.onrender.com/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(loginData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      setUser(data.user);

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      setShowLogin(false);

      setLoginData({
        email: "",
        password: "",
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }

  };



 

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const res = await fetch(
        "https://nexa-ai-kiez.onrender.com/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(registerData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      setUser(data.user);

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      setShowRegister(false);

      setRegisterData({
        name: "",
        email: "",
        password: "",
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }

  };



 

  const handleLogout = () => {

    setUser(null);

    localStorage.removeItem("user");

  };



  return (
    <>

      {/* NAVBAR */}
      <nav className="
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b
        border-white/10
        bg-black/20
        backdrop-blur-xl
      ">

        <div className="
          max-w-7xl
          mx-auto
          px-6
          md:px-12
          py-5
          flex
          items-center
          justify-between
        ">

          {/* LOGO */}
          <Link to="/">
            <h1 className="
              text-3xl
              md:text-4xl
              font-black
              tracking-tight
              bg-linear-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
            ">
              NEXA AI
            </h1>
          </Link>



          {/* DESKTOP NAV */}
          <div className="
            hidden
            md:flex
            items-center
            gap-2
            bg-white/5
            border
            border-white/10
            p-2
            rounded-full
          ">

            <Link
              to="/"
              className={`
                px-5
                py-2
                rounded-full
                text-sm
                transition
                ${
                  location.pathname === "/"
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }
              `}
            >
              Home
            </Link>



            <Link
              to="/features"
              className={`
                px-5
                py-2
                rounded-full
                text-sm
                transition
                ${
                  location.pathname === "/features"
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }
              `}
            >
              Features
            </Link>



            <Link
              to="/pricing"
              className={`
                px-5
                py-2
                rounded-full
                text-sm
                transition
                ${
                  location.pathname === "/pricing"
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }
              `}
            >
              Pricing
            </Link>

          </div>



          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* USER */}
            {user ? (

              <div className="hidden md:flex items-center gap-3">

                <div className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-2
                ">

                  <div className="
                    w-10
                    h-10
                    rounded-full
                    bg-linear-to-r
                    from-cyan-400
                    to-blue-500
                    flex
                    items-center
                    justify-center
                    text-black
                    font-bold
                  ">
                    {user.name?.charAt(0)}
                  </div>

                  <p className="text-white capitalize">
                    {user.name}
                  </p>

                </div>



                <button
                  onClick={handleLogout}
                  className="
                    px-5
                    py-2
                    rounded-full
                    bg-red-500/20
                    text-red-400
                    hover:bg-red-500/30
                    transition
                  "
                >
                  Logout
                </button>

              </div>

            ) : (

              <button
                onClick={() => setShowLogin(true)}
                className="
                  hidden
                  md:block
                  px-6
                  py-3
                  rounded-2xl
                  bg-linear-to-r
                  from-cyan-400
                  to-blue-500
                  text-black
                  font-bold
                  hover:scale-105
                  transition
                "
              >
                Sign In
              </button>

            )}



            {/* HAMBURGER */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              {
                menuOpen
                  ? <X size={30} />
                  : <Menu size={30} />
              }
            </button>

          </div>

        </div>



        {/* MOBILE MENU */}
        {
          menuOpen && (

            <div className="
              md:hidden
              px-6
              pb-6
            ">

              <div className="
                bg-[#0B1120]
                border
                border-white/10
                rounded-2xl
                p-4
                flex
                flex-col
                gap-3
              ">

                <Link
                  to="/"
                  className={`
                    px-4
                    py-3
                    rounded-xl
                    ${
                      location.pathname === "/"
                        ? "bg-white/10 text-white"
                        : "text-white/60"
                    }
                  `}
                >
                  Home
                </Link>



                <Link
                  to="/features"
                  className={`
                    px-4
                    py-3
                    rounded-xl
                    ${
                      location.pathname === "/features"
                        ? "bg-white/10 text-white"
                        : "text-white/60"
                    }
                  `}
                >
                  Features
                </Link>



                <Link
                  to="/pricing"
                  className={`
                    px-4
                    py-3
                    rounded-xl
                    ${
                      location.pathname === "/pricing"
                        ? "bg-white/10 text-white"
                        : "text-white/60"
                    }
                  `}
                >
                  Pricing
                </Link>



                {
                  user ? (

                    <button
                      onClick={handleLogout}
                      className="
                        mt-2
                        px-5
                        py-3
                        rounded-full
                        bg-red-500/20
                        text-red-400
                      "
                    >
                      Logout
                    </button>

                  ) : (

                    <button
                      onClick={() => {
                        setShowLogin(true);
                        setMenuOpen(false);
                      }}
                      className="
                        mt-2
                        px-5
                        py-3
                        rounded-full
                        bg-linear-to-r
                        from-cyan-400
                        to-blue-500
                        text-black
                        font-bold
                      "
                    >
                      Sign In
                    </button>

                  )
                }

              </div>

            </div>

          )
        }

      </nav>



      {/* LOGIN MODAL */}
      {
        showLogin && (

          <div className="
            fixed
            inset-0
            z-100
            flex
            items-center
            justify-center
            bg-black/70
            backdrop-blur-sm
            px-6
          ">

            <div className="
              relative
              w-full
              max-w-md
              rounded-3xl
              border
              border-white/10
              bg-[#0B1120]
              p-8
            ">

              {/* CLOSE */}
              <button
                onClick={() => setShowLogin(false)}
                className="absolute top-5 right-5 text-white"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold text-white mb-6">
                Welcome Back
              </h2>

              <form
                onSubmit={handleLogin}
                className="space-y-5"
              >

                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      email: e.target.value,
                    })
                  }
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    outline-none
                  "
                />

                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      password: e.target.value,
                    })
                  }
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    outline-none
                  "
                />

                <button
                  disabled={loading}
                  className="
                    w-full
                    py-4
                    rounded-2xl
                    bg-linear-to-r
                    from-cyan-400
                    to-blue-500
                    text-black
                    font-bold
                  "
                >
                  {
                    loading
                      ? "Loading..."
                      : "Sign In"
                  }
                </button>

              </form>



              <p className="text-white/60 text-center mt-6">

                Don't have an account?

                <button
                  onClick={() => {
                    setShowLogin(false);
                    setShowRegister(true);
                  }}
                  className="
                    text-cyan-400
                    ml-2
                    hover:underline
                  "
                >
                  Register
                </button>

              </p>

            </div>

          </div>

        )
      }



      {/* REGISTER MODAL */}
      {
        showRegister && (

          <div className="
            fixed
            inset-0
            z-100
            flex
            items-center
            justify-center
            bg-black/70
            backdrop-blur-sm
            px-6
          ">

            <div className="
              relative
              w-full
              max-w-md
              rounded-3xl
              border
              border-white/10
              bg-[#0B1120]
              p-8
            ">

              {/* CLOSE */}
              <button
                onClick={() => setShowRegister(false)}
                className="absolute top-5 right-5 text-white"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold text-white mb-6">
                Create Account
              </h2>

              <form
                onSubmit={handleRegister}
                className="space-y-5"
              >

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={registerData.name}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      name: e.target.value,
                    })
                  }
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    outline-none
                  "
                />

                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={registerData.email}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      email: e.target.value,
                    })
                  }
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    outline-none
                  "
                />

                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    })
                  }
                  className="
                    w-full
                    px-5
                    py-4
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    outline-none
                  "
                />

                <button
                  disabled={loading}
                  className="
                    w-full
                    py-4
                    rounded-full
                    bg-linear-to-r
                    from-cyan-400
                    to-blue-500
                    text-black
                    font-bold
                  "
                >
                  {
                    loading
                      ? "Loading..."
                      : "Register"
                  }
                </button>

              </form>



              <p className="text-white/60 text-center mt-6">

                Already have an account?

                <button
                  onClick={() => {
                    setShowRegister(false);
                    setShowLogin(true);
                  }}
                  className="
                    text-cyan-400
                    ml-2
                    hover:underline
                  "
                >
                  Login
                </button>

              </p>

            </div>

          </div>

        )
      }

    </>
  );
}

export default Navbar;
