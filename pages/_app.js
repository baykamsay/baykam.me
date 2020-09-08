import "../styles/globals.scss";
import Navigation from "../components/navigation";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
