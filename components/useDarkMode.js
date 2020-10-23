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
    localTheme && setDark(localTheme === "true" ? true : false);
  }, []);
  return [dark, toggle];
}
