import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-2xl cursor-pointer"
    >
      {dark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;