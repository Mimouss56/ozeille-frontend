import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <label className="swap swap-rotate">
      <input type="checkbox" checked={theme === "light"} onChange={toggleTheme} />
      {theme === "light" ? <SunIcon size={24} /> : <MoonIcon size={24} fill="#fef2f2" />}
    </label>
  );
}
