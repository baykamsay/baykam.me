import { useEffect, useState } from "react";

export function useDarkMode() {
  const [dark, setDark] = useState(false);

  function toggle() {
    if (!dark) {
      window.localStorage.setItem("theme", "true");
      setDark(true);
    } else {
      window.localStorage.setItem("theme", "false");
      setDark(false);
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    console.log();
    if (localTheme) {
      setDark(localTheme === "true" ? true : false);
    } else if (window.matchMedia) {
      setDark(
        window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false
      );
    }
  }, []);
  return [dark, toggle];
}
