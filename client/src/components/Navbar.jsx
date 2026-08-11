import { useEffect, useState } from "react";

export default function Navbar({ dark, setDark }) {
  const links = ["home", "about", "skills", "projects", "experience", "contact"]; // ✅ added experience

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ SCROLL SPY FIX (more accurate)
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      links.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ SMOOTH SCROLL FIX (simpler & reliable)
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center">
      <div className="flex justify-between w-full max-w-6xl mx-auto px-6 py-3 bg-black/70 backdrop-blur-xl rounded-full mt-4">

        {/* LOGO */}
        <h1 className="font-bold text-white">
          Selvavignesh R<span className="text-orange-500">.</span>
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 text-sm text-gray-300">
          {links.map((item) => (
            <li key={item} className="relative">
              <button
                onClick={() => handleScrollTo(item)}
                className={`capitalize transition ${
                  active === item ? "text-orange-500" : "hover:text-white"
                }`}
              >
                {item}
              </button>

              {/* ✅ ORANGE UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300 ${
                  active === item ? "w-full" : "w-0"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          <button onClick={() => setDark(!dark)} className="text-white">
            {dark ? "🌙" : "☀️"}
          </button>

          <button
            onClick={() => handleScrollTo("contact")}
            className="hidden md:block bg-orange-500 px-4 py-1 rounded-full text-white"
          >
            Hire Me
          </button>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-20 left-0 w-full bg-[#020617]/95 backdrop-blur-md text-white p-6 md:hidden">

          {links.map((item) => (
            <button
              key={item}
              onClick={() => handleScrollTo(item)}
              className="block py-3 text-lg border-b border-gray-800 w-full text-left capitalize"
            >
              {item}
            </button>
          ))}

          <button
            onClick={() => handleScrollTo("contact")}
            className="mt-4 w-full bg-orange-500 py-3 rounded"
          >
            Hire Me
          </button>

        </div>
      )}
    </nav>
  );
}