import { ThemeProvider } from "styled-components";
import { useDarkMode } from "../components/useDarkMode";
import { lightTheme, darkTheme } from "../components/theme";
import Navigation from "../components/navigation";
import { GlobalStyles } from "../components/global";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useDarkMode();

  function change() {
    setDark(!dark);
  }

  return (
    <ThemeProvider theme={dark === false ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Navigation click={change} dark={dark} />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
