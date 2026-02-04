import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { Checkbox } from "../Checkbox/Checkbox";

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
    <Checkbox
      id="theme-toggle"
      name="theme-toggle"
      label={<SunIcon size={24} aria-hidden="true" />}
      placement="both"
      rightLabel={<MoonIcon size={24} aria-hidden="true" fill="#fff" />}
      toggleMode
      value={isDark}
      onChange={toggleTheme}
      aria-checked={isDark}
      aria-label={isDark ? "Dark mode on" : "Dark mode off"}
    />
  );
}
