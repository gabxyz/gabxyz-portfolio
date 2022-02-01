import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const pageTheme = document.documentElement.className;

  localStorage.setItem("isChecked", pageTheme === "light" ? "false" : "true");

  return (
    <div>
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        defaultChecked={
          localStorage.getItem("isChecked") === "true" ? true : false
        }
        onClick={() => setTheme(pageTheme === "light" ? "dark" : "light")}
      />
      <label htmlFor="toggle">
        <div className="flex h-8 w-16 items-center justify-between rounded-lg bg-gray-300 p-1.5">
          <div className="toggle-dot absolute z-10 h-6 w-6 transform rounded-md bg-white duration-300 ease-in-out"></div>
          <BsSun />
          <BsMoonStars />
        </div>
      </label>
    </div>
  );
};
