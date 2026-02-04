import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const isDark = theme === "dark";

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="swap swap-rotate"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Dark mode on" : "Dark mode off"}>
      {isDark ? <MoonIcon size={24} aria-hidden="true" fill="#fff" /> : <SunIcon size={24} aria-hidden="true" />}
    </button>
  );
}
